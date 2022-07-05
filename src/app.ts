import * as express from "express";
import bookRoutes from "./routes/booksRoute";
import reviewsRoutes from "./routes/reviewsRoute";

const app = express();

const port = 3000;

app.use(express.json());

app.use("/books", bookRoutes);

app.use("/reviews", reviewsRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
