import axios from 'axios';

export const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

export const getGeoData = async (query: string) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=${API_KEY}`,
    );
    return response.data[0];
  } catch (error) {
    console.log('Error fetching the coordinates data', error);
    return null;
  }
};

export const getWeatherData = async (coords: any) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=metric`,
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('Error fetching the weather data', error);
  }
};

export const getSuggestions = async (query: string) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`,
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching the suggestions', error);
  }
};
