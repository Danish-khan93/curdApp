import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { INITIALSTATE, PAGINATIONTYPE } from "../../types/postType";

export const postsFetch = createAsyncThunk(
  "posts/postsFetch",
  async (pagination: PAGINATIONTYPE, { rejectWithValue }) => {
    try {
        console.log("pagination",pagination);
        
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_start=${pagination.skip}&_limit=${pagination.limit}`
      );
      console.log(response.data);
      return response.data
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

const initialState: INITIALSTATE = {
  post: [],
  isLoading: false,
  isError: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postsFetch.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postsFetch.fulfilled, (state,{payload}) => {
      state.isLoading = false;
      state.post =[...state.post,...payload]
    });
    builder.addCase(postsFetch.rejected, (state) => {
      state.isError = "is error";
    });
  },
});

export default postSlice.reducer;