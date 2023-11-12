import { screen } from "@testing-library/react";
import customRender from "../../utils/testUtils";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a link with the text 'users'", () => {
      const expectedTextUsers = "users";

      customRender(<Navigation />);

      const navigationLinkUsers = screen.getByRole("link", {
        name: expectedTextUsers,
      });

      expect(navigationLinkUsers).toBeInTheDocument();
    });
  });
});
