import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const CurrentWeatherDescription = () => {
  const { weather } = useSelector((state: RootState) => state.weatherItem);

  return <p>Weather: {weather.current.weather[0].description}</p>;
};

export default CurrentWeatherDescription;
