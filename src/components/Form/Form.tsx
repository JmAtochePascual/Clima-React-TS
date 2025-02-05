import { ChangeEvent, FormEvent, useState } from 'react'
import { countries } from '../../data/countries'
import styles from './Form.module.css'
import { TSearch } from '../../types'

const INITIAL_STATE: TSearch = {
  city: '',
  country: ''
}

const Form = () => {
  const [search, setSearch] = useState<TSearch>(INITIAL_STATE);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSearch({ ...search, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (Object.values(search).includes('')) {
      return
    }

    console.log(search)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}>

      <div className={styles.campo}>
        <label
          htmlFor="city"
          className={styles.label}>
          Ciudad:
        </label>

        <input
          id='city'
          name='city'
          type="text"
          placeholder='Ej. Buenos Aires'
          value={search.city}
          onChange={handleChange}
          className={styles.input} />
      </div>

      <div className={styles.campo}>
        <label
          htmlFor="country"
          className={styles.label}>
          Ciudad:
        </label>

        <select
          name="country"
          id="country"
          value={search.country}
          onChange={handleChange}
          className={styles.select}>
          <option value="" className={styles.option}>-- Seleccione un país --</option>
          {
            countries.map(country => (
              <option
                key={country.code}
                value={country.code}
                className={styles.option}>
                {country.name}
              </option>
            ))
          }
        </select>
      </div>

      <button
        className={styles.button}>
        Buscar
      </button>
    </form>
  )
}

export default Form