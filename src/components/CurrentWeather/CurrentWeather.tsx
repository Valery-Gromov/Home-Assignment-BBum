import './CurrentWeather.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const CurrentWeather = () => {
  const { weather } = useSelector((state: RootState) => state.weatherItem);

  return (
    <section className="current-weather">
      <div className="current-weather__decription-container">
        <h2>{weather.current.weather[0].description}</h2>
        <h3>
          H:{typeof weather.daily[0].temp !== 'number' && weather.daily[0].temp.max.toFixed(0)}° L:
          {typeof weather.daily[0].temp !== 'number' && weather.daily[0].temp.min.toFixed(0)}°
        </h3>
      </div>
      <div className="current-weather__value-container">
        <h1 className="current-weather__value">
          {typeof weather.current.temp === 'number' && weather.current.temp.toFixed(0)}°
        </h1>
      </div>
    </section>
  );
};

export default CurrentWeather;
