import { ChangeEvent, FormEvent, useState } from 'react'
import { countries } from '../../data/countries'
import styles from './Form.module.css'
import { TSearch } from '../../types'
import Alert from '../Alert/Alert'

const Form = () => {
  const [search, setSearch] = useState<TSearch>({
    city: '',
    country: ''
  })
  const [alert, setAlert] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSearch({
      ...search,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (Object.values(search).includes('')) {
      setAlert('Todos los campos son obligatorios')
      return
    }

    console.log(search)
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