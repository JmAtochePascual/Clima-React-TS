import styles from './App.module.css'
import Form from './components/Form/Form'
import WeatherDetail from './components/WeatherDetail/WeatherDetail';
import { useWeather } from './hook/useWeather';

function App() {
  const { weather, hasWeather, fecthWeather } = useWeather();

  return (
    <>
      <h1 className={styles.title}>Buscador de clima</h1>

      <main className={styles.container}>
        <div className="">
          <Form
            fecthWeather={fecthWeather}
          />
        </div>

        {hasWeather && <WeatherDetail weather={weather} />}
      </main>
    </>
  )
}

export default App
