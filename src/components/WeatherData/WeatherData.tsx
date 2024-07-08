import './WeatherData.scss';

const WeatherData = (props: any) => {
  return (
    <div className={`weather-data weather-data_${props.size}`}>
      <div className="weather-data__top-container">
        <h2 className="weather-data__title">{props.title}</h2>
        {props.title === '7-Day forecast' && (
          <div className="weather-data__range-container">
            <h3>L</h3>
            <h3>H</h3>
          </div>
        )}
      </div>
      <div className="weather-data__bottom-container">{props.children}</div>
    </div>
  );
};

export default WeatherData;
