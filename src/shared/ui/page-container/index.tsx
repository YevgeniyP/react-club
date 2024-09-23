import { PropsWithChildren } from "react";

interface PageContainerProps extends PropsWithChildren {}

export function PageContainer({ children }: PageContainerProps) {
	return <div className="container mx-auto">{children}</div>;
}
