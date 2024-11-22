import { FC } from "react";

import { IProduct } from "../../model";

type ProductCardProps = Pick<
  IProduct,
  "title" | "category" | "price" | "thumbnail"
>;

const ProductCard: FC<ProductCardProps> = ({
  title,
  category,
  price,
  thumbnail,
}) => {
  return (
    <div>
      <img src={thumbnail} alt={title} />
      <h2>{title}</h2>
      <h3>{price}</h3>
      <p>{category}</p>
    </div>
  );
};

export { ProductCard };
