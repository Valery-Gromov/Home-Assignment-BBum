import React, { useEffect, useRef } from 'react';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import SavedCities from '../SavedCities/SavedCities';
import WeatherDashboard from '../WeatherDashboard/WeatherDashboard';
import Header from '../Header/Header';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import { getWeatherByCoord, initializeWeather } from '../../redux/weatherItem/asyncActions';
import { getWeatherData } from '../../utils/api';
import { resetIsSaved, setIsSaved } from '../../redux/weatherItem/slice';
import { updateCitiesList } from '../../redux/savedCitiesList/slice';

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { location, weather } = useSelector((state: RootState) => state.weatherItem);
  const { savedCitiesOpen, citiesList } = useSelector((state: RootState) => state.savedCitiesList);

  const isMounted = useRef(false);

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
    let currentCity;
    
    if (location) {
      currentCity = citiesList.find((item) => item.name === location.name);
    }

    if (!currentCity) {
      dispatch(resetIsSaved());
    } else {
      dispatch(setIsSaved());
    }
  }, [location, weather, citiesList, dispatch]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (location && location.name) {
        dispatch(getWeatherByCoord(location.name));

        const updateCitiesListas = async () => {
          const newArray = await Promise.all(
            citiesList.map(async (item) => {
              const weatherData = await getWeatherData(item);
              return {
                ...item,
                weatherData,
              };
            }),
          );

          dispatch(updateCitiesList(newArray));
        };

        updateCitiesListas();
      }
    }, 10 * 10 * 1000);

    return () => clearInterval(intervalId);
  }, [dispatch, location, weather, citiesList]);

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
