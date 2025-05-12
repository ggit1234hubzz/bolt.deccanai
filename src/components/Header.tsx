import React from 'react';
import { CurrentWeather } from '../types/weather';
import { getTimeBasedGreeting, getWeatherAdvice, formatDate } from '../utils/mockData';

interface HeaderProps {
  data: CurrentWeather;
  textColorClass: string;
}

const Header: React.FC<HeaderProps> = ({ data, textColorClass }) => {
  const greeting = getTimeBasedGreeting();
  
  return (
    <header className="mb-6">
      <h1 className={`text-3xl font-bold ${textColorClass}`}>
        {greeting}
      </h1>
      <div className={`flex flex-col sm:flex-row sm:items-center justify-between mt-1 ${textColorClass} opacity-90`}>
        <p className="text-lg">
          {data.city}, {data.country}
        </p>
        <p className="text-sm">
          {formatDate(data.updated_at)}
        </p>
      </div>
    </header>
  );
};

export default Header;