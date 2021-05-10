import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
  status: 'idle',
  fetchError: null,
  addError: null,
  deleteError: null,
};

export const fetchTechs = createAsyncThunk('techs/fetchTechs', async () => {
  const res = await axios.get('/techs');
  return res.data;
});

export const addTech = createAsyncThunk('techs/addTech', async (tech) => {
  const res = await axios.post('/techs', tech);
  return res.data;
});

export const deleteTech = createAsyncThunk('techs/deleteTech', async (id) => {
  await axios.delete(`/techs/${id}`);
  return id;
});

const techsSlice = createSlice({
  name: 'techs',
  initialState,
  reducers: {},
  extraReducers: {
    // Fetch Techs
    [fetchTechs.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchTechs.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.items = action.payload;
    },
    [fetchTechs.rejected]: (state, action) => {
      state.status = 'failed';
      state.fetchError = action.error.message;
    },

    // Add techs
    [addTech.fulfilled]: (state, action) => {
      state.items.push(action.payload);
    },
    [addTech.rejected]: (state, action) => {
      state.addError = action.error.message;
    },

    // Delete Tech
    [deleteTech.fulfilled]: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    [deleteTech.rejected]: (state, action) => {
      state.deleteError = action.error.message;
    },
  },
});

export default techsSlice.reducer;
