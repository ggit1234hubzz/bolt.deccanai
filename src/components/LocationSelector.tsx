import React from 'react';
import { Location } from '../types/weather';

interface LocationSelectorProps {
  locations: Location[];
  selectedLocation: string;
  onLocationChange: (id: string) => void;
  textColorClass: string;
}

const LocationSelector: React.FC<LocationSelectorProps> = ({
  locations,
  selectedLocation,
  onLocationChange,
  textColorClass
}) => {
  return (
    <div className="flex items-center space-x-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
      {locations.map((location) => (
        <button
          key={location.id}
          className={`px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap
                     ${location.id === selectedLocation 
                        ? `bg-white/30 ${textColorClass}` 
                        : `bg-white/10 ${textColorClass} opacity-70 hover:opacity-100`}`}
          onClick={() => onLocationChange(location.id)}
        >
          {location.name}, {location.country}
        </button>
      ))}
    </div>
  );
};

export default LocationSelector;