import { WeatherData, Location } from '../types/weather';

export const mockLocations: Location[] = [
  { id: '1', name: 'New York', country: 'US' },
  { id: '2', name: 'London', country: 'GB' },
  { id: '3', name: 'Tokyo', country: 'JP' },
  { id: '4', name: 'Sydney', country: 'AU' },
  { id: '5', name: 'Paris', country: 'FR' },
];

export const getMockWeatherData = (locationId: string): WeatherData => {
  const now = Date.now();
  const day = 24 * 60 * 60 * 1000;
  
  // Define different weather patterns based on location
  const weatherPatterns: Record<string, WeatherData> = {
    '1': { // New York - Sunny
      current: {
        city: 'New York',
        country: 'US',
        temp: 24,
        feels_like: 26,
        temp_min: 22,
        temp_max: 28,
        humidity: 45,
        wind_speed: 3.5,
        wind_deg: 120,
        conditions: {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: 'sun'
        },
        uv_index: 7,
        visibility: 10000,
        pressure: 1015,
        sunrise: now - 21600000, // 6 hours ago
        sunset: now + 21600000,  // 6 hours from now
        updated_at: now,
      },
      forecast: [
        {
          date: now,
          temp_max: 28,
          temp_min: 22,
          conditions: { id: 800, main: 'Clear', description: 'clear sky', icon: 'sun' },
          pop: 0,
        },
        {
          date: now + day,
          temp_max: 27,
          temp_min: 21,
          conditions: { id: 800, main: 'Clear', description: 'clear sky', icon: 'sun' },
          pop: 0,
        },
        {
          date: now + 2 * day,
          temp_max: 29,
          temp_min: 23,
          conditions: { id: 801, main: 'Clouds', description: 'few clouds', icon: 'cloud-sun' },
          pop: 10,
        },
        {
          date: now + 3 * day,
          temp_max: 26,
          temp_min: 20,
          conditions: { id: 500, main: 'Rain', description: 'light rain', icon: 'cloud-drizzle' },
          pop: 40,
        },
        {
          date: now + 4 * day,
          temp_max: 24,
          temp_min: 19,
          conditions: { id: 802, main: 'Clouds', description: 'scattered clouds', icon: 'cloud' },
          pop: 20,
        },
      ],
    },
    '2': { // London - Rainy
      current: {
        city: 'London',
        country: 'GB',
        temp: 18,
        feels_like: 17,
        temp_min: 16,
        temp_max: 20,
        humidity: 75,
        wind_speed: 5.1,
        wind_deg: 230,
        conditions: {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: 'cloud-drizzle'
        },
        uv_index: 3,
        visibility: 7000,
        pressure: 1008,
        sunrise: now - 18000000,
        sunset: now + 25200000,
        updated_at: now,
      },
      forecast: [
        {
          date: now,
          temp_max: 20,
          temp_min: 16,
          conditions: { id: 500, main: 'Rain', description: 'light rain', icon: 'cloud-drizzle' },
          pop: 60,
        },
        {
          date: now + day,
          temp_max: 19,
          temp_min: 15,
          conditions: { id: 501, main: 'Rain', description: 'moderate rain', icon: 'cloud-rain' },
          pop: 80,
        },
        {
          date: now + 2 * day,
          temp_max: 18,
          temp_min: 14,
          conditions: { id: 500, main: 'Rain', description: 'light rain', icon: 'cloud-drizzle' },
          pop: 50,
        },
        {
          date: now + 3 * day,
          temp_max: 21,
          temp_min: 16,
          conditions: { id: 802, main: 'Clouds', description: 'scattered clouds', icon: 'cloud' },
          pop: 20,
        },
        {
          date: now + 4 * day,
          temp_max: 22,
          temp_min: 17,
          conditions: { id: 801, main: 'Clouds', description: 'few clouds', icon: 'cloud-sun' },
          pop: 10,
        },
      ],
    },
    '3': { // Tokyo - Cloudy
      current: {
        city: 'Tokyo',
        country: 'JP',
        temp: 26,
        feels_like: 28,
        temp_min: 24,
        temp_max: 29,
        humidity: 65,
        wind_speed: 2.5,
        wind_deg: 90,
        conditions: {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: 'cloud'
        },
        uv_index: 5,
        visibility: 9000,
        pressure: 1012,
        sunrise: now - 32400000,
        sunset: now + 14400000,
        updated_at: now,
      },
      forecast: [
        {
          date: now,
          temp_max: 29,
          temp_min: 24,
          conditions: { id: 803, main: 'Clouds', description: 'broken clouds', icon: 'cloud' },
          pop: 20,
        },
        {
          date: now + day,
          temp_max: 30,
          temp_min: 25,
          conditions: { id: 800, main: 'Clear', description: 'clear sky', icon: 'sun' },
          pop: 0,
        },
        {
          date: now + 2 * day,
          temp_max: 31,
          temp_min: 26,
          conditions: { id: 800, main: 'Clear', description: 'clear sky', icon: 'sun' },
          pop: 0,
        },
        {
          date: now + 3 * day,
          temp_max: 32,
          temp_min: 27,
          conditions: { id: 500, main: 'Rain', description: 'light rain', icon: 'cloud-drizzle' },
          pop: 30,
        },
        {
          date: now + 4 * day,
          temp_max: 30,
          temp_min: 25,
          conditions: { id: 501, main: 'Rain', description: 'moderate rain', icon: 'cloud-rain' },
          pop: 60,
        },
      ],
    },
    '4': { // Sydney - Partly Cloudy
      current: {
        city: 'Sydney',
        country: 'AU',
        temp: 22,
        feels_like: 23,
        temp_min: 19,
        temp_max: 24,
        humidity: 55,
        wind_speed: 4.2,
        wind_deg: 150,
        conditions: {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: 'cloud-sun'
        },
        uv_index: 8,
        visibility: 10000,
        pressure: 1020,
        sunrise: now - 10800000,
        sunset: now + 32400000,
        updated_at: now,
      },
      forecast: [
        {
          date: now,
          temp_max: 24,
          temp_min: 19,
          conditions: { id: 802, main: 'Clouds', description: 'scattered clouds', icon: 'cloud-sun' },
          pop: 10,
        },
        {
          date: now + day,
          temp_max: 25,
          temp_min: 20,
          conditions: { id: 800, main: 'Clear', description: 'clear sky', icon: 'sun' },
          pop: 0,
        },
        {
          date: now + 2 * day,
          temp_max: 26,
          temp_min: 21,
          conditions: { id: 800, main: 'Clear', description: 'clear sky', icon: 'sun' },
          pop: 0,
        },
        {
          date: now + 3 * day,
          temp_max: 23,
          temp_min: 18,
          conditions: { id: 500, main: 'Rain', description: 'light rain', icon: 'cloud-drizzle' },
          pop: 40,
        },
        {
          date: now + 4 * day,
          temp_max: 21,
          temp_min: 17,
          conditions: { id: 501, main: 'Rain', description: 'moderate rain', icon: 'cloud-rain' },
          pop: 60,
        },
      ],
    },
    '5': { // Paris - Thunderstorm
      current: {
        city: 'Paris',
        country: 'FR',
        temp: 21,
        feels_like: 22,
        temp_min: 18,
        temp_max: 24,
        humidity: 70,
        wind_speed: 6.5,
        wind_deg: 200,
        conditions: {
          id: 200,
          main: 'Thunderstorm',
          description: 'thunderstorm with light rain',
          icon: 'cloud-lightning'
        },
        uv_index: 2,
        visibility: 5000,
        pressure: 1005,
        sunrise: now - 14400000,
        sunset: now + 28800000,
        updated_at: now,
      },
      forecast: [
        {
          date: now,
          temp_max: 24,
          temp_min: 18,
          conditions: { id: 200, main: 'Thunderstorm', description: 'thunderstorm with light rain', icon: 'cloud-lightning' },
          pop: 80,
        },
        {
          date: now + day,
          temp_max: 22,
          temp_min: 17,
          conditions: { id: 501, main: 'Rain', description: 'moderate rain', icon: 'cloud-rain' },
          pop: 70,
        },
        {
          date: now + 2 * day,
          temp_max: 20,
          temp_min: 16,
          conditions: { id: 500, main: 'Rain', description: 'light rain', icon: 'cloud-drizzle' },
          pop: 50,
        },
        {
          date: now + 3 * day,
          temp_max: 23,
          temp_min: 18,
          conditions: { id: 802, main: 'Clouds', description: 'scattered clouds', icon: 'cloud' },
          pop: 20,
        },
        {
          date: now + 4 * day,
          temp_max: 25,
          temp_min: 19,
          conditions: { id: 801, main: 'Clouds', description: 'few clouds', icon: 'cloud-sun' },
          pop: 10,
        },
      ],
    },
  };

  return weatherPatterns[locationId] || weatherPatterns['1']; // Default to New York if location not found
};

