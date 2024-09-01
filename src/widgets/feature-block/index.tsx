import { FeatureBlockItem } from "../../shared/ui";
import FreeDelivery from "../../assets/free-delivery.svg";

export function FeatureBlock() {
  return (
    <div>
      <FeatureBlockItem
        icon={<FreeDelivery />}
        title="Test"
        description="test"
      />
    </div>
  );
}
