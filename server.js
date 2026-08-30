import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import Anthropic from '@anthropic-ai/sdk';
import webpush from 'web-push';

import { prisma } from './src/db.js';
import { attachUser } from './src/lib/auth.js';
import { createResourceRouter } from './src/lib/resourceRouter.js';
import { RESOURCES } from './src/lib/resourceConfig.js';
import authRoutes from './src/routes/auth.js';
import usersRoutes from './src/routes/users.js';
import settingsRoutes from './src/routes/settings.js';
import trashRoutes from './src/routes/trash.js';
import uploadRoutes from './src/routes/upload.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 8787;
const ADMIN_PROXY_TOKEN = process.env.ADMIN_PROXY_TOKEN || '';
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGIN || 'http://localhost:5174').split(',').map((s) => s.trim()).filter(Boolean);

if (!process.env.ANTHROPIC_API_KEY) {
  console.warn('[ath-ai-server] ANTHROPIC_API_KEY is not set — copy .env.example to .env and fill it in. The server will run so you can verify routing/CORS/rate-limiting, but /api/ai/generate will return an error until a real key is set.');
}

const anthropic = process.env.ANTHROPIC_API_KEY ? new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY }) : null;

// ---- Web Push (real browser/phone notifications) ----
const SUBSCRIPTIONS_FILE = path.join(__dirname, 'subscriptions.json');
const VAPID_PUBLIC_KEY = process.env.VAPID_PUBLIC_KEY || '';
const VAPID_PRIVATE_KEY = process.env.VAPID_PRIVATE_KEY || '';
const VAPID_SUBJECT = process.env.VAPID_SUBJECT || 'mailto:admin@example.com';

if (VAPID_PUBLIC_KEY && VAPID_PRIVATE_KEY) {
  webpush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY);
} else {
  console.warn('[ath-ai-server] VAPID_PUBLIC_KEY/VAPID_PRIVATE_KEY not set — push notification endpoints will return an error until they are.');
}

function loadSubscriptions() {
  try {
    return JSON.parse(fs.readFileSync(SUBSCRIPTIONS_FILE, 'utf8'));
  } catch (e) {
    return [];
  }
}
function saveSubscriptions(subs) {
  fs.writeFileSync(SUBSCRIPTIONS_FILE, JSON.stringify(subs, null, 2));
}

const app = express();
app.use(cors({
  origin(origin, callback) {
    if (!origin || ALLOWED_ORIGINS.includes(origin)) return callback(null, true);
    callback(new Error(`Origin ${origin} not allowed`));
  },
}));
app.use(express.json({ limit: '2mb' }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Attaches req.user from a Bearer JWT when present, on every request —
// public GETs use req.user's presence to decide published-only vs. everything.
app.use(attachUser());

// ---- Content API (the real backend the CMS now runs on) ----
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/trash', trashRoutes);
app.use('/api/media/upload', uploadRoutes);

for (const [resource, config] of Object.entries(RESOURCES)) {
  app.use(`/api/${resource}`, createResourceRouter({ ...config, resource }));
}

// This token is shipped in the admin bundle (VITE_ADMIN_PROXY_TOKEN), so it is
// NOT a real secret — it only deters casual/automated abuse from outside the
// app. The real access control is the same one already protecting the rest
// of the admin panel: you have to be logged into /admin to see the buttons
// that call this. Cost exposure is bounded by the rate limiter below.
function checkToken(req, res, next) {
  if (!ADMIN_PROXY_TOKEN) return next(); // no token configured — open (dev convenience only)
  if (req.header('x-ath-admin-token') !== ADMIN_PROXY_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many AI requests — please wait a few minutes and try again.' },
});

const SYSTEM_PROMPTS = {
  blog: 'You are a real-estate content writer for Asset Tree Homes, a CREDAI-member developer in Chennai. Write clear, factual, engaging blog content in plain paragraphs (no markdown headers). Never invent statistics, prices, or specifications that were not given to you in the prompt.',
  'seo-title': 'You write SEO meta titles. Reply with ONLY the title text, no quotes, no explanation, under 60 characters.',
  'seo-description': 'You write SEO meta descriptions. Reply with ONLY the description text, no quotes, no explanation, between 140 and 160 characters.',
  script: 'You write small, safe JavaScript/HTML snippets for injection into a website <head> or <body> (e.g. tracking pixels, small widgets). Reply with ONLY the code, no explanation, no markdown code fences. Never include real API keys or secrets — use an obvious PLACEHOLDER if one is needed.',
};

app.post('/api/ai/generate', checkToken, limiter, async (req, res) => {
  const { kind, prompt } = req.body || {};
  const system = SYSTEM_PROMPTS[kind];
  if (!system) return res.status(400).json({ error: `Unknown kind "${kind}". Expected one of: ${Object.keys(SYSTEM_PROMPTS).join(', ')}` });
  if (!prompt || typeof prompt !== 'string' || !prompt.trim()) return res.status(400).json({ error: 'Missing "prompt".' });
  if (!anthropic) return res.status(503).json({ error: 'Server is missing ANTHROPIC_API_KEY — set it in ath-ai-server/.env and restart.' });

  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-5',
      max_tokens: kind === 'blog' ? 1200 : 300,
      system,
      messages: [{ role: 'user', content: prompt.slice(0, 4000) }],
    });
    const text = message.content.find((b) => b.type === 'text')?.text || '';
    res.json({ text });
  } catch (err) {
    console.error('[ath-ai-server] Anthropic API error:', err?.message || err);
    res.status(502).json({ error: 'AI generation failed. Please try again shortly.' });
  }
});

