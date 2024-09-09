import { useEffect, useState } from "react";
import { IUser } from "../../types/user.interface";
import { PostList } from "../PostList/PostList";
import { UserList } from "./UserList";

export function UserComponent() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedUser, setSelecteduser] = useState<number | null>(null);

  function setUserId(id: number) {
    setSelecteduser(id);
  }

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then<IUser[]>((res) => res.json())
      .then((res) => setUsers(res));
    setIsLoading(false);
  }, []);

  if (isLoading) return <div>Loading</div>;
  return (
    <div className="container mx-auto">
      <UserList users={users} selectUser={setUserId} />
      {selectedUser && <PostList userId={selectedUser} />}
    </div>
  );
}
