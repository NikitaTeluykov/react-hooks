import {useEffect, useState, useRef} from "react";

function App() {
    // const [renderCount, setRenderCount] = useState(1)
    const [value,setValue] = useState('')
    const renderCount = useRef(1)
    const inputRef = useRef(null)
    const prevValue = useRef('')

    useEffect(() => {
        renderCount.current++

        console.log(inputRef)
    })

    useEffect(()=> {
        console.log('value', value)
        prevValue.current = value
    }, [value])

    const focus = () => inputRef.current.focus()

    return (
        <div>
            <h1>Количество рендеров: {renderCount.current}</h1>
            <h1>Количество рендеров: {prevValue.current}</h1>

            <input ref={inputRef} type="text" value={value} onChange={(e) => setValue(e.target.value)}/>

            <button onClick={focus}>Фокус</button>
        </div>

    );
}

export default App;
