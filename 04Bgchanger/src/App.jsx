import { useState } from "react"

function App() {
  const [Color, setColor] = useState("White")

  return (
    <>
    <h1 className="fixed inset-0 flex items-center justify-center">
  <span className="gradient-glow">
    Background Changer
  </span>
</h1>



      <div className="w-full h-screen" style={{ backgroundColor: Color }}>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-amber-50 px-2 py-1 rounded-2xl">
          <button onClick={()=>setColor("red")}
         className="outline-none px-6 py-2 rounded-full text-white font-semibold
  transition-all duration-300 ease-in-out shadow-xl hover:scale-110
  hover:shadow-2xl active:scale-95
  active:shadow-[0_0_25px_currentColor] focus:ring-4 focus:ring-white"
  style={{ backgroundColor: "Red" }}
          >Red

          </button>
          <button
          onClick={()=>setColor("yellow")}
          className="outline-none px-6 py-2 rounded-full text-white font-semibold
  transition-all duration-300 ease-in-out shadow-xl hover:scale-110
  hover:shadow-2xl active:scale-95
  active:shadow-[0_0_25px_currentColor] focus:ring-4 focus:ring-white"
  style={{ backgroundColor: "yellow" }}
          
          >yellow

          </button>
          <button
          onClick={()=>setColor("grey")}
          className="outline-none px-6 py-2 rounded-full text-white font-semibold
  transition-all duration-300 ease-in-out shadow-xl hover:scale-110
  hover:shadow-2xl active:scale-95
  active:shadow-[0_0_25px_currentColor] focus:ring-4 focus:ring-white"
  style={{ backgroundColor: "grey" }}
          >Grey
          </button>

          <button
          onClick={()=>setColor("GreenR")}
  className="outline-none px-6 py-2 rounded-full text-white font-semibold
  transition-all duration-300 ease-in-out shadow-xl hover:scale-110
  hover:shadow-2xl active:scale-95
  active:shadow-[0_0_25px_currentColor] focus:ring-4 focus:ring-white"
  style={{ backgroundColor: "green" }}
>
  Green
</button>

<button 
onClick={()=>setColor("skyblue")}
  className="outline-none px-6 py-2 rounded-full text-white font-semibold
  transition-all duration-300 ease-in-out shadow-xl hover:scale-110
  hover:shadow-2xl active:scale-95
  active:shadow-[0_0_25px_currentColor] focus:ring-4 focus:ring-white"
  style={{ backgroundColor: "skyblue" }}
>
  Sky Blue
</button>

<button
onClick={()=>setColor("pink")}
  className="outline-none px-6 py-2 rounded-full text-white font-semibold
  transition-all duration-300 ease-in-out shadow-xl hover:scale-110
  hover:shadow-2xl active:scale-95
  active:shadow-[0_0_25px_currentColor] focus:ring-4 focus:ring-white"
  style={{ backgroundColor: "pink" }}
>
  Pink
</button>

        </div>
      </div>
    </>
  )
}

export default App
