import styles from './App.module.css'
import Form from './components/Form/Form'

function App() {

  return (
    <>
      <h1 className={styles.title}>Buscador de clima</h1>

      <main className={styles.container}>
        <div className="">
          <Form />
        </div>

        <div className="">2</div>
      </main>
    </>
  )
}

export default App
