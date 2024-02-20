import { z } from "zod";
import { sessionSchema } from "../schemas/session.schemas";

export type ISessionCreate = z.infer<typeof sessionSchema>;

export type ISessionReturn = { token: string };
