import { BASE_URL } from "./global";

const list = "products/category/smartphones";

const url = {
  productList: () => `${BASE_URL}/${list}`,
};

export { url };
