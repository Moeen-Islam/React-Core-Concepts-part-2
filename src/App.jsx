import './App.css'
import Counter from './Counter.jsx'
import Batsman from './Batsman.jsx'
import Users from './Users.jsx'
import { Suspense } from 'react'
import Friends from './Friends.jsx'



const fetchUser = fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())

const fetchFriend = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}


function App() {
  const friendsPromise = fetchFriend();

  function handelClick(){
    alert("I am clicked")
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
      <h3>Vite + React</h3>
      <Suspense fallback = {<h3>Loading......</h3>}>
        <Users fetchUser = {fetchUser}></Users>
      </Suspense>

      <Suspense fallback = {<h3>Loading......</h3>}>
        <Friends friendsPromise = {friendsPromise}></Friends>
      </Suspense>

      
      <button className='btn' onClick={handelClick}>Click Me</button>
      <button className='btn' onClick={() => {alert("I am Moeen")}}>Click Me</button>
      </div>
      

      <Counter></Counter>
      <Batsman></Batsman>
      
    </>
  )
}

export default App