// Public: the client needs this to call pushManager.subscribe(). Not a secret.
app.get('/api/push/vapid-key', (req, res) => res.json({ publicKey: VAPID_PUBLIC_KEY }));

// Public: any visitor's browser can register itself for notifications.
app.post('/api/push/subscribe', (req, res) => {
  const sub = req.body?.subscription;
  if (!sub?.endpoint) return res.status(400).json({ error: 'Missing subscription.' });
  const subs = loadSubscriptions();
  if (!subs.find((s) => s.endpoint === sub.endpoint)) {
    subs.push(sub);
    saveSubscriptions(subs);
  }
  res.json({ ok: true });
});

app.post('/api/push/unsubscribe', (req, res) => {
  const endpoint = req.body?.endpoint;
  if (!endpoint) return res.status(400).json({ error: 'Missing endpoint.' });
  saveSubscriptions(loadSubscriptions().filter((s) => s.endpoint !== endpoint));
  res.json({ ok: true });
});

// Admin-only: fan out a real push notification to every subscribed browser.
app.post('/api/push/send', checkToken, limiter, async (req, res) => {
  const { title, body, url } = req.body || {};
  if (!title || !body) return res.status(400).json({ error: 'Missing "title" or "body".' });
  if (!VAPID_PUBLIC_KEY || !VAPID_PRIVATE_KEY) return res.status(503).json({ error: 'Server is missing VAPID keys — set them in ath-ai-server/.env and restart.' });

  const subs = loadSubscriptions();
  const payload = JSON.stringify({ title, body, url: url || '/' });
  let sent = 0;
  const stillValid = [];

  await Promise.all(subs.map(async (sub) => {
    try {
      await webpush.sendNotification(sub, payload);
      sent += 1;
      stillValid.push(sub);
    } catch (err) {
      // 404/410 = the subscription is gone (uninstalled, permission revoked) — prune it.
      if (err.statusCode !== 404 && err.statusCode !== 410) stillValid.push(sub);
    }
  }));

  saveSubscriptions(stillValid);
  res.json({ ok: true, sent, total: stillValid.length });
});

app.get('/api/push/subscriber-count', checkToken, (req, res) => res.json({ count: loadSubscriptions().length }));

app.get('/api/health', (req, res) => res.json({ ok: true }));

// Central error handler — every route above forwards unexpected errors via
// next(err) instead of leaking a stack trace or hanging the request.
app.use((err, req, res, next) => {
  console.error('[ath-ai-server]', err);
  res.status(500).json({ error: 'Internal server error.' });
});

app.listen(PORT, () => {
  console.log(`[ath-ai-server] listening on http://localhost:${PORT}`);
});

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});
