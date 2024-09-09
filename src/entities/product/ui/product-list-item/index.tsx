import { ImageLoader, ProductCardDescription } from "../../../../shared/ui";
import { IProduct } from "../../types";

type ProductListItemProps = Pick<
  IProduct,
  "title" | "thumbnail" | "brand" | "price" | "rating"
>;

export function ProductListItem({
  title,
  thumbnail,
  brand,
  price,
}: ProductListItemProps) {
  return (
    <div className="grid grid-cols-1 auto-rows-auto gap-y-[16px]">
      <ImageLoader title={title} url={thumbnail} />
      <ProductCardDescription title={title} brand={brand} price={price} />
    </div>
  );
}
