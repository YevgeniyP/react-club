import { PageContainer } from "../../shared/ui";

interface FooterProps {}

export function Footer(props: FooterProps) {
	return (
		<footer className="bg-blue-400 text-white text-xl py-[10px] px-[5px] grid">
			<PageContainer>Footer</PageContainer>
		</footer>
	);
}
