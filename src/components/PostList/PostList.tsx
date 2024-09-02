import { useEffect, useState } from "react";
import { IPostResponse } from "../../types/post-response.interface";
import { PostListItem } from "./PostListItem";

export function PostList() {
  const [posts, setPosts] = useState<IPostResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // console.log(posts);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then<IPostResponse>((res) => res.json())
      .then((res) => setPosts(res));
    setIsLoading(false);
  }, []);

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
