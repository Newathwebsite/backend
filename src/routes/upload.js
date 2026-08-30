import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { imageSize } from 'image-size';
import { requireAuth } from '../lib/auth.js';
import { uid } from '../lib/ids.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const UPLOAD_DIR = path.join(__dirname, '..', '..', 'uploads');
fs.mkdirSync(UPLOAD_DIR, { recursive: true });

// Replaces the old base64-data-URL-in-localStorage approach — a real file
// on disk, served statically from /uploads, with just the URL stored in
// whatever record references it (project.coverImage, page.heroBackground,
// etc.). Frontend contract stays the same shape: { url, width, height }.
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => cb(null, `${uid('img')}${path.extname(file.originalname).toLowerCase()}`),
});

const upload = multer({
  storage,
  limits: { fileSize: 8 * 1024 * 1024 }, // 8MB
  fileFilter: (req, file, cb) => {
    if (!/^image\//.test(file.mimetype)) return cb(new Error('Only image uploads are allowed.'));
    cb(null, true);
  },
});

const router = express.Router();

router.post('/', requireAuth, upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded.' });
  let width = null, height = null;
  try {
    const buf = fs.readFileSync(path.join(UPLOAD_DIR, req.file.filename));
    const dims = imageSize(buf);
    width = dims.width;
    height = dims.height;
  } catch {
    // Dimensions are a nice-to-have (used for aspect-ratio hints) — an
    // unreadable format shouldn't fail the whole upload.
  }
  res.status(201).json({ url: `/uploads/${req.file.filename}`, width, height });
});

// Multer errors (file too large, wrong type) land here instead of the
// generic error handler, so the client gets a clear message.
router.use((err, req, res, next) => {
  if (err) return res.status(400).json({ error: err.message || 'Upload failed.' });
  next();
});

export default router;
