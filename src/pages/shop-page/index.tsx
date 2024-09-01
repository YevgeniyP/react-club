import { ProductList } from "../../entities";
import { PageContainer } from "../../shared/ui";

export default function ShopPage() {
  return (
    <PageContainer>
      <p>Shop page</p>
      <ProductList />
    </PageContainer>
  );
}