// Helper function to get greeting based on time of day
export const getTimeBasedGreeting = (): string => {
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 12) {
    return 'Good morning';
  } else if (hour >= 12 && hour < 18) {
    return 'Good afternoon';
  } else {
    return 'Good evening';
  }
};

// Function to get weather advice based on conditions
export const getWeatherAdvice = (data: WeatherData): string => {
  const { temp, conditions } = data.current;
  const conditionMain = conditions.main.toLowerCase();
  
  if (conditionMain.includes('rain') || conditionMain.includes('drizzle')) {
    return "Don't forget your umbrella today!";
  } else if (conditionMain.includes('snow')) {
    return "Bundle up and wear warm boots!";
  } else if (conditionMain.includes('thunderstorm')) {
    return "Stay indoors if possible during storms.";
  } else if (conditionMain.includes('clear') && temp > 28) {
    return "It's hot out! Stay hydrated and use sunscreen.";
  } else if (conditionMain.includes('clear') && temp < 10) {
    return "It's chilly today, dress warmly!";
  } else if (data.current.uv_index > 7) {
    return "High UV today! Use sun protection.";
  } else if (data.current.wind_speed > 8) {
    return "It's quite windy today!";
  }
  
  return "Have a wonderful day!";
};

// Function to format temperature
export const formatTemp = (temp: number): string => {
  return `${Math.round(temp)}°`;
};

