import React from 'react';
import { ForecastDay as ForecastDayType } from '../types/weather';
import ForecastDay from './ForecastDay';

interface ForecastSectionProps {
  forecast: ForecastDayType[];
  textColorClass: string;
}

const ForecastSection: React.FC<ForecastSectionProps> = ({ forecast, textColorClass }) => {
  return (
    <div className="mt-8">
      <h2 className={`text-xl font-semibold mb-4 ${textColorClass}`}>5-Day Forecast</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {forecast.map((day, index) => (
          <ForecastDay 
            key={index} 
            data={day} 
            isToday={index === 0}
            textColorClass={textColorClass}
          />
        ))}
      </div>
    </div>
  );
};

export default ForecastSection;