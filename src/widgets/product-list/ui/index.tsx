import { FC, useEffect, useState } from "react";

import { getProductList } from "@/entities/product/api";
import { IProduct } from "@/entities/product/model";

const ProductList: FC = () => {
  const [productList, setProductList] = useState<IProduct[]>([]);

  useEffect(() => {
    getProductList().then((res) => setProductList(res.products));
  }, []);

  return (
    <div>
      <h2>Бургери</h2>
      {productList.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};

export { ProductList };