// Function to format date
export const formatDate = (timestamp: number, format: 'full' | 'day' | 'time' = 'full'): string => {
  const date = new Date(timestamp);
  
  if (format === 'day') {
    return new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date);
  } else if (format === 'time') {
    return new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).format(date);
  }
  
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

// Function to get background gradient based on weather and time
export const getWeatherGradient = (data: WeatherData): string => {
  const { conditions } = data.current;
  const conditionMain = conditions.main.toLowerCase();
  const hour = new Date().getHours();
  const isNight = hour < 6 || hour >= 18;
  
  if (isNight) {
    return 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800';
  }
  
  if (conditionMain.includes('clear')) {
    return 'bg-gradient-to-br from-blue-400 via-sky-400 to-blue-500';
  } else if (conditionMain.includes('cloud')) {
    return 'bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600';
  } else if (conditionMain.includes('rain') || conditionMain.includes('drizzle')) {
    return 'bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800';
  } else if (conditionMain.includes('thunderstorm')) {
    return 'bg-gradient-to-br from-slate-800 via-purple-900 to-slate-900';
  } else if (conditionMain.includes('snow')) {
    return 'bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400';
  } else if (conditionMain.includes('mist') || conditionMain.includes('fog')) {
    return 'bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500';
  }
  
  return 'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600';
};

// Get text color based on background
export const getTextColor = (data: WeatherData): string => {
  const { conditions } = data.current;
  const conditionMain = conditions.main.toLowerCase();
  const hour = new Date().getHours();
  const isNight = hour < 6 || hour >= 18;
  
  if (isNight || conditionMain.includes('thunderstorm') || 
      conditionMain.includes('rain') || conditionMain.includes('drizzle')) {
    return 'text-white';
  } else if (conditionMain.includes('snow') || conditionMain.includes('mist') || 
             conditionMain.includes('fog')) {
    return 'text-slate-800';
  }
  
  return 'text-white';
};