import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getCurrentDataFromLS } from '../../utils/getDataFromLS';
import { weatherItemState, location, weatherData } from './types';

const initialState: weatherItemState = {
  location: getCurrentDataFromLS().currentLocationData,
  weather: getCurrentDataFromLS().weatherData,
};

export const weatherItemSlice = createSlice({
  name: 'weatherItem',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<location>) => {
      state.location = action.payload;
    },
    setWeather: (state, action: PayloadAction<weatherData>) => {
      state.weather = action.payload;
    },
  },
});

export const { setLocation, setWeather } = weatherItemSlice.actions;
export default weatherItemSlice.reducer;
