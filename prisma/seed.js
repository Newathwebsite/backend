// Populates the new database with the CMS's initial content (projects, page
// sections, hero backgrounds, the sample blog post) plus the first admin
// login. `seedData.js` lives in this repo (copied from ath-react-site, which
// originated it) so this script is self-contained — it must run standalone
// in production (e.g. `railway ssh npm run db:seed`), where the sibling
// ath-react-site repo this was cloned from isn't present on disk.
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import {
  seedProjects, seedPages, seedTestimonials, seedNewsEvents, seedJobOpenings,
  seedBlogPosts, seedMedia, seedLandingPages, seedUsers, seedForms, seedSettings,
} from './seedData.js';

const prisma = new PrismaClient();

function split(item, knownFields, idField) {
  const known = {};
  const data = { ...item };
  delete data[idField];
  for (const f of knownFields) {
    if (f in data) {
      known[f] = data[f];
      delete data[f];
    }
  }
  return { known, data };
}

async function seedCollection(model, items, idField, knownFields, reorderable) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const key = item[idField];
    const { known, data } = split(item, knownFields, idField);
    if (reorderable) known.order = i;
    await prisma[model].upsert({
      where: { [idField]: key },
      create: { [idField]: key, ...known, data },
      update: { ...known, data },
    });
  }
  console.log(`  ${model}: ${items.length} row(s)`);
}

async function main() {
  console.log('Seeding database...');

  await seedCollection('project', seedProjects, 'id', ['slug', 'category', 'published'], true);
  await seedCollection('page', seedPages, 'slug', [], false);
  await seedCollection('testimonial', seedTestimonials, 'id', [], true);
  await seedCollection('newsEvent', seedNewsEvents, 'id', [], true);
  await seedCollection('jobOpening', seedJobOpenings, 'id', [], false);
  await seedCollection('blogPost', seedBlogPosts, 'id', ['slug', 'published'], true);
  await seedCollection('media', seedMedia, 'id', [], false);
  await seedCollection('landingPage', seedLandingPages, 'id', ['slug', 'published'], false);
  await seedCollection('form', seedForms, 'id', [], false);

  for (const u of seedUsers) {
    const passwordHash = await bcrypt.hash(u.password, 10);
    await prisma.user.upsert({
      where: { id: u.id },
      create: { id: u.id, username: u.username, passwordHash, role: u.role, permissions: u.permissions },
      update: { username: u.username, passwordHash, role: u.role, permissions: u.permissions },
    });
  }
  console.log(`  user: ${seedUsers.length} row(s) (passwords hashed)`);

  await prisma.settings.upsert({
    where: { id: 1 },
    create: { id: 1, data: seedSettings },
    update: { data: seedSettings },
  });
  console.log('  settings: 1 row');

  console.log('Done.');
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
