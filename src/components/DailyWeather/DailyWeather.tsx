import '../../styles/weather-data-children.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { weather } from '../../redux/weatherItem/types';
import { getNextSevenDays } from '../../utils/getNextDays';
import { useEffect, useState } from 'react';

const DailyWeather = () => {
  const { weather } = useSelector((state: RootState) => state.weatherItem);
  const [nextSevenDays, setNextSevenDays] = useState<{ date: string; day: string }[] | []>([]);

  useEffect(() => {
    const sevenDays = getNextSevenDays();
    sevenDays[0].day = 'Today';
    setNextSevenDays(sevenDays);
  }, [weather]);

  return (
    <div className="weather-data-children ">
      <ul className="weather-data-children__days-list">
        {weather.daily.slice(0, 7).map((day: weather, i: number) => (
          <li className="weather-data-children__day" key={i}>
            {nextSevenDays[i] && (
              <h4 className="weather-data-children__day-title">{nextSevenDays[i].day}</h4>
            )}
            <div className="weather-data-children__day-description-container">
              <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} />
              <p className="weather-data-children__day-description">{day.weather[0].description}</p>
            </div>
            <div className="weather-data-children__day-temp-container">
              <p className="weather-data-children__day-temp">
                {typeof day.temp !== 'number' && day.temp.min.toFixed(0)}°
              </p>
              <p className="weather-data-children__day-temp">
                {typeof day.temp !== 'number' && day.temp.max.toFixed(0)}°
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyWeather;
