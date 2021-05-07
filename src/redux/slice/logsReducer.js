import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
  current: null,
  status: 'idle',
  fetchLog: null,
  addError: null,
  deleteError: null,
  updateError: null,
  searchError: null,
};

export const fetchLogs = createAsyncThunk('logs/fetchLogs', async () => {
  const res = await axios.get('/logs');
  return res.data;
});

export const addLog = createAsyncThunk('logs/addLog', async (log) => {
  const res = await axios.post('/logs', log);
  return res.data;
});

export const deleteLog = createAsyncThunk('logs/deleteLog', async (id) => {
  await axios.delete(`/logs/${id}`);
  return id;
});

export const updateLog = createAsyncThunk('logs/updateLog', async (log) => {
  const res = await axios.put(`/logs/${log.id}`, log);
  return res.data;
});

export const searchLogs = createAsyncThunk(
  'logs/searchLogs',
  async (searchInput) => {
    const res = await axios.get(`/logs?q=${searchInput}`);

    return res.data;
  }
);

const logsSlice = createSlice({
  name: 'logs',
  initialState,
  reducers: {
    setCurrent(state, action) {
      state.current = action.payload;
    },

    clearCurrent(state, action) {
      state.current = null;
    },
  },
  extraReducers: {
    [fetchLogs.pending]: (state, action) => {
      state.status = 'loading';
    },

    [fetchLogs.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.items = action.payload;
    },

    [fetchLogs.rejected]: (state, action) => {
      state.status = 'failed';
      state.fetchLog = action.error.message;
    },

    // Add a Log
    [addLog.fulfilled]: (state, action) => {
      state.items.push(action.payload);
    },

    [addLog.rejected]: (state, action) => {
      state.addError = action.error.message;
    },

    // Delete a log
    [deleteLog.fulfilled]: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    [deleteLog.rejected]: (state, action) => {
      state.deleteError = action.error.message;
    },

    // Update Log
    [updateLog.fulfilled]: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },

    [updateLog.rejected]: (state, action) => {
      state.updateError = action.error.payload;
    },

    // Search Logs
    [searchLogs.fulfilled]: (state, action) => {
      state.items = action.payload;
    },

    [searchLogs.rejected]: (state, action) => {
      state.searchError = action.error.message;
    },
  },
});

export const { setCurrent, clearCurrent } = logsSlice.actions;

export default logsSlice.reducer;
