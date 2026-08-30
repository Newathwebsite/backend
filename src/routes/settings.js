import express from 'express';
import { prisma } from '../db.js';
import { requirePermission } from '../lib/auth.js';

// Singleton row (id is always 1) — matches the frontend's `settings` being
// one big object, not a list. PATCH shallow-merges at the top level, same
// as the old client-side `updateSettings: (patch) => ({...prev, ...patch})`.
const router = express.Router();
const writeGuard = requirePermission('settings', 'edit');

async function getRow() {
  const row = await prisma.settings.findUnique({ where: { id: 1 } });
  return row || prisma.settings.create({ data: { id: 1, data: {} } });
}

router.get('/', async (req, res, next) => {
  try {
    const row = await getRow();
    res.json(row.data);
  } catch (err) { next(err); }
});

router.patch('/', writeGuard, async (req, res, next) => {
  try {
    const row = await getRow();
    const merged = { ...(row.data || {}), ...(req.body || {}) };
    const updated = await prisma.settings.update({ where: { id: 1 }, data: { data: merged } });
    res.json(updated.data);
  } catch (err) { next(err); }
});

export default router;
