import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiLink, BASE_URL } from "../../../shared/constants";
import { IProduct, IProductResponse } from "../types";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProductList: builder.query<
      IProductResponse,
      { limit?: number; skip?: number }
    >({
      query: ({ limit, skip }) => apiLink.getAllProducts(limit, skip),
    }),
    getProductById: builder.query<IProduct, number>({
      query: (id: number) => apiLink.getProductById(id),
    }),
    searchProduct: builder.query<IProductResponse, string>({
      query: (query: string) => apiLink.searchProduct(query),
    }),
  }),
});

export const {
  useGetProductListQuery,
  useGetProductByIdQuery,
  useSearchProductQuery,
} = productApi;
