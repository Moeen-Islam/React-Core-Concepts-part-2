import { useState } from "react"

export default function Batsman(){
    const [run, setRun] = useState(0)
    const [six, setSix] = useState(0)

    const handelRun = () => {
        const updateRun = run + 1
        setRun(updateRun)
    }
    const handelsix = () => {
        const updateRun = run + 6
        const updateSix = six + 1
        setSix(updateSix)
        setRun(updateRun)
    }
    const handelFour = () => {
        const updateRun = run + 4
        setRun(updateRun)
    }
    return(
        <div>
            <h3>Player : Bangladesh</h3>
            <p>Six : {six}</p>
            {
                run > 50 && <p>your Score 50</p>
            }
            <h3>Score : {run}</h3>
            <button className="btn" onClick={handelRun}>Singles</button>
            <button className="btn" onClick={handelFour}>4</button>
            <button className="btn" onClick={handelsix}>6</button>
        </div>
    )
}