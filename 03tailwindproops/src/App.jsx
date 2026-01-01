import { useState } from 'react'
import './App.css'
import Card from './components/card.jsx'  
function App() {
const [count, setCount] = useState(0)
let myObj={
  username:"Shivam",
  age: 21


}
  return (
    <>
      
      <h1 className="bg-amber-950 text-white" >Chai Or Code</h1>

   <Card />
   <Card channel="Chaiaurcode" someObje={myObj}/>

    
</>
  )
}

export default App
