import '../../styles/weather-data-children.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { weather } from '../../redux/weatherItem/types';
import { getNextHours } from '../../utils/getNextHours';
import { useEffect, useState } from 'react';

const HourlyWeather = () => {
  const [nextHours, setNextHours] = useState<string[] | []>([]);
  const { weather } = useSelector((state: RootState) => state.weatherItem);

  useEffect(() => {
    const hour = getNextHours();
    hour[0] = 'Now';
    setNextHours(hour);
  }, [weather]);

  return (
    <div className="weather-data-children ">
      <ul className="weather-data-children__hours-list">
        {weather.hourly.slice(0, 24).map((hour: weather, i: number) => (
          <li className="weather-data-children__hour" key={i}>
            <p className="weather-data-children__hour-description">
              {nextHours[i] && nextHours[i]}
            </p>
            <img
              className="weather-data-children__hour-icon"
              src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
              alt={hour.weather[0].description}
            />
            <p className="weather-data-children__hour-description">
              {typeof hour.temp === 'number' && hour.temp.toFixed(0)}°
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HourlyWeather;
