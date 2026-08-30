import express from 'express';
import { prisma } from '../db.js';
import { uid } from './ids.js';
import { requirePermission } from './auth.js';

// One factory covers every content collection (projects, testimonials,
// pages, ...): they all need the same list/create/update/delete shape, and
// some need reordering. Each model stores a few real columns (whatever the
// API needs to filter/sort by) plus a `data` JSON blob for everything else
// — see prisma/schema.prisma's header comment. This flattens/splits that
// on the way out/in so the frontend never has to know the split exists.
//
// options:
//   model        - the Prisma model name, e.g. 'project'
//   resource     - permission-check key, e.g. 'projects' (matches PERMISSION_RESOURCES)
//   idField      - primary key field name, default 'id' (Page uses 'slug')
//   knownFields  - real columns besides the id field (e.g. ['category','published','order'])
//   publicWhere  - Prisma `where` clause applied for unauthenticated requests
//   reorderable  - adds POST /reorder
//   idPrefix     - prefix for generated ids on create (defaults to `resource`)
export function createResourceRouter({ model, resource, idField = 'id', knownFields = [], publicWhere, reorderable = false, idPrefix }) {
  const router = express.Router();
  const db = prisma[model];
  const writeGuard = requirePermission(resource, 'edit');

  function toRecord(row) {
    if (!row) return row;
    const { data, createdAt, updatedAt, ...rest } = row;
    return { ...(data || {}), ...rest };
  }

  function splitBody(body) {
    const known = {};
    const data = { ...body };
    for (const f of knownFields) {
      if (f in data) {
        known[f] = data[f];
        delete data[f];
      }
    }
    delete data.id;
    delete data.createdAt;
    delete data.updatedAt;
    return { known, data };
  }

  router.get('/', async (req, res, next) => {
    try {
      const where = req.user ? {} : (publicWhere || {});
      const items = await db.findMany({ where, orderBy: reorderable ? { order: 'asc' } : undefined });
      res.json(items.map(toRecord));
    } catch (err) { next(err); }
  });

  router.get('/:key', async (req, res, next) => {
    try {
      const item = await db.findUnique({ where: { [idField]: req.params.key } });
      if (!item) return res.status(404).json({ error: 'Not found.' });
      res.json(toRecord(item));
    } catch (err) { next(err); }
  });

  router.post('/', writeGuard, async (req, res, next) => {
    try {
      const body = { ...req.body };
      const key = body[idField] || uid(idPrefix || resource);
      const { known, data } = splitBody(body);
      const created = await db.create({ data: { [idField]: key, ...known, data } });
      res.status(201).json(toRecord(created));
    } catch (err) { next(err); }
  });

  router.patch('/:key', writeGuard, async (req, res, next) => {
    try {
      const existing = await db.findUnique({ where: { [idField]: req.params.key } });
      if (!existing) return res.status(404).json({ error: 'Not found.' });
      const merged = { ...toRecord(existing), ...req.body };
      const { known, data } = splitBody(merged);
      const updated = await db.update({ where: { [idField]: req.params.key }, data: { ...known, data } });
      res.json(toRecord(updated));
    } catch (err) { next(err); }
  });

  router.delete('/:key', writeGuard, async (req, res, next) => {
    try {
      await db.delete({ where: { [idField]: req.params.key } });
      res.json({ ok: true });
    } catch (err) {
      if (err.code === 'P2025') return res.json({ ok: true }); // already gone
      next(err);
    }
  });

  if (reorderable) {
    router.post('/reorder', writeGuard, async (req, res, next) => {
      try {
        const order = req.body?.order;
        if (!Array.isArray(order)) return res.status(400).json({ error: 'Missing "order" array.' });
        await prisma.$transaction(order.map((key, i) => db.update({ where: { [idField]: key }, data: { order: i } })));
        res.json({ ok: true });
      } catch (err) { next(err); }
    });
  }

  return router;
}
