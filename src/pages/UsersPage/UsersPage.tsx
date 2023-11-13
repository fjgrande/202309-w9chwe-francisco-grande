import { useEffect } from "react";
import useUsersApi from "../../hooks/useUsersApi";
import { useAppSelector } from "../../store/hooks";
import UsersPageStyled from "./UsersPageStyled";
import { loadUsersActionCreator } from "../../store/feature/users/usersSlice";
import UsersList from "../../components/UsersList/UserList";
import { useDispatch } from "react-redux";

const UsersPage = (): React.ReactElement => {
  const users = useAppSelector((state) => state.usersState.users);
  const { getUsers } = useUsersApi();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(loadUsersActionCreator(await getUsers()));
    })();
  }, [dispatch, getUsers]);

  return (
    <UsersPageStyled>
      <h2 className="page-title">Users</h2>
      <main>
        <UsersList users={users} />
      </main>
    </UsersPageStyled>
  );
};

export default UsersPage;
