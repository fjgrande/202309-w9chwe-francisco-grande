import MockData from "../../../mocks/mockData";
import {
  loadUsersActionCreator,
  initialUserState,
  usersReducer,
} from "./usersSlice";

describe("Given a usersReducer reducer", () => {
  describe("When the reducer receives the current state and the action loadUsers", () => {
    test("Then it should return a new state with the new contacts", () => {
      const usersApi = MockData.map((user) => ({ ...user }));
      const currentState = initialUserState;

      const loadAction = loadUsersActionCreator(usersApi);

      const newState = usersReducer(currentState, loadAction);

      expect(newState.users).toStrictEqual(usersApi);
    });
  });
});
