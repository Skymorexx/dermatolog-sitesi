import { defineCollection, z } from 'astro:content';

// Blog koleksiyonu şeması
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    heroImage: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

// Koleksiyonları export et
export const collections = { blog };