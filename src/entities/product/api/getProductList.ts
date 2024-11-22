import { url } from "@/shared/constants";

import { IProductListResponse } from "../model";

const getProductList = async () => {
  const data = await fetch(url.productList()).then<IProductListResponse>(
    (res) => res.json(),
  );
  const { products, limit, skip, total } = data;
  return { products, limit, skip, total };
};

export { getProductList };
