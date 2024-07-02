import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as appService from "../../services/app.service"
import { Categories } from "./app.type";
const initialState: Categories = {
    categories: []
}

export const getCategory = createAsyncThunk('app/getCategory', async (_, thunkApi) => {
    const response = await appService.getCategory();
    return response;
})
const appSlice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategory.fulfilled, (state, action) => {
            state.categories = action.payload.data
        })
    }
})

export const {} =  appSlice.actions;

export default appSlice.reducer;