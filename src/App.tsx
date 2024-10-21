import styles from './app.module.css'
import Form from './components/Form/Form'

function App() {

  return (
    <>
      <h1 className={styles.title}>Buscador clima</h1>

      <div className={styles.container}>
        <Form />

        <div className="2">2</div>
      </div>
    </>
  )
}

export default App
