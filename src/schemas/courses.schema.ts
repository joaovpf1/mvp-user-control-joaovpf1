import { z } from "zod";

export const coursesSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(50).min(3),
  description: z.string(),
});

export const coursesCreateSchema = coursesSchema.omit({ id: true });
export const coursesUpdateSchema = coursesCreateSchema.partial();
export const coursesReadSchema = coursesSchema.array();
