import { location } from '../redux/weatherItem/types';

export const getCitiesListFromLS = () => {
  const json = localStorage.getItem('savedCitiesList');
  const data: location[] = json ? JSON.parse(json) : [];

  return data;
};

export const getCurrentDataFromLS = () => {
  const weather = localStorage.getItem('currentWeather');
  const weatherData: any = weather ? JSON.parse(weather) : '';

  const currentLocation = localStorage.getItem('currentLocation');
  const currentLocationData: location = currentLocation ? JSON.parse(currentLocation) : {};

  return { weatherData, currentLocationData };
};
