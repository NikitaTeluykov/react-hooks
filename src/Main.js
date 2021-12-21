import {useAlert} from "./alert/AlertContext";

export default function Main() {
  const alert = useAlert()

  return (
    <>
      <h1>Привет в примере с Context</h1>
      <button className="btn btn-success" onClick={()=> alert.show("ofiwjeofjwio")}>Показать alert</button>
    </>
  )
}