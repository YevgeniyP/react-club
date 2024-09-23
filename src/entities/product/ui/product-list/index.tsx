import type { IProduct } from "../../model";
import { ProductItem } from "../product-item";

interface ProductListProps {
	products: IProduct[];
}

export function ProductList({ products }: ProductListProps) {
	return (
		<div className="grid grid-cols-4 items-center">
			{products.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</div>
	);
}
