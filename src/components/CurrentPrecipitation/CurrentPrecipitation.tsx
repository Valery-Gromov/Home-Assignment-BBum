import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const CurrentPrecipitation = () => {
  const { weather } = useSelector((state: RootState) => state.weatherItem);

  return (
    <div className="weather-data-children ">
      <div className="weather-data-children__container">
        <h3 className="weather-data-children__value ">
          {weather.daily[0].pop && weather.daily[0].pop * 100}%
        </h3>
      </div>
      <div className="weather-data-children__container">
        <p className="weather-data-children__advice">Probability of precipitation</p>
      </div>
    </div>
  );
};

export default CurrentPrecipitation;
