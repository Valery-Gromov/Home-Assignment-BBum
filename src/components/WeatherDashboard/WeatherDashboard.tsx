import './WeatherDashboard.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import CurrentFeelsLike from '../CurrentFeelsLike/CurrentFeelsLike';
import CurrentUVI from '../CurrentUVI/CurrentUVI';
import DailyWeather from '../DailyWeather/DailyWeather';
import WeatherData from '../WeatherData/WeatherData';
import CurrentSunsetAndSunrise from '../CurrentSunsetAndSunrise/CurrentSunsetAndSunrise';
import CurrentWind from '../CurrentWind/CurrentWind';
import CurrentHumidity from '../CurrentHumidity/CurrentHumidity';
import CurrentPrecipitation from '../CurrentPrecipitation/CurrentPrecipitation';
import CurrentVisibility from '../CurrentVisibility/CurrentVisibility';
import CurrentPressure from '../CurrentPressure/CurrentPressure';
import HourlyWeather from '../HourlyWeather/HourlyWeather';
import CurrentAllerts from '../CurrentAllerts/CurrentAllerts';

const WeatherDashboard = () => {
  const { weather } = useSelector((state: RootState) => state.weatherItem);

  return (
    <section className="weather-dashboard">
      <WeatherData title={'Hourly forecast'} children={<HourlyWeather />} size={'1x4'} />
      <WeatherData title={'7-Day forecast'} children={<DailyWeather />} size={'2x2'} />
      <WeatherData title={'UV Index'} children={<CurrentUVI />} size={'1x1'} />
      <WeatherData title={'Feels like'} children={<CurrentFeelsLike />} size={'1x1'} />
      <WeatherData title={'sunset'} children={<CurrentSunsetAndSunrise />} size={'1x1'} />
      <WeatherData title={'Wind'} children={<CurrentWind />} size={'1x1'} />
      {weather.alerts && (
        <WeatherData title={'Alerts'} children={<CurrentAllerts />} size={'1x2'} />
      )}
      <WeatherData title={'Humidity'} children={<CurrentHumidity />} size={'1x1'} />
      <WeatherData title={'Precipitation'} children={<CurrentPrecipitation />} size={'1x1'} />
      <WeatherData title={'Visibility'} children={<CurrentVisibility />} size={'1x1'} />
      <WeatherData title={'Pressure'} children={<CurrentPressure />} size={'1x1'} />
    </section>
  );
};

export default WeatherDashboard;
