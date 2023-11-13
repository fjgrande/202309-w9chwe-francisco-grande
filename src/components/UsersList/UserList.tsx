import { UsersStructure } from "../../store/feature/users/types";
import UsersCard from "../UsersCard/UsersCard";
import UserListStyled from "./UserListStyled";

interface UserListProps {
  users: UsersStructure[];
}

const UsersList = ({ users }: UserListProps): React.ReactElement => {
  return (
    <UserListStyled>
      {users.map((user) => (
        <li key={user.id}>
          <UsersCard users={user} />
        </li>
      ))}
    </UserListStyled>
  );
};

export default UsersList;
