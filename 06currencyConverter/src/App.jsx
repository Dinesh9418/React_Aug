import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'

function App() {

  return (
    <>
      <h2 className='text-3xl bg-red-500'>Currency Converter</h2>
      <InputBox />
    </>
  )
}

export default App
