import { Request, Response, NextFunction } from "express";
import { ResponseStatusCode } from "../utilities/ResponseStatusCode";
import { ResponseErrorMessage } from "../utilities/ResponseErrorMessage";

export const checkIfReviewExists = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const reviewId = +req.params.reviewId;

  const selectedReviewIndex = req.book.reviews.findIndex(
    (review) => review.id === reviewId
  );

  if (selectedReviewIndex === -1) {
    res
      .status(ResponseStatusCode.NotFound)
      .json({ message: ResponseErrorMessage.NoReviewWithId });
  } else {
    req.index = selectedReviewIndex;

    console.log(req.index);

    next();
  }
};
