import { NextFunction, Request, Response } from "express";
import AppError from "../errors";
import { client } from "../database";

export const verifyCourseAndUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.userId;
  const courseId = req.params.courseId;

  const queryUser: string = `SELECT * FROM "users" WHERE "id" = $1;`;
  const queryResultUser = await client.query(queryUser, [userId]);

  if (queryResultUser.rowCount === 0) {
    throw new AppError("User/course not found", 404);
  }

  const queryCourse: string = `SELECT * FROM "courses" WHERE "id" = $1;`;
  const queryResultCourse = await client.query(queryCourse, [courseId]);

  if (queryResultCourse.rowCount === 0) {
    throw new AppError("User/course not found", 404);
  }

  return next();
};
