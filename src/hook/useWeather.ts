import axios from "axios";
import { TSearch, TWeather } from "../types";
import { WeatherSchema } from "../schema";
import { useState } from "react";
import { INITIAL_WEATHER } from "../data/initialStates";

export const useWeather = () => {
  const [weather, setWeather] = useState<TWeather>(INITIAL_WEATHER);
  const hasWeather = weather.name !== '';

  const fecthWeather = async (search: TSearch) => {
    const { city, country } = search;
    const API_KEY = import.meta.env.VITE_API_KEY;
    const GEO_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=${API_KEY}`;

    try {
      const { data } = await axios(GEO_URL);
      const { lat, lon } = data[0];
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

      const { data: response } = await axios(API_URL);
      const result = WeatherSchema.safeParse(response);

      if (result.success) {
        setWeather(result.data);
      }

    } catch (error) {
      console.error(error);
    }
  }

  return {
    weather,
    hasWeather,
    fecthWeather,
  }
}