import { Request, Response, NextFunction } from "express";
import { bookList } from "../mockBooks";
import { IBook } from "../interfaces/IBook";
import { IReview } from "../interfaces/IReview";
import { ResponseStatusCode } from "../utilities/ResponseStatusCode";
import { ResponseErrorMessage } from "../utilities/ResponseErrorMessage";

export const addNewReview = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body.review.comment) {
    res
      .status(ResponseStatusCode.BadRequest)
      .json(ResponseErrorMessage.NoReviewComment);
  }

  try {
    const newReview = {
      ...req.body.review,
      id: req.book.reviews.length + 1,
    };

    req.book.reviews = [...req.book.reviews, newReview];

    res.status(ResponseStatusCode.Created).send(newReview);
  } catch {
    next({
      status: ResponseStatusCode.ServerError,
      message: ResponseErrorMessage.NoReviewAdded,
    });
  }
};

export const getAllReviews = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reviewsList: IReview[] = [];

    bookList.forEach((book: IBook) => {
      reviewsList.push(...book.reviews);
    });
    res.status(ResponseStatusCode.Ok).send(reviewsList);
  } catch {
    next({
      status: ResponseStatusCode.ServerError,
      message: ResponseErrorMessage.NoReviewsSent,
    });
  }
};

export const deleteReview = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    req.book.reviews.splice(req.index, 1);
    res.status(ResponseStatusCode.NoContent);
  } catch {
    next({
      status: ResponseStatusCode.ServerError,
      message: ResponseErrorMessage.NoReviewDeleted,
    });
  }
};
