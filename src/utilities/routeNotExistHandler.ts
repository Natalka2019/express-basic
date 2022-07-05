import { Request, Response } from "express";
import { ResponseStatusCode } from "./ResponseStatusCode";
import { ResponseErrorMessage } from "./ResponseErrorMessage";

export const routeNotExistHandler = (req: Request, res: Response) => {
  res
    .status(ResponseStatusCode.NotFound)
    .json({ message: ResponseErrorMessage.PageNotFound });
};
