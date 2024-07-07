import './CurrentUVI.scss';
import '../../styles/weather-data-children.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import scaleImg from '../../assets/images/uvi__scale.png';

const CurrentUVI = () => {
  const { weather } = useSelector((state: RootState) => state.weatherItem);

  return (
    <div className="weather-data-children current-uvi">
      <div className='weather-data-children__container'>
        <h3 className="weather-data-children__value current-uvi__value">
          {weather.current.uvi.toFixed(0)}
        </h3>
        <p className="weather-data-children__description current-uvi__value">Moderate</p>
      </div>
      <div className='weather-data-children__container'>
        <img className='current-uvi__scale' src={scaleImg} alt="uvi scale" />
        <p className="weather-data-children__advice current-uvi__advice">Use sun protection</p>
      </div>
    </div>
  );
};

export default CurrentUVI;


