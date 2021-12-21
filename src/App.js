import {useEffect, useState, useMemo, useCallback, createContext} from "react";

function useLogger(value) {
  useEffect(() => {
    console.log( 'value changed', value)
  }, [value])
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const onChange = e => {
    setValue(e.target.value)
  }

  const clear = () => setValue('')

  return {
    bind: {value, onChange},
    value,
    clear
  }
}

function App() {
  const input = useInput('')
  const lastName = useInput('')

  return (
    <div>
      <input type="text" {...input.bind}/>
      <input type="text" {...lastName.bind}/>

      <button className={'btn btn-warning'} onClick={()=> input.clear()}>Очистить</button>

      <h1>{input.value}</h1>
    </div>
  );
}

export default App;
