import "@testing-library/jest-dom";
import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./mocks/node";
import { UsersStructure } from "./store/feature/users/types";
import MockData from "./mocks/mockData";

export let mockUsers: UsersStructure[] = MockData;

beforeAll(() => {
  mockUsers = MockData;
  return server.listen();
});

afterEach(() => {
  mockUsers = MockData;
  return server.resetHandlers();
});

afterAll(() => {
  server.close();
});
