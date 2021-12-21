import {useEffect, useState, useMemo} from "react";

function complexCompute(num) {
  let i = 0
  while(i < 1000000000) i++

  return num*2
}

function App() {
  const [number, setNumber] = useState(42)
  const [colored, setColored] = useState(false)

  const computed = useMemo(()=>{
    return complexCompute(number)
  }, [number])

  const styles = useMemo(() => ({color: colored ? 'darkred' : 'black'}), [colored])

  useEffect(()=>{
    console.log('styles changed')
  }, [styles])

  return (
    <>
      <h1 style={styles}>Вычисляемое свойство: {computed}</h1>

      <button onClick={()=>setNumber(prev=> prev+1)}>Добавить</button>
      <button onClick={()=>setNumber(prev=> prev-1)}>Убрать</button>
      <button onClick={()=>setColored(prev => !prev)}>Изменить</button>

    </>

  );
}

export default App;
