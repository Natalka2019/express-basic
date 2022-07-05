import { Request, Response } from "express";
import { ResponseStatusCode } from "./ResponseStatusCode";

class HttpException extends Error {
  status: number;
  message: string;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export const errorHandler = (
  err: HttpException,
  req: Request,
  res: Response
) => {
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }
  res.sendStatus(ResponseStatusCode.ServerError);
};
