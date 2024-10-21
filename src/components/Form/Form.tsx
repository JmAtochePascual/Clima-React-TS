import { countries } from '../../data/countries'
import styles from './Form.module.css'

const Form = () => {
  return (
    <form className={styles.form}>
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