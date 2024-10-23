import './app.css'
import Alert from './components/Alert/Alert';
import Form from './components/Form/Form'
import Spinner from './components/Spinner/Spinner';
import Weather from './components/Weather/Weather';
import { useWeather } from './hooks/useWeather'

function App() {
  const { weather, spinner, notFound, fetchWeather } = useWeather();

  return (
    <>
      <h1 className="title">Buscador clima</h1>

      <div className="container">

        <Form fetchWeather={fetchWeather} />

        {spinner && <Spinner />}

        {weather.name && <Weather weather={weather} />}

        {notFound && <Alert message="Ciudad no encontrada" />}

      </div>
    </>
  )
}

export default App
