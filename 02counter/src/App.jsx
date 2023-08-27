import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    console.log("value added", count)
    if (count < 20) {
      setCount(count + 1);
    }
  }

  const removeValue = () => {
    console.log("value removed", count)
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(count);
    }
  }

  return (
    <>
      <h2>Counter code</h2>
      <h3>Counter value : {count} </h3>

      <button onClick={addValue}> Add value</button>
      <br />
      <button onClick={removeValue}> Remove value</button>

    </>
  )
}

export default App
