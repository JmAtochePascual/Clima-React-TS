import { z } from "zod"
import { WeatherSchema } from "../schema"

export type TCountry = {
  code: string,
  name: string
}

export type TSearch = {
  city: string,
  country: string
}

export type TWeather = z.infer<typeof WeatherSchema>