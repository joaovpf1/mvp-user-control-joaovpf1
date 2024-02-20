import { QueryResult } from "pg";
import { z } from "zod";
import {
  coursesCreateSchema,
  coursesSchema,
  coursesUpdateSchema,
} from "../schemas/courses.schema";

export type ICourses = z.infer<typeof coursesSchema>;

export type ICoursesCreate = z.infer<typeof coursesCreateSchema>;

export type ICoursesResult = QueryResult<ICourses>;

export type ICoursesUpdate = z.infer<typeof coursesUpdateSchema>;

export type ICoursesRead = ICourses[];
