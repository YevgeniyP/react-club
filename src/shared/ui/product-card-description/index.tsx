import { ReactNode } from "react";

interface ProductCardDescriptionProps {
  title: string;
  brand?: string;
  price?: number;
  externalComponent?: ReactNode;
}

export function ProductCardDescription({
  title,
  brand,
  price,
  externalComponent,
}: ProductCardDescriptionProps) {
  return (
    <div>
      {brand && <p className="font-mulish text-sm text-text-gray">{brand}</p>}
      <p className="font-rubik text-xl text-text-black">{title}</p>
      {(price || externalComponent) && (
        <div className="flex justify-between items-center">
          {price && (
            <p className="font-mulish text-lg font-bold text-main-green">
              $ {price}
            </p>
          )}
          {externalComponent && <>{externalComponent}</>}
        </div>
      )}
    </div>
  );
}
