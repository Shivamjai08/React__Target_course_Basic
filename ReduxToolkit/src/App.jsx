import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="text-black animate-pulse text-3xl">
      Redux Tooolkit
     </h1>
<AddTodo/>
<Todos/>

    </>
  )
}

export default App
