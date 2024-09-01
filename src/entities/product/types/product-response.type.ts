import { IProduct } from "./product.interface";

export type IProductResponse = {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
};
