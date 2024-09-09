import { useEffect, useState } from "react";
import { IPostResponse } from "../../types/post-response.interface";
import { PostListItem } from "./PostListItem";

export function PostList({ userId }: { userId: number }) {
  const [posts, setPosts] = useState<IPostResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then<IPostResponse>((res) => res.json())
      .then((res) => setPosts(res));
    setIsLoading(false);
  }, [userId]);

  if (isLoading) return <div>Loading...</div>;
  if (!posts) return <div>Oup!</div>;
  return (
    <div className="container mx-auto py-[20px]">
      {posts.map((post) => (
        <PostListItem key={post.id} {...post} />
      ))}
    </div>
  );
}
