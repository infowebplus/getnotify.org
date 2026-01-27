import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    template: z.string().optional(),
    noindex: z.boolean().optional(),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

const globalsCollection = defineCollection({
  type: 'data',
  schema: z.record(z.unknown()),
});

export const collections = {
  pages: pagesCollection,
  blog: blogCollection,
  globals: globalsCollection,
};
