import { QueryResult } from "pg";
import { z } from "zod";
import {
  userCreateSchema,
  userReadReturnSchema,
  userReadSchema,
  userReturnSchema,
  userSchema,
  userUpdateSchema,
} from "../schemas/user.schema";

export type IUsers = z.infer<typeof userSchema>;

export type IUsersCreate = z.infer<typeof userCreateSchema>;

export type IUsersResult = QueryResult<IUsers>;

export type IUsersUpdate = z.infer<typeof userUpdateSchema>;

export type IUsersReturn = z.infer<typeof userReturnSchema>;

export type IUsersRead = z.infer<typeof userReadSchema>;

export type IUsersReturnRead = z.infer<typeof userReadReturnSchema>;
