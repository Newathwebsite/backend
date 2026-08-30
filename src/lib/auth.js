import jwt from 'jsonwebtoken';
import { prisma } from '../db.js';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  console.warn('[ath-ai-server] JWT_SECRET is not set — admin login will not work until it is. See .env.example.');
}

export function signToken(user) {
  return jwt.sign({ sub: user.id, username: user.username }, JWT_SECRET || 'dev-only-insecure-secret', { expiresIn: '7d' });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET || 'dev-only-insecure-secret');
  } catch {
    return null;
  }
}

// Runs on every request (mounted globally, before routes) — attaches
// req.user when a valid token is present, but never blocks the request.
// Public GETs use this to decide whether to return everything (logged-in
// admin) or only published/visible content (everyone else).
export function attachUser() {
  return async (req, res, next) => {
    const header = req.header('authorization') || '';
    const token = header.startsWith('Bearer ') ? header.slice(7) : null;
    if (token) {
      const payload = verifyToken(token);
      if (payload?.sub) {
        const user = await prisma.user.findUnique({ where: { id: payload.sub } });
        if (user) req.user = user;
      }
    }
    next();
  };
}

export function requireAuth(req, res, next) {
  if (!req.user) return res.status(401).json({ error: 'Not authenticated.' });
  next();
}

// The real security boundary — the client's own can() check is UX only.
export function requirePermission(resource, action = 'edit') {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ error: 'Not authenticated.' });
    const perms = req.user.permissions || {};
    if (!perms?.[resource]?.[action]) return res.status(403).json({ error: 'Not permitted.' });
    next();
  };
}
