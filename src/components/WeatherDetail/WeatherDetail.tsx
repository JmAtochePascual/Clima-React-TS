import { TWeather } from '../../types/index';
import { formatTemperature } from '../../utils';
import styles from './WeatherDetail.module.css';

type TWeatherDetailProps = {
  weather: TWeather
}

const WeatherDetail = ({ weather }: TWeatherDetailProps) => {
  const { name, main } = weather;
  const { temp, temp_min, temp_max } = main;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Clima de: {(name)}
      </h1>

      <p className={styles.temp}>
        {formatTemperature(temp)}&deg;C
      </p>

      <div className={styles.tem_container}>
        <p className={styles.temp_MinMax}>
          Min: <span>{formatTemperature(temp_min)}&deg;C</span>
        </p>

        <p className={styles.temp_MinMax}>
          Min: <span>{formatTemperature(temp_max)}&deg;C</span>
        </p>
      </div>
    </div>
  )
}

export default WeatherDetail