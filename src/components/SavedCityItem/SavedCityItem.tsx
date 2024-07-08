import { useEffect, useState } from 'react';
import './SavedCityItem.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherData } from '../../utils/api';
import { setLocation, setWeather } from '../../redux/weatherItem/slice';
import { location, weatherData } from '../../redux/weatherItem/types';
import { convertUnixTimestamp } from '../../utils/convertUnixTimestamp';
import { setSavedCitiesOpen } from '../../redux/savedCitiesList/slice';
import { AppDispatch, RootState } from '../../redux/store';

const SavedCityItem = (props: location) => {
  const dispatch: AppDispatch = useDispatch();
  const [currentWeather, setCurrentWeather] = useState<weatherData | null>(null);
  const { location, weather } = useSelector((state: RootState) => state.weatherItem);
  const { citiesList } = useSelector((state: RootState) => state.savedCitiesList);

  console.log(props);
  

  const handleButtonClick = async () => {
    dispatch(setWeather(await getWeatherData(props)));
    const newLocation: location = {
      name: props.name,
      country: props.country,
      lat: props.lat,
      lon: props.lon,
    };
    dispatch(setLocation(newLocation));
    dispatch(setSavedCitiesOpen());
  };

  useEffect(() => {
    const getCurrentWeatherData = async () => {
      const currentWeatherData = await getWeatherData(props);
      setCurrentWeather(currentWeatherData);
    };
    getCurrentWeatherData();
  }, [location, weather, citiesList, props]);

  return (
    <>
      {currentWeather && (
        <button className="saved-city-item" onClick={handleButtonClick}>
          <div className="saved-city-item__container">
            <div>
              <img
                className="saved-city-item__icon"
                src={`https://openweathermap.org/img/wn/${currentWeather.current.weather[0].icon}@2x.png`}
                alt="icon"
              />
              <h3 className="saved-city-item__title">{props.name}</h3>
            </div>
            <p className="saved-city-item__text">
              {convertUnixTimestamp(currentWeather.current.dt, currentWeather.timezone_offset)}
            </p>
          </div>
          <div className="saved-city-item__container">
            <h2 className="saved-city-item__temp">
              {typeof currentWeather.current.temp === 'number' &&
                currentWeather.current.temp.toFixed(0)}
              °
            </h2>
            <h3 className="saved-city-item__range-temp">
              H:
              {typeof currentWeather.daily[0].temp !== 'number' &&
                currentWeather.daily[0].temp.max.toFixed(0)}
              ° L:
              {typeof currentWeather.daily[0].temp !== 'number' &&
                currentWeather.daily[0].temp.min.toFixed(0)}
              °
            </h3>
          </div>
        </button>
      )}
    </>
  );
};

export default SavedCityItem;
