import React, { useEffect, useRef, useState } from 'react';
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
import { weatherCondions } from '../../constants/weatherConditions';

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { location, weather } = useSelector((state: RootState) => state.weatherItem);
  const { savedCitiesOpen, citiesList } = useSelector((state: RootState) => state.savedCitiesList);
  const [background, setBackground] = useState('');

  const isMounted = useRef(false);

  // The function handles the state of the background
  useEffect(() => {
    const currentId = weather.current.weather[0].id;
    const currentCondition = weatherCondions.find((item) => {
      return item.id === currentId;
    });

    const currentTimeDate = new Date(weather.current.dt * 1000);
    const sunriseTimeDate = new Date(weather.daily[0].sunrise * 1000);
    const sunsetTimeDate = new Date(weather.daily[0].sunset * 1000);

    if (currentTimeDate >= sunriseTimeDate && currentTimeDate < sunsetTimeDate) {
      currentCondition && setBackground(currentCondition.valueDay);
    } else {
      currentCondition && setBackground(currentCondition.valueNight);
    }

    console.log(currentCondition);
  }, [weather]);

  // The function handles the initial state
  useEffect(() => {
    if (!location || !weather || !citiesList) {
      dispatch(initializeWeather());
    }
  }, [location, weather, citiesList, dispatch]);

  // The function sets the data to LS
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

  // The function controls the saving of the city
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

  // The function handles updating of the data every 1 hour
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
    }, 3600000);

    return () => clearInterval(intervalId);
  }, [dispatch, location, weather, citiesList]);

  return (
    <main className="app" style={{ backgroundImage: `url(${background})` }}>
      <div className="app__wrapper">
        {weather && <Header />}
        {weather && <CurrentWeather />}
        {weather && <WeatherDashboard />}
        {savedCitiesOpen && <SavedCities />}
      </div>
    </main>
  );
};

export default App;
