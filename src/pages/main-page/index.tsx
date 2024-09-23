import { Footer, Header, ProductPageName } from "../../features";
import { PageContainer } from "../../shared/ui";

export function MainPage() {
	return (
		<PageContainer>
			<Header />
			<ProductPageName />
			<Footer />
		</PageContainer>
	);
}
