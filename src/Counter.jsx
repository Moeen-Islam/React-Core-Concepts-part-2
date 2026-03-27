import { useState } from "react"

export default function Counter(){

    const [count, setCount] = useState(0);
    const handelAdd = () => {
        const newCount  = count + 1
        setCount(newCount)
    }
    const handelDecrese = () => {
        const newCount  = count - 1
        setCount(newCount)
    }
    const reset = () => {
        const newCount = 0
        setCount(newCount)
    }

    const counterStyle = {
        border: '1px solid white',
        width: '300px',
        margin: '10px auto',
        padding: '20px',
        textAlign: 'center'


    }
    return(
        <div style={counterStyle}>
            <h3>Count : {count}</h3>
            <button className="btn" onClick={handelAdd}>Add</button>
            <button className="btn" onClick={handelDecrese}>decrese</button>
            <button className="btn" onClick={reset}>Reset</button>
        </div>
    )
}