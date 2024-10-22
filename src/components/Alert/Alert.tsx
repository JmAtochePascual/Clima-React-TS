import style from './Alert.module.css'

type AlertProps = {
  message: string
}

const Alert = ({ message }: AlertProps) => {
  return (
    <p className={style.alert}>{message}</p>
  )
}

export default Alert