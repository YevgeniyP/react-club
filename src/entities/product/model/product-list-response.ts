import { IProduct } from "./product";

export interface IProductListResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}
