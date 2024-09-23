import { PageContainer } from "../../shared/ui";

interface HeaderProps {}

export function Header(props: HeaderProps) {
	return (
		<header className="bg-blue-400 text-white text-3xl py-[10px] px-[5px] grid">
			<PageContainer>Happy shop</PageContainer>
		</header>
	);
}
