import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const CurrentVisibility = () => {
  const { weather } = useSelector((state: RootState) => state.weatherItem);

  return (
    <div className="weather-data-children ">
      <div className='weather-data-children__container'>
        <h3 className="weather-data-children__value ">
          {weather.current.visibility && weather.current.visibility * 0.001} km
        </h3>
      </div>
    </div>
  );
};

export default CurrentVisibility;
