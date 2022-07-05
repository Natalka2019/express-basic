import { Router } from "express";
import * as bookController from "../controllers/booksController";
import { checkIfBookExists } from "../middlewares/bookMiddleware";

const router = Router();

router.post("/", bookController.createBook);

router.get("/", bookController.getAllBooks);

router.get("/:id", checkIfBookExists, bookController.getBookById);

router.patch("/:id", checkIfBookExists, bookController.updateBookTitle);

export default router;
