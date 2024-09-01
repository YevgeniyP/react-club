import { PropsWithChildren } from "react";
import { styleConcat } from "../../utils";

interface PagaContainerProp extends PropsWithChildren {
  extraStyles?: string;
}

export function PageContainer({
  extraStyles = "",
  children,
}: PagaContainerProp) {
  return (
    <div className={styleConcat("container", "mx-auto", extraStyles)}>
      {children}
    </div>
  );
}
