import { useState } from 'react'
import './App.css'

function App() {
  let[Counter,setCounter]=useState(15)// here we are not usig const here i am ausing let // here i am using hook useState to update the value of counter
//let Counter= 15; // this is wrong way to update the value of counter in react
const addValue=()=>{
  setCounter(Counter+1);  
  console.log("Add value Button Clicked", Math.random());
}
 const removeValue = () => {

  setCounter(Counter-1)
 }

  return (
    <>
  <h1> React Counter project</h1> 
  <h2> Counter Value is :{Counter}
    </h2>   
    <button onClick={addValue}>
    Add Value {Counter}
    </button>
    <br/>
    < button onClick={removeValue}>  Remove Value { Counter} </button>
    </>
  )
}

export default App
    