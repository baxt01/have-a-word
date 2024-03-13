import { useState } from 'react'
import Translate from './components/Translate.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Translate />
    </>
  )
}

export default App
