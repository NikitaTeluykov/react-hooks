import {useAlert} from "./AlertContext";

export default function Alert() {
  const alert = useAlert()

  if (!alert.visible) return null
  return (
    <div onClick={alert.hide} className={'alert alert-danger'}>
      <p>{alert.text}</p>
    </div>
  )
}