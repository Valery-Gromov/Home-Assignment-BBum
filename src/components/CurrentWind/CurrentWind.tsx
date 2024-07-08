import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const CurrentWind = () => {
  const { weather } = useSelector((state: RootState) => state.weatherItem);
  const [windDirection, setWindDirection] = useState('');

  useEffect(() => {
    const degrees = weather.current.wind_deg;

    if (degrees >= 0 && degrees < 22.5) {
      setWindDirection('North (N)');
    } else if (degrees >= 22.5 && degrees < 67.5) {
      setWindDirection('Northeast (NE)');
    } else if (degrees >= 67.5 && degrees < 112.5) {
      setWindDirection('East (E)');
    } else if (degrees >= 112.5 && degrees < 157.5) {
      setWindDirection('Southeast (SE)');
    } else if (degrees >= 157.5 && degrees < 202.5) {
      setWindDirection('South (S)');
    } else if (degrees >= 202.5 && degrees < 247.5) {
      setWindDirection('Southwest (SW)');
    } else if (degrees >= 247.5 && degrees < 292.5) {
      setWindDirection('West (W)');
    } else if (degrees >= 292.5 && degrees < 337.5) {
      setWindDirection('Northwest (NW)');
    } else if (degrees >= 337.5 && degrees <= 360) {
      setWindDirection('North (N)');
    } else {
      console.log('Unknown direction');
    }

  }, [weather])

  return (
    <div className="weather-data-children ">
      <div className="weather-data-children__container">
        <h3 className="weather-data-children__value ">
          {weather.current.wind_speed.toFixed(0)} m/s
        </h3>
      </div>
      <div className="weather-data-children__container">
        <p className="weather-data-children__advice">{windDirection}</p>
      </div>
    </div>
  );
};

export default CurrentWind;
