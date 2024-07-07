import React from 'react';
import './App.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import SavedCities from '../SavedCities/SavedCities';
import WeatherDashboard from '../WeatherDashboard/WeatherDashboard';
import Header from '../Header/Header';
import CurrentWeather from '../CurrentWeather/CurrentWeather';


const App: React.FC = () => {
  const { weather } = useSelector((state: RootState) => state.weatherItem);
  const { savedCitiesOpen } = useSelector((state: RootState) => state.savedCitiesList);

  return (
    <div className='app'>
      {weather && <Header />}
      {weather && <CurrentWeather />}
      {weather && <WeatherDashboard />}
      {savedCitiesOpen && <SavedCities />}
    </div>
  );
};

export default App;
