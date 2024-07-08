import { getGeoData, getWeatherData } from './api';
import { location, weatherData } from '../redux/weatherItem/types';

export const getInitialWeather = async () => {
  const location: location = await getGeoData('Tel Aviv');
  const weather: weatherData = await getWeatherData(location);
  const isSaved = false;

  return { location, weather, isSaved };
};
