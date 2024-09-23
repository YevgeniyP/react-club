import type { IProduct } from "../../types";

import { useEffect, useState } from "react";

import { getProducts } from "../../api";
import { ProductList } from "../product-list";

export function ProductComponent() {
	const [products, setProducts] = useState<IProduct[]>([]);

	useEffect(() => {
		getProducts().then(({ products }) => {
			setProducts(products);
		});
	}, []);
	return <ProductList products={products} />;
}
