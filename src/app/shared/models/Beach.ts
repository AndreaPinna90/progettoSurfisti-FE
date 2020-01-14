import {CurrentWeather} from './Meteo';

export interface Beach {
  id?: number;
  name?: string;
  city?: string;
  province?: string;
  latitude?: number;
  longitude?: number;
  orientation?: string;
  park?: boolean;
  food_service?: boolean;
  lifeguard?: boolean;
  dogs_allowed?: boolean;
  summer_crowding?: boolean;
  photo?: string;
  photo1?: string;
  photo2?: string;
  photo3?: string;
  photo4?: string;
  weatherIcon?: string;
  weather: CurrentWeather;
  traffic?: number;
  wind_speed?: number;
  wind_direction?: string;
}

export const Orientation = {
  Nord: 'Nord',
  Sud: 'Sud',
  Ovest: 'Ovest',
  Est: 'Est',
};
