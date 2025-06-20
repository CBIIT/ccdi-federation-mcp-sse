import { z } from 'zod';

export const sampleMetadataSchema = z.object({
  per_page: z.number().min(1).max(100),
  disease_type: z.string().optional(),
  sample_id: z.string().optional()
});

export const fileMetadataSchema = z.object({
  per_page: z.number().min(1).max(100)
});

export const apiInfoSchema = z.object({});
