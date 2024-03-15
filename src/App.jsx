import { useState } from 'react'
import Translate from './components/Translate.jsx'
import './App.css'
import Header from './components/Header'

export default function App() {
  const [count, setCount] = useState(0)
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dictionary from "./component/Dictionary";

export default function App() {
  return (
    <>
      <Header />
      <Translate />
     
    </>
  )
}
      <Dictionary />
    </>
  );
}
