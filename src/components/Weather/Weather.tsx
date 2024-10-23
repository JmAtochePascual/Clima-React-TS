import { formatTemperature } from "../../helpers"
import { TWeather } from "../../hooks/useWeather"
import style from "./Weather.module.css"

type TWeatherProps = {
  weather: TWeather
}

const Weather = ({ weather }: TWeatherProps) => {
  const { name, main: { temp, temp_min, temp_max } } = weather

  return (
    <div className={style.weather__container}>
      <h2 className={style.weather__title}>{name}</h2>
      <p className={style.weather__subtitle}> {formatTemperature(temp)} °C</p>
      <div className={style.weather__content}>
        <p>MIN: <span>{formatTemperature(temp_min)} °C</span></p>
        <p>MAX: <span>{formatTemperature(temp_max)} °C</span></p>
      </div>
    </div>
  )
}

export default Weather