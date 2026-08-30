import express from 'express';
import { prisma } from '../db.js';
import { requireAuth } from '../lib/auth.js';
import { RESOURCES } from '../lib/resourceConfig.js';

// Soft-delete store shared by every collection. `type` matches the same
// resource keys used everywhere else (see resourceConfig.js) — e.g. 'blog'
// for blog posts, 'careers' for job openings — so restoring a trashed
// record splits its fields into columns vs. `data` exactly the same way a
// fresh create would (via each resource's `knownFields`), keeping
// published/category/order/slug usable for filtering after a restore.
const router = express.Router();

function canEdit(user, resource) {
  return !!user?.permissions?.[resource]?.edit;
}

function splitByKnownFields(payload, knownFields, idField) {
  const known = {};
  const data = { ...payload };
  delete data[idField];
  for (const f of knownFields) {
    if (f in data) {
      known[f] = data[f];
      delete data[f];
    }
  }
  return { known, data };
}

router.get('/', requireAuth, async (req, res, next) => {
  try {
    const entries = await prisma.trash.findMany({ orderBy: { deletedAt: 'desc' } });
    res.json(entries.map((e) => ({ id: e.id, type: e.type, item: e.payload, deletedAt: e.deletedAt })));
  } catch (err) { next(err); }
});

router.post('/', requireAuth, async (req, res, next) => {
  try {
    const { type, item } = req.body || {};
    if (!RESOURCES[type]) return res.status(400).json({ error: `Unknown trash type "${type}".` });
    if (!canEdit(req.user, type)) return res.status(403).json({ error: 'Not permitted.' });
    const entry = await prisma.trash.create({ data: { id: `trash_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`, type, payload: item } });
    res.status(201).json({ id: entry.id, type: entry.type, item: entry.payload, deletedAt: entry.deletedAt });
  } catch (err) { next(err); }
});

router.post('/:id/restore', requireAuth, async (req, res, next) => {
  try {
    const entry = await prisma.trash.findUnique({ where: { id: req.params.id } });
    if (!entry) return res.status(404).json({ error: 'Not found.' });
    const config = RESOURCES[entry.type];
    if (!config) return res.status(400).json({ error: `Unknown trash type "${entry.type}".` });
    if (!canEdit(req.user, entry.type)) return res.status(403).json({ error: 'Not permitted.' });

    const payload = entry.payload || {};
    const key = payload[config.idField];
    const { known, data } = splitByKnownFields(payload, config.knownFields, config.idField);
    await prisma[config.model].create({ data: { [config.idField]: key, ...known, data } });
    await prisma.trash.delete({ where: { id: entry.id } });
    res.json({ ok: true });
  } catch (err) { next(err); }
});

router.delete('/:id', requireAuth, async (req, res, next) => {
  try {
    const entry = await prisma.trash.findUnique({ where: { id: req.params.id } });
    if (entry && !canEdit(req.user, entry.type)) return res.status(403).json({ error: 'Not permitted.' });
    await prisma.trash.delete({ where: { id: req.params.id } }).catch(() => {});
    res.json({ ok: true });
  } catch (err) { next(err); }
});

router.delete('/', requireAuth, async (req, res, next) => {
  try {
    const entries = await prisma.trash.findMany();
    const disallowed = entries.some((e) => !canEdit(req.user, e.type));
    if (disallowed) return res.status(403).json({ error: 'Not permitted to empty all of trash.' });
    await prisma.trash.deleteMany();
    res.json({ ok: true });
  } catch (err) { next(err); }
});

export default router;
