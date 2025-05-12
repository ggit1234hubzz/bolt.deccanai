import React, { useState, useEffect } from 'react';
import CurrentWeather from './components/CurrentWeather';
import ForecastSection from './components/ForecastSection';
import WeatherDetails from './components/WeatherDetails';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import LocationSelector from './components/LocationSelector';
import { 
  getMockWeatherData, 
  mockLocations, 
  getWeatherGradient,
  getTextColor
} from './utils/mockData';
import { WeatherData } from './types/weather';

function App() {
  const [selectedLocation, setSelectedLocation] = useState('1');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call with a timeout
    const timer = setTimeout(() => {
      const data = getMockWeatherData(selectedLocation);
      setWeatherData(data);
      setIsLoading(false);
      
      // Update page title
      document.title = `${data.current.temp}° | ${data.current.city} Weather`;
    }, 500);
    
    return () => clearTimeout(timer);
  }, [selectedLocation]);

  if (isLoading || !weatherData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
        <div className="animate-pulse text-white text-xl">Loading weather data...</div>
      </div>
    );
  }

  const bgGradient = getWeatherGradient(weatherData);
  const textColorClass = getTextColor(weatherData);

  return (
    <div className={`min-h-screen ${bgGradient} text-white transition-all duration-700`}>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Header 
          data={weatherData.current}
          textColorClass={textColorClass}
        />
        
        <LocationSelector 
          locations={mockLocations}
          selectedLocation={selectedLocation}
          onLocationChange={setSelectedLocation}
          textColorClass={textColorClass}
        />
        
        <div className="mt-8">
          <CurrentWeather 
            data={weatherData.current}
            textColorClass={textColorClass}
          />
        </div>
        
        <div className="mt-8">
          <WeatherCard 
            data={weatherData}
            textColorClass={textColorClass}
          />
        </div>
        
        <ForecastSection 
          forecast={weatherData.forecast}
          textColorClass={textColorClass}
        />
        
        <div className="mt-8">
          <h2 className={`text-xl font-semibold mb-4 ${textColorClass}`}>Weather Details</h2>
          <WeatherDetails 
            data={weatherData.current}
            textColorClass={textColorClass}
          />
        </div>
      </div>
    </div>
  );
}

export default App;