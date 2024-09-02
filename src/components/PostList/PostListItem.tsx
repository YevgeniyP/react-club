interface PostListItemProps {
  title: string;
}

export function PostListItem({ title }: PostListItemProps) {
  return <div>{title}</div>;
}
