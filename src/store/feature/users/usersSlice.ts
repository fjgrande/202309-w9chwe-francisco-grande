import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UsersStateStructure, UsersStructure } from "./types";

export const initialUserState: UsersStateStructure = {
  users: [],
};

const UsersSlice = createSlice({
  name: "users",
  initialState: initialUserState,
  reducers: {
    loadUsers: (
      currentState,
      action: PayloadAction<UsersStructure[]>,
    ): UsersStateStructure => ({
      ...currentState,
      users: action.payload.map((user) => ({ ...user })),
    }),
  },
});

export const { loadUsers: loadUsersActionCreator } = UsersSlice.actions;
export const usersReducer = UsersSlice.reducer;
