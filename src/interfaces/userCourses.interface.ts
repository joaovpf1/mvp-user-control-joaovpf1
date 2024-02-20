import { z } from "zod";
import {
  userCoursesSchema,
  userCoursesSchemaCreate,
  userCoursesSchemaRead,
} from "../schemas/userCourses.schema";
import { QueryResult } from "pg";

export type IUsersCourses = z.infer<typeof userCoursesSchema>;
export type IUsersCoursesCreate = z.infer<typeof userCoursesSchemaCreate>;
export type IUsersCoursesRead = z.infer<typeof userCoursesSchemaRead>;
export type IUsersCoursesResult = QueryResult<IUsersCourses>;