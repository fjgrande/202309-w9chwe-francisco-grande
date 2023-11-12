import { screen } from "@testing-library/react";
import customRender from "../../utils/testUtils";
import App from "./App";

describe("Given an App component", () => {
  describe("When it render a header", () => {
    test("Then it should show a heading with the text 'DoggyFace'", () => {
      const expectedHeaderText = "DoggyFace";

      customRender(<App />);

      const currentHeaderText = screen.getByRole("heading", {
        name: expectedHeaderText,
      });
      expect(currentHeaderText).toBeInTheDocument();
    });
  });
});
