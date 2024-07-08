import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const CurrentWeatherIcon = () => {
  const { weather } = useSelector((state: RootState) => state.weatherItem);

  return (
    <img src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`} />
  );
};

export default CurrentWeatherIcon;
