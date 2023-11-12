import { renderHook } from "@testing-library/react";
import useUsersApi from "./useUsersApi";
import MockData from "../mocks/mockData";

describe("Given a useUsersApi hook", () => {
  describe("When it gets the information of Users", () => {
    test("Then it should show the information of Users", async () => {
      const expectedUsers = MockData;

      const {
        result: {
          current: { getUsers },
        },
      } = renderHook(() => useUsersApi());

      const currentUsers = await getUsers();

      expect(currentUsers).toStrictEqual(expectedUsers);
    });
  });
});
