import { Router } from "express";
import * as reviewsController from "../controllers/reviewsController";
import { checkIfBookExists } from "../middlewares/bookMiddleware";
import { checkIfReviewExists } from "../middlewares/reviewMiddleware";

const router = Router();

router.post("/", checkIfBookExists, reviewsController.addNewReview);

router.get("/", reviewsController.getAllReviews);

router.delete(
  "/:bookId/:reviewId",
  checkIfBookExists,
  checkIfReviewExists,
  reviewsController.deleteReview
);

export default router;
