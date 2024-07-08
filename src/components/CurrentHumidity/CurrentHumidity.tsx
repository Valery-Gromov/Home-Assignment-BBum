import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const CurrentHumidity = () => {
  const { weather } = useSelector((state: RootState) => state.weatherItem);

  return (
    <div className="weather-data-children ">
      <div className='weather-data-children__container'>
        <h3 className="weather-data-children__value ">{weather.current.humidity.toFixed(0)}%</h3>
      </div>
    </div>
  );
};

export default CurrentHumidity;
