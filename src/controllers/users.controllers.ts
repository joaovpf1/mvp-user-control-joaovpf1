import { Request, Response } from "express";
import { IUsersReturn } from "../interfaces/users.interface";
import {
  createUserService,
  userReadCoursesService,
  userReadService,
} from "../service/users.service";

export const createUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: IUsersReturn = await createUserService(req.body);
  return res.status(201).json(user);
};

export const readUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await userReadService();
  return res.status(200).json(users);
};

export const userReadCoursesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await userReadCoursesService(req.params.userId);
  return res.status(200).json(user);
};
