import { Request, Response } from "express";
import { ISessionReturn } from "../interfaces/session.interface";
import { sessionLoginService } from "../service/session.service";

export const sessionLoginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const token: ISessionReturn = await sessionLoginService(req.body);
  return res.status(200).json(token);
};
