import { screen } from "@testing-library/react";
import MockData from "../../mocks/mockData";
import customRender from "../../utils/testUtils";
import UsersList from "./UserList";

describe("Given a UserList component", () => {
  describe("When it receives a list of users", () => {
    test("Then it should show a list of users with their information", () => {
      const expectedUsersListHeading = MockData[0].name;

      customRender(<UsersList users={MockData} />);

      const usersHeadingElement = screen.getByRole("heading", {
        name: expectedUsersListHeading,
      });

      expect(usersHeadingElement).toBeInTheDocument();
    });
  });
});
