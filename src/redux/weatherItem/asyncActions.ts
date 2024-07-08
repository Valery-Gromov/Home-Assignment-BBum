import { createAsyncThunk } from '@reduxjs/toolkit';
import { getGeoData, getWeatherData } from '../../utils/api';
import { getInitialWeather } from '../../utils/getInitialWeather';
import { location, weatherData, weatherItemState } from './types';

// Returns the weather and location when LS is empty
export const initializeWeather = createAsyncThunk<weatherItemState>(
  'weatherItem/initializeWeather',
  async () => {
    const initialData: weatherItemState = await getInitialWeather();
    console.log(initialData);
    return initialData;
  },
);

// Returns the weather and location by name
export const getWeatherByCoord = createAsyncThunk<
  { location: location; weather: weatherData; },
  string
>('weatherItem/getWeatherByCoord', async (query, { rejectWithValue }) => {
  try {
    const coords: location = await getGeoData(query);
    if (!coords) throw new Error('Coordinates not found');

    const weather = await getWeatherData(coords);
    return { location: coords, weather };
  } catch (error) {
    console.error('Error fetching the weather data', error);
    return rejectWithValue(error);
  }
});
