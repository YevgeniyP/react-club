import type { IProductResponse } from "../model";

export async function getProducts(
	skip: number,
	limit = 10,
): Promise<IProductResponse> {
	const req = await fetch(
		`https://dummyjson.com/products/category/smartphones?limit=${limit}&skip=${skip}`,
	);
	const res = (await req.json()) as IProductResponse;
	return res;
}
