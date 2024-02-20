import { Request, Response } from "express";
import { ICourses, ICoursesRead } from "../interfaces/courses.interface";
import {
  createCoursesService,
  deleteCourseUserService,
  readCoursesService,
  readUserByCourseService,
} from "../service/courses.service";

export const createCoursesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: ICourses = await createCoursesService(req.body);
  return res.status(201).json(user);
};

export const readCoursesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: ICoursesRead = await readCoursesService();
  return res.status(200).json(user);
};

export const deleteCourseUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const courseId: string = req.params.courseId;
  const userId: string = req.params.userId;
  await deleteCourseUserService(courseId, userId);
  return res.status(204).json();
};

export const readUserByCourseController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await readUserByCourseService(req.params.courseId);
  return res.status(200).json(users);
};
