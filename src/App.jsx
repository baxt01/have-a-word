import { useState } from 'react'
import Translate from './components/Translate.jsx'
import './App.css'
import Header from './components/Header'
import Dictionary from "./components/Dictionary.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Quiz from './components/Quiz/Quiz.jsx'
import Word from './utils/quiz.json'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Translate />
      <Dictionary />
      <Quiz questions={Word.questions} />
    </>
  );
}

