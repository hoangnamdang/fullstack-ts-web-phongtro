import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataAuth, InputAuth } from "./auth.type";
import * as authService from "../../services/auth.service";
const initialState: DataAuth = {
  err: null,
  isLoggedIn: false,
  token: null,
  msg: "",
};
export const register = createAsyncThunk(
  "auth/register",
  async (params: InputAuth, thunkApi) => {
    const response = await authService.register(params);
    return response;
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (params: Omit<InputAuth, "name">, thunkApi) => {
    const response = await authService.login(params);
    return response;
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.err = null;
      state.isLoggedIn = false;
      state.token = null;
      state.msg = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload.err === 0;
        state.token = action.payload.token;
        state.msg = action.payload.msg;
        state.err = action.payload.err;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload.err === 0;
        state.token = action.payload.token;
        state.msg = action.payload.msg;
        state.err = action.payload.err;
      });
  },
});

export const {logout} = authSlice.actions;

export default authSlice.reducer;
