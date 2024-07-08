import './CurrentUVI.scss';
import '../../styles/weather-data-children.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import scaleImg from '../../assets/images/uvi__scale_low.png';
import { useEffect, useState } from 'react';
import {
  uviDataTypes,
  uviExtremeData,
  uviHighData,
  uviLowData,
  uviModerateData,
  uviVeryHighData,
} from '../../constants/uviData';

const CurrentUVI = () => {
  const { weather } = useSelector((state: RootState) => state.weatherItem);
  const [uviData, setUviData] = useState<uviDataTypes>(null);

  // The function handles the UVI's state
  useEffect(() => {
    if (weather) {
      const uvi = Number(weather.current.uvi.toFixed(0));

      if (uvi < 2) {
        setUviData(uviLowData);
      } else if (uvi >= 3 && uvi <= 5) {
        setUviData(uviModerateData);
      } else if (uvi >= 6 && uvi <= 7) {
        setUviData(uviHighData);
      } else if (uvi >= 8 && uvi <= 10) {
        setUviData(uviVeryHighData);
      } else if (uvi >= 11 && uvi <= 12) {
        setUviData(uviExtremeData);
      } else {
        console.log('UV Index out of range');
      }
    }
  }, [weather]);

  return (
    <div className="weather-data-children current-uvi">
      <div className="weather-data-children__container">
        <h3 className="weather-data-children__value current-uvi__value">
          {weather.current.uvi.toFixed(0)}
        </h3>
        <p className="weather-data-children__description current-uvi__value">
          {uviData && uviData.uviValue}
        </p>
      </div>
      <div className="weather-data-children__container">
        <img
          className="current-uvi__scale"
          src={uviData ? uviData.uviImage : scaleImg}
          alt="uvi scale"
        />
        <p className="weather-data-children__advice current-uvi__advice">
          {uviData && uviData.uviAdvice}
        </p>
      </div>
    </div>
  );
};

export default CurrentUVI;
