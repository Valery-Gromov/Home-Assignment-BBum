import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const CurrentTemperature = () => {
  const { weather } = useSelector((state: RootState) => state.weatherItem);

  return (
    <p>
      Temperature: {typeof weather.current.temp === 'number' && weather.current.temp.toFixed(0)} °C
    </p>
  );
};

export default CurrentTemperature;
