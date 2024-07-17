import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFilterAcreage, getFilterPrice } from "../../services/filter.service";
import { IFilter } from "./filter.type";

const initialState: IFilter = {
    listPrice : [],
    listAcreage : []
};

export const filterPrice = createAsyncThunk("filter/filterPrice", async (params, thunkApi) => {
    const response = await getFilterPrice();
    return response.data;
});
export const filterAcreage = createAsyncThunk("filter/filterAcreage", async (params, thunkApi) => {
    const response = await getFilterAcreage();
    return response.data;
});
const filterSlice = createSlice({
    name: "filter",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(filterPrice.fulfilled, (state, action) => {
            state.listPrice = action.payload.data;
        }).addCase(filterPrice.rejected, (state, action) => {
            state.listPrice = []
        }).addCase(filterAcreage.fulfilled, (state, action) => {
            state.listAcreage = action.payload.data;
        }).addCase(filterAcreage.rejected, (state, action) => {
            state.listAcreage = []
        })
    }
})

export default filterSlice.reducer;