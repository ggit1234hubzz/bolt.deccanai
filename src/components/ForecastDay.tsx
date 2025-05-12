import React from 'react';
import { ForecastDay as ForecastDayType } from '../types/weather';
import WeatherIcon from './WeatherIcon';
import { formatDate, formatTemp } from '../utils/mockData';

interface ForecastDayProps {
  data: ForecastDayType;
  isToday?: boolean;
  textColorClass: string;
}

const ForecastDay: React.FC<ForecastDayProps> = ({ 
  data, 
  isToday = false,
  textColorClass 
}) => {
  const iconType = data.conditions.icon as any;
  
  return (
    <div className={`p-3 rounded-xl backdrop-blur-md bg-white/10 
                   flex flex-col items-center hover:bg-white/20 
                   transition-all duration-300`}>
      <p className={`text-sm font-medium ${textColorClass}`}>
        {isToday ? 'Today' : formatDate(data.date, 'day')}
      </p>
      
      <div className="my-2">
        <WeatherIcon 
          type={iconType} 
          size={32} 
          className={textColorClass}
        />
      </div>
      
      <div className="flex flex-col items-center">
        <span className={`text-base font-semibold ${textColorClass}`}>
          {formatTemp(data.temp_max)}
        </span>
        <span className={`text-xs ${textColorClass} opacity-70`}>
          {formatTemp(data.temp_min)}
        </span>
      </div>
      
      {data.pop > 0 && (
        <div className={`flex items-center mt-1 ${textColorClass} opacity-80`}>
          <WeatherIcon 
            type="cloud-drizzle" 
            size={14} 
            className={textColorClass}
          />
          <span className="text-xs ml-1">{data.pop}%</span>
        </div>
      )}
    </div>
  );
};

export default ForecastDay;