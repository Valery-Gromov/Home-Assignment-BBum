import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCurrentDataFromLS } from '../../utils/getDataFromLS';
import { weatherItemState, location, weatherData } from './types';
import { getWeatherByCoord, initializeWeather } from './asyncActions';

const initialState: weatherItemState = {
  location: getCurrentDataFromLS().currentLocationData || null,
  weather: getCurrentDataFromLS().weatherData || null,
  isSaved: false,
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
    setIsSaved: (state) => {
      state.isSaved = true;
    },
    resetIsSaved: (state) => {
      state.isSaved = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      initializeWeather.fulfilled,
      (state, action: PayloadAction<weatherItemState>) => {
        state.location = action.payload.location;
        state.weather = action.payload.weather;
      },
    );

    builder.addCase(
      getWeatherByCoord.fulfilled,
      (state, action: PayloadAction<{ location: location; weather: weatherData }>) => {
        state.location = action.payload.location;
        state.weather = action.payload.weather;
      },
    );
  },
});

export const { setLocation, setWeather, setIsSaved, resetIsSaved } = weatherItemSlice.actions;
export default weatherItemSlice.reducer;
