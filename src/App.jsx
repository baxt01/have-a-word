import { useState } from 'react'
import Translate from './components/Translate.jsx'
import './App.css'
import Header from './components/Header'
import Dictionary from "./components/Dictionary.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Translate />
      <Dictionary />
    </>
  );
}

