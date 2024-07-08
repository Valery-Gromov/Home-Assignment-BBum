export type location = {
  name: string;
  country: string;
  lat: number;
  lon: number;
};

export type alerts = {
  sender_name: string;
  event: string;
  start: number;
  end: number;
  description: string;
  tags: string;
};

export type weatherConditios = {
  id: number;
  main: number;
  description: string;
  icon: string;
};

export type minutelyWeather = {
  dt: number;
  precipitation: number;
};

export type weather = {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number | Record<string, number>;
  feels_like: number | Record<string, number>;
  clouds: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: weatherConditios[];
  wind_gust?: number;
  pop?: number;
  moonrise?: number;
  moonset?: number;
  moon_phase?: number;
  summary?: string;
};

export type weatherData = {
  current: weather;
  daily: weather[];
  hourly: weather[];
  lat: number;
  lon: number;
  minutely: minutelyWeather[];
  timezone: string;
  timezone_offset: number;
  alerts?: alerts | alerts[];
};

export interface weatherItemState {
  location: location;
  weather: weatherData;
  isSaved: boolean;
}
