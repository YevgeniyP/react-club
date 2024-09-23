import type { IProductsResponse } from "../types";

export async function getProducts(
	limit = 10,
	skip = 0,
): Promise<IProductsResponse> {
	const req = await fetch(
		`https://dummyjson.com/products/category/sunglasses?limit=${limit}&skip=${skip}`,
	);
	const res = (await req.json()) as IProductsResponse;
	return res;
}
