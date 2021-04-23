import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchTechs = createAsyncThunk("techs/fetchTechs", async () => {
  const res = await axios.get("/techs");
  return res.data;
});

const techsSlice = createSlice({
  name: "techs",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTechs.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchTechs.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    },
    [fetchTechs.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default techsSlice.reducer;
