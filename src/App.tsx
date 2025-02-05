import styles from './App.module.css'
import Alert from './components/Alert/Alert';
import Form from './components/Form/Form'
import Spinner from './components/Spinner/Spinner';
import WeatherDetail from './components/WeatherDetail/WeatherDetail';
import { useWeather } from './hook/useWeather';

function App() {
  const { weather, loading, notFound, hasWeather, fecthWeather } = useWeather();

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
            : hasWeather
              ? <WeatherDetail weather={weather} />
              : notFound && <Alert alert="No se encontraron resultados" />
        }
      </main>

      <footer className={styles.footer}>
        <p className={styles.footer_text}> <span className={styles.footer_span}>JMCode</span> | ©2025 - Transformando ideas en realidad.</p>
      </footer>
    </>
  )
}

export default App
