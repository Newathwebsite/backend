import express from 'express';
import bcrypt from 'bcryptjs';
import { prisma } from '../db.js';
import { signToken, requireAuth } from '../lib/auth.js';

const router = express.Router();

function toPublicUser(user) {
  const { passwordHash, ...rest } = user;
  return rest;
}

router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body || {};
    if (!username || !password) return res.status(400).json({ error: 'Missing username or password.' });
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) return res.status(401).json({ error: 'Invalid username or password.' });
    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ error: 'Invalid username or password.' });
    res.json({ token: signToken(user), user: toPublicUser(user) });
  } catch (err) { next(err); }
});

router.get('/me', requireAuth, (req, res) => {
  res.json({ user: toPublicUser(req.user) });
});

router.post('/change-password', requireAuth, async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body || {};
    if (!currentPassword || !newPassword) return res.status(400).json({ error: 'Missing currentPassword or newPassword.' });
    const ok = await bcrypt.compare(currentPassword, req.user.passwordHash);
    if (!ok) return res.status(400).json({ error: 'Current password is incorrect.' });
    const passwordHash = await bcrypt.hash(newPassword, 10);
    const updated = await prisma.user.update({ where: { id: req.user.id }, data: { passwordHash } });
    res.json({ user: toPublicUser(updated) });
  } catch (err) { next(err); }
});

export default router;
