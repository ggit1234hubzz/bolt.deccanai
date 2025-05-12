import React from 'react';
import { WeatherData } from '../types/weather';
import { getWeatherAdvice } from '../utils/mockData';

interface WeatherCardProps {
  data: WeatherData;
  textColorClass: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data, textColorClass }) => {
  const advice = getWeatherAdvice(data);
  
  return (
    <div className="backdrop-blur-md bg-white/10 p-4 rounded-xl">
      <div className="flex items-center space-x-3">
        <span role="img" aria-label="Tip" className="text-xl">💡</span>
        <p className={`${textColorClass} font-medium`}>{advice}</p>
      </div>
    </div>
  );
};

export default WeatherCard;