import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { alerts } from '../../redux/weatherItem/types';

const CurrentAlerts: React.FC = () => {
  const { weather } = useSelector((state: RootState) => state.weatherItem);
  const [lastAlert, setLastAlert] = useState<alerts | null>(null);


 // The function handles the alert's state
  useEffect(() => {
    if (!weather) {
      return;
    }

    if (Array.isArray(weather.alerts)) {
      setLastAlert(weather.alerts[weather.alerts.length - 1]);
    }
  }, [weather, lastAlert]);

  return (
    <div className="weather-data-children">
      {lastAlert && (
        <>
          <div className="weather-data-children__container">
            <h3 className="weather-data-children__value">{lastAlert.event}</h3>
          </div>
          <div className="weather-data-children__container">
            <p className="weather-data-children__advice ">{lastAlert.description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CurrentAlerts;
