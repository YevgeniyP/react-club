import { useState } from "react";
import { Header } from "../Header/Header";
import { PostList } from "../PostList/PostList";

export function App() {
  const [counter, setCounter] = useState(0);
  console.log("click");
  return (
    <div>
      <Header />
      <PostList />
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>click</button>
    </div>
  );
}
