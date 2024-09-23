import { Footer, Header, ProductPage } from "../../features";

interface MainPageProps {}

export function MainPage(props: MainPageProps) {
	return (
		<>
			<Header />
			<ProductPage />
			<Footer />
		</>
	);
}
