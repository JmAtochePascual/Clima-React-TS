import { ChangeEvent, FormEvent, useState } from 'react'
import { countries } from '../../data/countries'
import styles from './Form.module.css'
import { TSearch } from '../../types'
import Alert from '../Alert/Alert'

type FormProps = {
  fetchWeather: (search: TSearch) => Promise<void>
}

const Form = ({ fetchWeather }: FormProps) => {
  const [search, setSearch] = useState<TSearch>({ city: '', country: '' })
  const [alert, setAlert] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSearch({
      ...search,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Validar campos vacíos en el formulario
    if (Object.values(search).includes('')) {
      setAlert('Todos los campos son obligatorios')
      return
    }

    // Consultar la API del clima
    fetchWeather(search);

    // Limpiar formulario
    setSearch({ city: '', country: '' });

    // Limpiar alerta
    setAlert('');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}>

      {alert && <Alert message={alert} />}

      <div className={styles.form__campo}>
        <label
          htmlFor="city"
          className={styles.form__label}>
          Ciudad
        </label>

        <input
          type="text"
          name="city"
          id="city"
          placeholder="Ciudad"
          value={search.city}
          onChange={handleChange}
          className={styles.form__input} />
      </div>

      <div className={styles.form__campo}>
        <label
          htmlFor="country"
          className="">
          País
        </label>

        <select
          name="country"
          id="country"
          value={search.country}
          onChange={handleChange}
          className={styles.form__select}>
          <option value="">-- Seleccione un país --</option>
          {
            countries.map((country) => (
              <option
                key={country.code}
                value={country.code}>
                {country.name}
              </option>
            ))
          }
        </select>
      </div>

      <input
        type="submit"
        value="Buscar clima"
        className={styles.form__buttom} />
    </form>
  )
}

export default Form