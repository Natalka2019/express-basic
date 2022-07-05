import { IReview } from "./IReview";

export interface IBook {
  id: number;
  title: string;
  reviews: IReview[];
}
