export const BASE_URL = "https://dummyjson.com";

// const

export const apiLink = {
  getAllProducts: (limit: number = 8, skip: number = 0) =>
    `products?limit=${limit}&skip=${skip}`,
  getProductById: (id: number) => `products/${id}`,
  searchProduct: (query: string) =>
    query ? `products/search?q=${query}` : `products/search`,
  getProductsCategory: "products/category",
  getProductsByCaegory: (category: string) => `products/category/${category}`,
};
