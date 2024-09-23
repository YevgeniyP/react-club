import { ProductComponent } from "../../entities";

export function ProductPageName() {
	return (
		<div className="mt-[20px] py-[15px] px-[10px]">
			<h2 className="text-3xl font-medium text-gray-900">Products</h2>
			<ProductComponent />
		</div>
	);
}
