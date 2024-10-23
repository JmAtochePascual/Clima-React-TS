import styles from './app.module.css'
import Form from './components/Form/Form'
import Spinner from './components/Spinner/Spinner';
import Weather from './components/Weather/Weather';
import { useWeather } from './hooks/useWeather'

function App() {
  const { weather, spinner, fetchWeather } = useWeather();

  return (
    <>
      <h1 className={styles.title}>Buscador clima</h1>

      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />

        {spinner && <Spinner />}

        {weather.name && <Weather weather={weather} />}

      </div>
    </>
  )
}

export default App
