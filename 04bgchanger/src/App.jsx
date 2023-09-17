import { useState } from 'react'

function App() {
  const [color, setColor] = useState("Olive")

  const colorChange = (e) => {
    setColor(e)
  }
  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-xl'>
          <button className='outline-none px-4 rounded-lg shadow-lg' style={{ backgroundColor: "red" }} onClick={() => colorChange("red")}>Red</button>
          <button className='outline-none px-4 rounded-lg shadow-lg' style={{ backgroundColor: "orange" }} onClick={() => colorChange("orange")}>Orange</button>
          <button className='outline-none px-4 rounded-lg shadow-lg' style={{ backgroundColor: "green" }} onClick={() => colorChange("green")}>Green</button>
          <button className='outline-none px-4 rounded-lg shadow-lg text-white' style={{ backgroundColor: "black" }} onClick={() => colorChange("black")}>Black</button>
          <button className='outline-none px-4 rounded-lg shadow-lg' style={{ backgroundColor: "white" }} onClick={() => setColor("white")}>White</button>
        </div>
      </div>
    </div>
  )
}

export default App
