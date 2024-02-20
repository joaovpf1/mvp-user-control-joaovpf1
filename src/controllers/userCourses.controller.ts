import { Request, Response } from "express";
import { userCoursesCreateCourseService } from "../service/userCourses.service";

export const userCoursesCreateCourseController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userCourses = await userCoursesCreateCourseService(
    req.params.userId,
    req.params.courseId
  );
  return res.status(201).json(userCourses);
};
