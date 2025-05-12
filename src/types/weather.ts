export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface CurrentWeather {
  city: string;
  country: string;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  wind_speed: number;
  wind_deg: number;
  conditions: WeatherCondition;
  uv_index: number;
  visibility: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  updated_at: number;
}

export interface ForecastDay {
  date: number;
  temp_max: number;
  temp_min: number;
  conditions: WeatherCondition;
  pop: number; // probability of precipitation
}

export interface WeatherData {
  current: CurrentWeather;
  forecast: ForecastDay[];
}

export interface Location {
  id: string;
  name: string;
  country: string;
}