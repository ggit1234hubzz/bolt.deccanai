import React from 'react';
import { CurrentWeather as CurrentWeatherType } from '../types/weather';
import WeatherIcon from './WeatherIcon';
import { formatTemp } from '../utils/mockData';

interface CurrentWeatherProps {
  data: CurrentWeatherType;
  className?: string;
  textColorClass: string;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ 
  data, 
  className = '',
  textColorClass 
}) => {
  const iconType = data.conditions.icon as any;
  
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative">
        <WeatherIcon 
          type={iconType} 
          size={96}
          className={`${textColorClass} animate-float`} 
          animate={true}
        />
      </div>
      
      <div className="mt-4 text-center">
        <h1 className={`text-6xl font-bold ${textColorClass}`}>
          {formatTemp(data.temp)}
        </h1>
        <p className={`text-xl mt-2 capitalize ${textColorClass}`}>
          {data.conditions.description}
        </p>
        <p className={`text-sm mt-1 ${textColorClass} opacity-90`}>
          Feels like {formatTemp(data.feels_like)}
        </p>
        <div className={`flex justify-center mt-2 ${textColorClass} opacity-80`}>
          <span className="flex items-center">
            <span className="font-semibold">H: {formatTemp(data.temp_max)}</span>
            <span className="mx-2">|</span>
            <span className="font-semibold">L: {formatTemp(data.temp_min)}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;