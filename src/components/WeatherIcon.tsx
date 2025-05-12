import React from 'react';
import {
  Sun,
  Cloud,
  CloudDrizzle,
  CloudRain,
  CloudLightning,
  CloudSnow,
  CloudFog,
  CloudSun,
  Wind,
  Droplets,
  Snowflake,
  Gauge,
  Sunrise,
  Sunset,
  EyeIcon,
  AlertTriangle
} from 'lucide-react';

type IconType = 
  | 'sun'
  | 'cloud'
  | 'cloud-drizzle'
  | 'cloud-rain'
  | 'cloud-lightning'
  | 'cloud-snow'
  | 'cloud-fog'
  | 'cloud-sun'
  | 'wind'
  | 'humidity'
  | 'snowflake'
  | 'pressure'
  | 'sunrise'
  | 'sunset'
  | 'visibility'
  | 'uv-index';

interface WeatherIconProps {
  type: IconType;
  size?: number;
  className?: string;
  animate?: boolean;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ 
  type, 
  size = 24, 
  className = '',
  animate = false
}) => {
  const animationClass = animate ? 'animate-weather-icon' : '';
  const combinedClassName = `${className} ${animationClass}`;
  
  const icons: Record<IconType, React.ReactNode> = {
    'sun': <Sun size={size} className={combinedClassName} />,
    'cloud': <Cloud size={size} className={combinedClassName} />,
    'cloud-drizzle': <CloudDrizzle size={size} className={combinedClassName} />,
    'cloud-rain': <CloudRain size={size} className={combinedClassName} />,
    'cloud-lightning': <CloudLightning size={size} className={combinedClassName} />,
    'cloud-snow': <CloudSnow size={size} className={combinedClassName} />,
    'cloud-fog': <CloudFog size={size} className={combinedClassName} />,
    'cloud-sun': <CloudSun size={size} className={combinedClassName} />,
    'wind': <Wind size={size} className={combinedClassName} />,
    'humidity': <Droplets size={size} className={combinedClassName} />,
    'snowflake': <Snowflake size={size} className={combinedClassName} />,
    'pressure': <Gauge size={size} className={combinedClassName} />,
    'sunrise': <Sunrise size={size} className={combinedClassName} />,
    'sunset': <Sunset size={size} className={combinedClassName} />,
    'visibility': <EyeIcon size={size} className={combinedClassName} />,
    'uv-index': <AlertTriangle size={size} className={combinedClassName} />
  };
  
  return <>{icons[type] || null}</>;
};

export default WeatherIcon;