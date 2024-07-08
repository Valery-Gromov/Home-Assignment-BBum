import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const CurrentFeelsLike = () => {
  const { weather } = useSelector((state: RootState) => state.weatherItem);

  return (
    <div className="weather-data-children current-feels-like">
      <div className='weather-data-children__container'>
        <h3 className="weather-data-children__value current-feels-like__value">
          {typeof weather.current.feels_like === 'number' && weather.current.feels_like.toFixed(0)}°
        </h3>
      </div>
      <div className='weather-data-children__container'>
        <p className="weather-data-children__advice current-feels-like__advice">Similar to actual temperature</p>
      </div>
    </div>
  );
};

export default CurrentFeelsLike;
