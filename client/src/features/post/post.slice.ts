import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllPostService } from "../../services/post.service";
import { IPostState } from "./post.type";

const initialState: IPostState = {
  listPost: [],
};

export const getAllPost = createAsyncThunk(
  "post/getPost",
  async (_, thunkApi) => {
    const response = await getAllPostService();
    return response;
  }
);
const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPost.fulfilled, (state, action) => {
        state.listPost = action.payload.data;
      })
      .addCase(getAllPost.rejected, (state, action) => {
        state.listPost = [];
      });
  },
});
// export const {} = postSlice.actions;
export default postSlice.reducer;
