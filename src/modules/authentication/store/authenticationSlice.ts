import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AuthenticationState {
  isLoggedIn: boolean;
  user: {
    email: string;
  } | null;
}

const initialState: AuthenticationState = {
  isLoggedIn: false,
  user: null,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string }>) => {
      state.isLoggedIn = true;
      state.user = {
        email: action.payload.email,
      };
    },
  },
});

export const { login } = authenticationSlice.actions;
export const authenticationReducer = authenticationSlice.reducer;
