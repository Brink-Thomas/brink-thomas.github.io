import { defineCollection } from 'astro:content';
import { z } from 'astro/zod'
import { glob } from 'astro/loaders';

const profile = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/profile" }),
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    email: z.string().optional(),
    github: z.string().optional(),
    skills: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    liveUrl: z.string().optional(),
    repoUrl: z.string().optional(),
    tags: z.string().optional(),
  }),
});

export const collections = { profile, projects };