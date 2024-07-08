import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const CurrentFeelsLike = () => {
  const { weather } = useSelector((state: RootState) => state.weatherItem);
  const [advice, setAdvice] = useState('');

  // The function handles the feels like state
  useEffect(() => {
    const tempFL = Number(weather.current.feels_like).toFixed(0);
    const temp = Number(weather.current.temp).toFixed(0);

    if (tempFL === temp) {
      setAdvice('Similar to actual temp');
    } else if (tempFL < temp) {
      setAdvice('Сooler than the actual temp');
    } else if (temp < tempFL) {
      setAdvice('Warmer than the actual temp');
    }
  }, [weather]);

  return (
    <div className="weather-data-children current-feels-like">
      <div className="weather-data-children__container">
        <h3 className="weather-data-children__value current-feels-like__value">
          {typeof weather.current.feels_like === 'number' && weather.current.feels_like.toFixed(0)}°
        </h3>
      </div>
      <div className="weather-data-children__container">
        <p className="weather-data-children__advice current-feels-like__advice">
          {advice && advice}
        </p>
      </div>
    </div>
  );
};

export default CurrentFeelsLike;
