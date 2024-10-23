import axios from "axios"
import { z } from "zod"
import { TSearch } from "../types"
import { useState } from "react"

// Define el esquema de validación
const weatherchSchema = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    temp_min: z.number(),
    temp_max: z.number(),
  }),
})

export type TWeather = z.infer<typeof weatherchSchema>

export const useWeather = () => {
  const [weather, setWeather] = useState<TWeather>({
    name: "",
    main: {
      temp: 0,
      temp_min: 0,
      temp_max: 0,
    },
  })
  const [spinner, setSpinner] = useState(false);

  const fetchWeather = async (search: TSearch) => {
    const { city, country } = search;
    const API_KEY = import.meta.env.VITE_API_KEY;

    setSpinner(true);

    try {
      const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=${API_KEY}`

      const response = await axios.get(geoURL)
      const { lat, lon } = response.data[0];

      const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

      const { data } = await axios.get(weatherURL);
      const result = weatherchSchema.safeParse(data);

      if (result.success) {
        setWeather(result.data);
      }

    } catch (error) {
      console.log(error)
    } finally {
      setSpinner(false);
    }
  }

  return {
    weather,
    spinner,
    fetchWeather
  }

}