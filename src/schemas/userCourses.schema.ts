import { z } from "zod";

export const userCoursesSchema = z.object({
  id: z.number().positive(),
  active: z.boolean().default(true),
  userId: z.number().positive(),
  courseId: z.number().positive(),
});

export const userCoursesSchemaCreate = userCoursesSchema.omit({
  id: true,
});
export const userCourseSchemaDelete = userCoursesSchema.partial();
export const userCoursesSchemaRead = userCoursesSchema.array();
