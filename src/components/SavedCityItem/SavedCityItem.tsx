import { useEffect, useState } from 'react';
import './SavedCityItem.scss';
import { useDispatch } from 'react-redux';
import { getWeatherData } from '../../constants/api';
import { setLocation, setWeather } from '../../redux/weatherItem/slice';
import { location, weatherData } from '../../redux/weatherItem/types';
import { convertUnixTimestamp } from '../../utils/convertUnixTimestamp';
import { setSavedCitiesOpen } from '../../redux/savedCitiesList/slice';

const SavedCityItem = (props: location) => {
  const [currentWeather, setCurrentWeather] = useState<weatherData | null>(null);
  const dispatch = useDispatch();

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

  const getCurrentWeatherData = async () => {
    const currentWeatherData = await getWeatherData(props);
    setCurrentWeather(currentWeatherData);
  };

  useEffect(() => {
    getCurrentWeatherData();
  }, []);

  console.log(currentWeather);

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
