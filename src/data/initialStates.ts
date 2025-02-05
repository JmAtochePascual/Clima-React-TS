import { TSearch, TWeather } from "../types"

export const INITIAL_STATE: TSearch = {
  city: '',
  country: ''
}

export const INITIAL_WEATHER: TWeather = {
  name: '',
  main: {
    temp: 0,
    temp_min: 0,
    temp_max: 0
  }
}