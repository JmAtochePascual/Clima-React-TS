import styles from './Alert.module.css'

type TAlertProps = {
  alert: string
}

const Alert = ({ alert }: TAlertProps) => {
  return (
    <div
      role="alert"
      className={styles.alert}>
      {alert}
    </div>
  )
}

export default Alert