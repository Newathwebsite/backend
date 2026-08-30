import express from 'express';
import bcrypt from 'bcryptjs';
import { prisma } from '../db.js';
import { uid } from '../lib/ids.js';
import { requirePermission } from '../lib/auth.js';

// Users need their own router instead of the generic resourceRouter:
// passwords must be hashed on the way in and must never be returned on the
// way out (the generic router's flatten-everything-into-`data` approach
// would otherwise round-trip the hash straight back to the client).
const router = express.Router();
const readGuard = requirePermission('users', 'view');
const writeGuard = requirePermission('users', 'edit');

function toPublicUser(user) {
  const { passwordHash, ...rest } = user;
  return rest;
}

router.get('/', readGuard, async (req, res, next) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users.map(toPublicUser));
  } catch (err) { next(err); }
});

router.post('/', writeGuard, async (req, res, next) => {
  try {
    const { password, id, username, role, permissions } = req.body || {};
    if (!username || !password) return res.status(400).json({ error: 'Missing username or password.' });
    const passwordHash = await bcrypt.hash(password, 10);
    const created = await prisma.user.create({
      data: { id: id || uid('user'), username, passwordHash, role: role || 'editor', permissions: permissions || {} },
    });
    res.status(201).json(toPublicUser(created));
  } catch (err) { next(err); }
});

router.patch('/:id', writeGuard, async (req, res, next) => {
  try {
    const { password, ...rest } = req.body || {};
    const data = { ...rest };
    if (password) data.passwordHash = await bcrypt.hash(password, 10);
    const updated = await prisma.user.update({ where: { id: req.params.id }, data });
    res.json(toPublicUser(updated));
  } catch (err) {
    if (err.code === 'P2025') return res.status(404).json({ error: 'Not found.' });
    next(err);
  }
});

router.delete('/:id', writeGuard, async (req, res, next) => {
  try {
    await prisma.user.delete({ where: { id: req.params.id } });
    res.json({ ok: true });
  } catch (err) {
    if (err.code === 'P2025') return res.json({ ok: true });
    next(err);
  }
});

export default router;
