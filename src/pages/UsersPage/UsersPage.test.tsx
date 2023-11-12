import { screen } from "@testing-library/react";
import customRender from "../../utils/testUtils";
import UsersPage from "./UsersPage";

describe("Given a UsersPage page", () => {
  describe("When it renders", () => {
    test("Then it should show a heading with the text 'Users'", () => {
      const usersHeadingText = "Users";

      customRender(<UsersPage />);

      const usersHeading = screen.getByRole("heading", {
        name: usersHeadingText,
      });

      expect(usersHeading).toBeInTheDocument();
    });
  });
});
