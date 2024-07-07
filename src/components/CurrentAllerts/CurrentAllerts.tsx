import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const CurrentAlerts: React.FC = () => {
  const { weather } = useSelector((state: RootState) => state.weatherItem);

  const lastAlert = Array.isArray(weather.alerts)
    ? weather.alerts[weather.alerts.length - 1]
    : null;

  return (
    <div className="weather-data-children">
      {lastAlert && (
        <>
          <div className="weather-data-children__container">
            <h3 className="weather-data-children__value">
              {lastAlert.event}
            </h3>
          </div>
          <div className="weather-data-children__container">
            <p className="weather-data-children__advice ">
              {lastAlert.description}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default CurrentAlerts;
