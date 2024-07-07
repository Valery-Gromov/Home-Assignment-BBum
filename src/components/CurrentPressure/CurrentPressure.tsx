import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const CurrentPressure = () => {
  const { weather } = useSelector((state: RootState) => state.weatherItem);

  return (
    <div className="weather-data-children ">
      <div className="weather-data-children__container">
        <h3 className="weather-data-children__value ">{weather.current.pressure} hPa</h3>
      </div>
    </div>
  );
};

export default CurrentPressure;
