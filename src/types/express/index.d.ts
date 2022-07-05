import { IBook } from "../../interfaces/IBook";

declare global {
  namespace Express {
    export interface Request {
      book: IBook;
      index: number;
    }
  }
}
