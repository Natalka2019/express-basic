import { Request, Response, NextFunction } from "express";
import { bookList } from "../mockBooks";
import { ResponseStatusCode } from "../utilities/ResponseStatusCode";
import { ResponseErrorMessage } from "../utilities/ResponseErrorMessage";

export const createBook = (req: Request, res: Response, next: NextFunction) => {
  try {
    const newBook = { ...req.body, id: bookList.length + 1 };
    bookList.push(newBook);

    res.status(ResponseStatusCode.Created).json(newBook);
  } catch {
    next({
      status: ResponseStatusCode.ServerError,
      message: ResponseErrorMessage.NoBookCreated,
    });
  }
};

export const getAllBooks = (req: Request, res: Response) => {
  res.status(ResponseStatusCode.Ok).json(bookList);
};

export const getBookById = (req: Request, res: Response) => {
  res.json(req.book);
};

export const updateBookTitle = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedBook = { ...req.book, title: req.body.title };

    res.send(updatedBook);
  } catch {
    next({
      status: ResponseStatusCode.ServerError,
      message: ResponseErrorMessage.NoBookUpdated,
    });
  }
};
