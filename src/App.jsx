import './App.css'
import Counter from './Counter.jsx'
import Batsman from './Batsman.jsx'

function App() {

  function handelClick(){
    alert("I am clicked")
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
      <h3>Vite + React</h3>
      <button className='btn' onClick={handelClick}>Click Me</button>
      <button className='btn' onClick={() => {alert("I am Moeen")}}>Click Me</button>
      </div>
      

      <Counter></Counter>
      <Batsman></Batsman>
    </>
  )
}

export default App
