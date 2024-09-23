import { ProductContainer } from "../../entities";
import { PageContainer } from "../../shared/ui";

interface ProductPageProps {}

export function ProductPage(props: ProductPageProps) {
	return (
		<div>
			<PageContainer>
				<h2>Products</h2>
				<ProductContainer />
			</PageContainer>
		</div>
	);
}
