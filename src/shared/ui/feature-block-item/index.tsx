import { ReactNode } from "react";

interface FeatureBlockItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureBlockItem({
  icon,
  title,
  description,
}: FeatureBlockItemProps) {
  return (
    <div className="grid">
      {icon}
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
}
