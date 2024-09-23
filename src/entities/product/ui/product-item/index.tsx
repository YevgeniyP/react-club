import type { IProduct } from "../../model";

interface ProductItemProps {
	product: IProduct;
}

export function ProductItem({ product }: ProductItemProps) {
	const { id, title, brand, price, thumbnail } = product;
	return (
		<div>
			<img src={thumbnail} alt={title} />
			<h4>{brand}</h4>
			<h3>{title}</h3>
			<p>$ {price}</p>
		</div>
	);
}
