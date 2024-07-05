import React from 'react';
import './App.css';
import axios from 'axios';

const API_KEY = '478e166b12daa48216146c31c4f7c9fe';

const App: React.FC = () => {
  const [city, setCity] = React.useState<string>('');
  const [weather, setWeather] = React.useState<any>(null);
  const [savedCities, setSavedCities] = React.useState<string[]>([]);

  const getCoordinates = async (city: string) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`,
      );
      const { lat, lon } = response.data[0];
      // setCoordinates({ lat, lon });
      setCity(response.data[0].name);
      return { lat, lon };
    } catch (error) {
      console.log('Error fetching the coordinates data', error);
      return null;
    }
  };

  const getWeather = async (city: string) => {
    const coords = await getCoordinates(city);
    if (!coords) return;

    console.log(coords);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=metric`,
      );
      console.log(response.data);
      setWeather(response.data);
    } catch (error) {
      console.log('Error fetching the weather data', error);
    }
  };

  const handleSearch = () => {
    getWeather(city);
  };

  const handleSave = () => {
    setSavedCities([...savedCities, city]);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleSave} disabled={!weather}>
        Save
      </button>
      {weather && (
        <div>
          <h2>{city}</h2>
          <p>Temperature: {weather.current.temp}°C</p>
          <p>Weather: {weather.current.weather[0].description}</p>
          <p>Feels like: {weather.current.feels_like}</p>
          <p>UV Index: {weather.current.uvi}</p>
          <p>Wind speed: {weather.current.wind_speed}</p>
        </div>
      )}
      {savedCities.length > 0 && (
        <div>
          <h2>Saved Cities</h2>
          <ul>
            {savedCities.map((city, index) => (
              <li key={index}>{city}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
