import { screen } from "@testing-library/react";
import customRender from "../../utils/testUtils";
import UsersCard from "./UsersCard";
import { userMock } from "../../mocks/userMock";

describe("Given a UserCard component", () => {
  describe("When it receives a Jonathan Rockwailer data", () => {
    test("Then it should the text 'Jonathan Rockwailer' in a heading", () => {
      const jonathanData = userMock;

      customRender(<UsersCard users={userMock} />);

      const usersName = screen.getByRole("heading", {
        name: jonathanData.name,
      });

      expect(usersName).toBeInTheDocument();
    });
  });
});
