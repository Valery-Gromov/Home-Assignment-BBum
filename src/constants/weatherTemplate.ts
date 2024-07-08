import { location, weatherData } from "../redux/weatherItem/types";

// Weather and location templates

export const weatherTemplate: weatherData = {
  lat: 0,
  lon: 0,
  timezone: '',
  timezone_offset: 0,
  current: {
    dt: 0,
    sunrise: 0,
    sunset: 0,
    temp: 0,
    feels_like: 0,
    pressure: 0,
    humidity: 0,
    dew_point: 0,
    uvi: 0,
    clouds: 0,
    visibility: 0,
    wind_speed: 0,
    wind_deg: 0,
    weather: [{ id: 0, main: '', description: '', icon: '' }],
  },
  minutely: [],
  hourly: [],
  daily: [],
};

export const locationTemplate: location = { name: '', country: '', lat: 0, lon: 0 };
