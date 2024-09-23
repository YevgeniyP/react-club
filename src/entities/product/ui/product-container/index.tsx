import { useEffect, useState } from "react";
import type { IProduct } from "../../model";
import { getProducts } from "../../api";
import { ProductList } from "../product-list";

interface ProductContainerProps {}

export function ProductContainer(props: ProductContainerProps) {
	const [products, setProducts] = useState<IProduct[]>([]);
	const limit = 5;
	const skip = 0;

	useEffect(() => {
		getProducts(limit, skip).then(({ products }) => setProducts(products));
	}, [limit, skip]);

	return <ProductList products={products} />;
}
