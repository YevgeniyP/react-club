import { IUser } from "../../types/user.interface";

// interface UserListItemProps {
//   user: IUser
// }

export function UserListItem({
  user,
  selectUser,
}: {
  user: IUser;
  selectUser: (id: number) => void;
}) {
  const { id, name, email } = user;

  return (
    <p onClick={() => selectUser(id)}>
      {id}. {name} - {email}
    </p>
  );
}
