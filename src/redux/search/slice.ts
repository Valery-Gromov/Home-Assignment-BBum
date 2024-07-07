import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { location } from '../weatherItem/types';
import { searchState } from './types';

const initialState: searchState = {
  suggestions: [],
  query: '',
};

export const searchSlice = createSlice({
  name: 'weatherItem',
  initialState,
  reducers: {
    setSuggestions: (state, action: PayloadAction<location[]>) => {
      state.suggestions = action.payload;
    },

    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { setSuggestions, setQuery } = searchSlice.actions;
export default searchSlice.reducer;
