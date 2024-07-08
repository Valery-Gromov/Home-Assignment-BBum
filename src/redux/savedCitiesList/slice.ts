import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getCitiesListFromLS } from '../../utils/getDataFromLS';
import { savedCitiesListState } from './types';
import { location } from '../weatherItem/types';

const initialState: savedCitiesListState = {
  citiesList: getCitiesListFromLS() || null,
  savedCitiesOpen: false,
};

export const savedCitiesListSlice = createSlice({
  name: 'weatherItem',
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<location>) => {
      state.citiesList.push(action.payload);
      console.log('state.citiesList', state.citiesList);
    },
    setSavedCitiesOpen: (state) => {
      state.savedCitiesOpen = !state.savedCitiesOpen;
    },
  },
});

export const { addCity, setSavedCitiesOpen } = savedCitiesListSlice.actions;
export default savedCitiesListSlice.reducer;
