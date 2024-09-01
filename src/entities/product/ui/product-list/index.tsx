import { Pagination } from "../../../pagination/ui";
import { useGetProductListQuery } from "../../api";
import { ProductListItem } from "../product-list-item";

export function ProductList() {
  const { data, isLoading } = useGetProductListQuery({
    limit: 20,
    skip: 0,
  });

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Products not found</div>;

  const { products, total } = data;
  return (
    <div className="grid grid-cols-4 gap-x-[30px] gap-y-[45px] auto-rows-auto">
      {products.map((product) => (
        <ProductListItem key={product.id} {...product} />
      ))}
      <Pagination total={total} skip={0} />
      <p>Total: {total}</p>
    </div>
  );
}
