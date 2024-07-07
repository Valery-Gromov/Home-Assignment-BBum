import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const CurrentWind = () => {
  const { weather } = useSelector((state: RootState) => state.weatherItem);

  return (
    <div className="weather-data-children ">
      <div className="weather-data-children__container">
        <h3 className="weather-data-children__value ">
          {weather.current.wind_speed.toFixed(0)} m/s
        </h3>
      </div>
      <div className="weather-data-children__container">
        <p className="weather-data-children__advice">{weather.current.wind_deg}°</p>
      </div>
    </div>
  );
};

export default CurrentWind;
