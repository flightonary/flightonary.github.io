import { defineCollection} from 'astro:content';
import { z } from 'astro/zod'
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog/' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
  }),
});

const book = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/book/' }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { blog, book };