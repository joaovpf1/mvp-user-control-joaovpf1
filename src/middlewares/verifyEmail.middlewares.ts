import { NextFunction, Request, Response } from "express";
import { client } from "../database";
import AppError from "../errors";
import { IUsersResult } from "../interfaces/users.interface";

export const verifyEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email } = req.body;

  if (!email) return next();

  const query: string = `SELECT * FROM "users" WHERE "email" = $1;`;
  const queryResult: IUsersResult = await client.query(query, [email]);

  if (queryResult.rowCount) {
    throw new AppError("Email already registered", 409);
  }
  return next();
};
