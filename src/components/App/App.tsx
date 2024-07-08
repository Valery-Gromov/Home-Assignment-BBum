import React, { useEffect, useRef } from 'react';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import SavedCities from '../SavedCities/SavedCities';
import WeatherDashboard from '../WeatherDashboard/WeatherDashboard';
import Header from '../Header/Header';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import { getWeatherByCoord, initializeWeather } from '../../redux/weatherItem/asyncActions';
import { getWeatherData } from '../../constants/api';
import { resetIsSaved, setIsSaved } from '../../redux/weatherItem/slice';

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { location, weather } = useSelector((state: RootState) => state.weatherItem);
  const { savedCitiesOpen, citiesList } = useSelector((state: RootState) => state.savedCitiesList);

  const isMounted = useRef(false);

  const updateCitiesList = () => {
    citiesList.forEach(async (item) => {
      await getWeatherData(item);
    });
  };

  useEffect(() => {
    if (!location || !weather || !citiesList) {
      dispatch(initializeWeather());
    }
  }, [location, weather, citiesList, dispatch]);

  useEffect(() => {
    if (isMounted.current) {
      const currentWeatherJson = JSON.stringify(weather);
      const currentLocationJson = JSON.stringify(location);
      const currentCitiesList = JSON.stringify(citiesList);

      localStorage.setItem('currentWeather', currentWeatherJson);
      localStorage.setItem('currentLocation', currentLocationJson);
      localStorage.setItem('savedCitiesList', currentCitiesList);
    }

    isMounted.current = true;
  }, [location, weather, citiesList]);

  useEffect(() => {
    const currentCity = citiesList.find((item) => item.name === location.name);

    if (!currentCity) {
      dispatch(resetIsSaved());
    } else {
      dispatch(setIsSaved());
    }
  }, [location, weather, citiesList]);

  useEffect(() => {
    if (!location || !weather) {
      dispatch(initializeWeather());
    }

    const intervalId = setInterval(() => {
      if (location && location.name) {
        dispatch(getWeatherByCoord(location.name));
        console.log(updateCitiesList());
      }
    }, 10 * 10 * 1000);

    return () => clearInterval(intervalId);
  }, [dispatch, location, weather, updateCitiesList]);

  return (
    <div className="app">
      {weather && <Header />}
      {weather && <CurrentWeather />}
      {weather && <WeatherDashboard />}
      {savedCitiesOpen && <SavedCities />}
    </div>
  );
};

export default App;
