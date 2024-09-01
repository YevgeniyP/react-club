import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiLink, BASE_URL } from "../../../shared/constants";
import { IProductCategoryResponse } from "../types";

export const productCategoryApi = createApi({
  reducerPath: "productCategoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getProductGategory: builder.query<IProductCategoryResponse, void>({
      query: () => apiLink.getProductsCategory,
    }),
  }),
});

export const { useLazyGetProductGategoryQuery } = productCategoryApi;
