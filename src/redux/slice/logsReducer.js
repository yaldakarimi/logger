import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchLogs = createAsyncThunk("logs/fetchLogs", async () => {
  const res = await axios.get("/logs");
  return res.data;
});

const logsSlice = createSlice({
  name: "logs",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchLogs.pending]: (state, action) => {
      state.status = "loading";
    },

    [fetchLogs.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    },

    [fetchLogs.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default logsSlice.reducer;
