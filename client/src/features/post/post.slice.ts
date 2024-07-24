import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllPostByLimitService, getAllPostService, getLatedPostService } from "../../services/post.service";
import { IPostState } from "./post.type";
const initialState: IPostState = {
  dataPosts: {
    listPost: [],
    count: 0,
    totalPage: 0,
  },
  latedPost: []
};

export const getAllPost = createAsyncThunk(
  "post/getPost",
  async (_, thunkApi) => {
    const response = await getAllPostService();
    return response;
  }
);

export const getAllPostLimitSlice = createAsyncThunk(
  "post/getPostByLimit",
  async (query: object, thunkApi) => {
    
    const limit = 10;
    const response = await getAllPostByLimitService({query,limit});
    return response;
  }
);

export const getLatedPost = createAsyncThunk(
  "post/getLatedPost",
  async (_, thunkApi) => {
    const limit = 10;
    const response = await getLatedPostService(limit);
    return response;
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPostLimitSlice.fulfilled, (state, action) => {
        const total = Math.ceil(action.payload.data.count/ 10)
        state.dataPosts.listPost = action.payload.data.rows;
        state.dataPosts.count = action.payload.data.count;
        state.dataPosts.totalPage = total
      })
      .addCase(getAllPostLimitSlice.rejected, (state, action) => {
        state.dataPosts.listPost = [];
        state.dataPosts.count = 0;
        state.dataPosts.totalPage = 0;
      })
      .addCase(getLatedPost.fulfilled, (state, action) => {
        state.latedPost = action.payload.data

      }).addCase(getLatedPost.rejected, (state, action) => {
        state.latedPost = []
      })
  },
});
// export const {} = postSlice.actions;
export default postSlice.reducer;
