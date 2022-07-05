import { Request, Response, NextFunction } from "express";
import { ResponseStatusCode } from "../utilities/ResponseStatusCode";
import { ResponseErrorMessage } from "../utilities/ResponseErrorMessage";

export const checkIfReviewExists = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const reviewId = +req.params.reviewId;
  try {
    req.index = req.book.reviews.findIndex((review) => review.id === reviewId);

    next();
  } catch {
    res
      .status(ResponseStatusCode.NotFound)
      .json({ message: ResponseErrorMessage.NoBReviewWithId });
  }
};
