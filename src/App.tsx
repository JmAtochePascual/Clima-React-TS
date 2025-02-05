import styles from './App.module.css'
import Form from './components/Form/Form'
import Spinner from './components/Spinner/Spinner';
import WeatherDetail from './components/WeatherDetail/WeatherDetail';
import { useWeather } from './hook/useWeather';

function App() {
  const { weather, loading, hasWeather, fecthWeather } = useWeather();

  return (
    <>
      <h1 className={styles.title}>Buscador de clima</h1>

      <main className={styles.container}>
        <div className="">
          <Form
            fecthWeather={fecthWeather}
          />
        </div>

        {
          loading
            ? <Spinner />
            : hasWeather && <WeatherDetail weather={weather} />
        }

      </main>
    </>
  )
}

export default App
