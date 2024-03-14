import { useState } from 'react'
import Translate from './components/Translate.jsx'
import './App.css'
import './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Translate />
      <Header />
    </>
  )
}

export default App
