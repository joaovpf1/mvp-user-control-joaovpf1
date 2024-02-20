import { Router } from "express";
import { coursesCreateSchema } from "../schemas/courses.schema";
import {
  createCoursesController,
  deleteCourseUserController,
  readCoursesController,
  readUserByCourseController,
} from "../controllers/courses.controllers";
import { validateBody } from "../middlewares/validateBody.middlewares";
import { verifyToken } from "../middlewares/verifyToken.middlewares";
import { verifyAdmin } from "../middlewares/verifyAdmin.middleware";
import { userCoursesCreateCourseController } from "../controllers/userCourses.controller";
import { verifyCourseAndUser } from "../middlewares/verifyCourseUser.middleware";

export const coursesRouter: Router = Router();

coursesRouter.post(
  "/",
  validateBody(coursesCreateSchema),
  verifyToken,
  verifyAdmin,
  createCoursesController
);

coursesRouter.get("/", readCoursesController);

coursesRouter.post(
  "/:courseId/users/:userId",
  verifyToken,
  verifyAdmin,
  verifyCourseAndUser,
  userCoursesCreateCourseController
);

coursesRouter.delete(
  "/:courseId/users/:userId",
  verifyToken,
  verifyAdmin,
  verifyCourseAndUser,
  deleteCourseUserController
);

coursesRouter.get(
  "/:courseId/users",
  verifyToken,
  verifyAdmin,
  readUserByCourseController
);
