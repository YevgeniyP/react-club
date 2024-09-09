import { IUser } from "../../types/user.interface";
import { UserListItem } from "./UserListItem";

// interface UserListProps {
//   users: IUser[];
// }

export function UserList({
  users,
  selectUser,
}: {
  users: IUser[];
  selectUser: (id: number) => void;
}) {
  return (
    <div>
      {users &&
        users.map((user) => (
          <UserListItem key={user.id} user={user} selectUser={selectUser} />
        ))}
    </div>
  );
}
