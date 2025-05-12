import React from 'react';
import { CurrentWeather } from '../types/weather';
import WeatherIcon from './WeatherIcon';
import { formatDate } from '../utils/mockData';

interface WeatherDetailsProps {
  data: CurrentWeather;
  textColorClass: string;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ data, textColorClass }) => {
  const detailItems = [
    {
      icon: 'humidity',
      label: 'Humidity',
      value: `${data.humidity}%`,
    },
    {
      icon: 'wind',
      label: 'Wind',
      value: `${data.wind_speed} m/s`,
    },
    {
      icon: 'pressure',
      label: 'Pressure',
      value: `${data.pressure} hPa`,
    },
    {
      icon: 'visibility',
      label: 'Visibility',
      value: `${data.visibility / 1000} km`,
    },
    {
      icon: 'uv-index',
      label: 'UV Index',
      value: `${data.uv_index}`,
    },
    {
      icon: 'sunrise',
      label: 'Sunrise',
      value: formatDate(data.sunrise, 'time'),
    },
    {
      icon: 'sunset',
      label: 'Sunset',
      value: formatDate(data.sunset, 'time'),
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {detailItems.map((item, index) => (
        <div 
          key={index}
          className="p-4 rounded-xl backdrop-blur-md bg-white/10 hover:bg-white/20
                     transition-all duration-300 flex flex-col items-center justify-center"
        >
          <WeatherIcon 
            type={item.icon as any} 
            size={28} 
            className={`${textColorClass} mb-1`} 
          />
          <p className={`text-sm font-medium ${textColorClass}`}>{item.label}</p>
          <p className={`text-md font-semibold ${textColorClass}`}>{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherDetails;