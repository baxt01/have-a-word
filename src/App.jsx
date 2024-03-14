import { useState } from 'react'
import Translate from './components/Translate.jsx'
import './App.css'
import './components/Header'

function App() {
  const [count, setCount] = useState(0)

  //Flowbite source paths
  module.exports = {

    content: [
        // ...
        'node_modules/flowbite-react/lib/esm/**/*.js'
    ]

}


  return (
    <>
      
      <Translate />
    </>
  )
}

export default App
