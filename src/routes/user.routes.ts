import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middlewares";
import { userCreateSchema } from "../schemas/user.schema";
import {
  createUsersController,
  readUsersController,
  userReadCoursesController,
} from "../controllers/users.controllers";
import { verifyEmail } from "../middlewares/verifyEmail.middlewares";
import { verifyToken } from "../middlewares/verifyToken.middlewares";
import { verifyAdmin } from "../middlewares/verifyAdmin.middleware";

export const userRouter: Router = Router();

userRouter.post(
  "",
  validateBody(userCreateSchema),
  verifyEmail,
  createUsersController
);

userRouter.get("/", verifyToken, verifyAdmin, readUsersController);

userRouter.get(
  "/:userId/courses",
  verifyToken,
  verifyAdmin,
  userReadCoursesController
);
