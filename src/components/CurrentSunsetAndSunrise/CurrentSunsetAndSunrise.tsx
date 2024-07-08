import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { convertUnixTimestamp } from '../../utils/convertUnixTimestamp';

const CurrentSunsetAndSunrise = () => {
  const { weather } = useSelector((state: RootState) => state.weatherItem);

  return (
    <div className="weather-data-children">
      <div className='weather-data-children__container'>
        <h3 className="weather-data-children__value ">
          {convertUnixTimestamp(weather.current.sunset, weather.timezone_offset)}
        </h3>
      </div>
      <div className='weather-data-children__container'>
        <p className="weather-data-children__advice">
          Sunrise: {convertUnixTimestamp(weather.current.sunrise, weather.timezone_offset)}
        </p>
      </div>
    </div>
  );
};

export default CurrentSunsetAndSunrise;
