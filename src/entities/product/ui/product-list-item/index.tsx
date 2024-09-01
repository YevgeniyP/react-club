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
      <img src={thumbnail} alt={title} className=" block overflow-clip" />
      <div>
        <p className="font-mulish text-sm text-text-gray">{brand}</p>
        <p className="font-rubik text-xl text-text-black">{title}</p>
        <p className="font-mulish text-lg font-bold text-main-green">
          $ {price}
        </p>
      </div>
    </div>
  );
}
