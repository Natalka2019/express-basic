import { Request, Response, NextFunction } from "express";
import { bookList } from "../mockBooks";
import { ResponseStatusCode } from "../utilities/ResponseStatusCode";
import { ResponseErrorMessage } from "../utilities/ResponseErrorMessage";

export const checkIfBookExists = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const selectedBook = bookList.find(
    (book) =>
      book.id === +req.params.id ||
      book.id === +req.params.bookId ||
      book.id === req.body.bookId
  );

  if (!selectedBook) {
    res
      .status(ResponseStatusCode.NotFound)
      .json({ message: ResponseErrorMessage.NoBookWithId });
  } else {
    req.book = selectedBook;
    next();
  }
};
