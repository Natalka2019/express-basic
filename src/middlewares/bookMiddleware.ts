import { Request, Response, NextFunction } from "express";
import { bookList } from "../mockBooks";
import { ResponseStatusCode } from "../utilities/ResponseStatusCode";
import { ResponseErrorMessage } from "../utilities/ResponseErrorMessage";

export const checkIfBookExists = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    req.book = bookList.find((book) => book.id === +req.params.id);
    next();
  } catch {
    res
      .status(ResponseStatusCode.NotFound)
      .json({ message: ResponseErrorMessage.NoBookWithId });
  }
};
