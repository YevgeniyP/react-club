import { Button } from "../../../../shared/ui";
import type { IProduct } from "../../types";

interface ProductItemProps {
	product: IProduct;
}

export function ProductItem({ product }: ProductItemProps) {
	const { id, thumbnail, brand, title, price } = product;
	return (
		<div className="grid justify-center gap-x-10 gap-y-5">
			<img src={thumbnail} alt={title} className="object-cover" />
			<div>
				<h4 className="text-lg text-gray-600">{brand}</h4>
				<h3 className="text-2xl text-gray-800">{title}</h3>
			</div>
			<div className="grid grid-flow-col items-center">
				<p className="text-lg text-green-600 font-bold">$ {price}</p>
				<Button title="Add to cart" handler={() => console.log(id)} />
			</div>
		</div>
	);
}
