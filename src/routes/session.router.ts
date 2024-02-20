import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middlewares";
import { sessionSchema } from "../schemas/session.schemas";
import { sessionLoginController } from "../controllers/session.controllers";

export const sessionRouter: Router = Router();

sessionRouter.post("/", validateBody(sessionSchema), sessionLoginController);
