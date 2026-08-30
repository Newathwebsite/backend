// Single source of truth for how each content collection maps onto its
// Prisma model — shared by the generic resource router (server.js) and the
// trash restore route, so restoring a trashed record splits its fields
// into columns vs. `data` exactly the same way creating one fresh does.
export const RESOURCES = {
  projects: { model: 'project', idField: 'id', knownFields: ['slug', 'category', 'published', 'order'], reorderable: true, publicWhere: { published: true } },
  pages: { model: 'page', idField: 'slug', knownFields: [], reorderable: false, publicWhere: {} },
  testimonials: { model: 'testimonial', idField: 'id', knownFields: ['order'], reorderable: true, publicWhere: {} },
  newsEvents: { model: 'newsEvent', idField: 'id', knownFields: ['order'], reorderable: true, publicWhere: {} },
  careers: { model: 'jobOpening', idField: 'id', knownFields: [], reorderable: false, publicWhere: {} },
  blog: { model: 'blogPost', idField: 'id', knownFields: ['slug', 'published', 'order'], reorderable: true, publicWhere: { published: true } },
  media: { model: 'media', idField: 'id', knownFields: [], reorderable: false, publicWhere: {} },
  landingPages: { model: 'landingPage', idField: 'id', knownFields: ['slug', 'published'], reorderable: false, publicWhere: { published: true } },
  forms: { model: 'form', idField: 'id', knownFields: [], reorderable: false, publicWhere: {} },
};
