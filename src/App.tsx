import styles from './app.module.css'
import Form from './components/Form/Form'
import { useWeather } from './hooks/useWeather'

function App() {
  const { fetchWeather } = useWeather();

  return (
    <>
      <h1 className={styles.title}>Buscador clima</h1>

      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />

        <div className="2">2</div>
      </div>
    </>
  )
}

export default App
