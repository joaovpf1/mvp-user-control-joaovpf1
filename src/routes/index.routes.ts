import { Router } from "express";
import { userRouter } from "./user.routes";
import { coursesRouter } from "./courses.routes";
import { sessionRouter } from "./session.router";

export const routes: Router = Router();

routes.use("/users", userRouter);
routes.use("/courses", coursesRouter);
routes.use("/login", sessionRouter);
