import { useState } from "react";
import Translate from "./components/Translate.jsx";
import "./App.css";
import Header from "./components/Header";
import Dictionary from "./components/Dictionary";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import DictionaryComponent from "./components/DictionaryComponent.jsx";
import Quiz from "./components/Quiz/Quiz.jsx";
import Word from "./utils/quiz.json";

export default function App() {
  const [data, setData] = useState();
  const [word, setWord] = useState();
  const [audio, setAudio] = useState();

  const handleSearch = async (input) => {
    const api = "https://api.dictionaryapi.dev/api/v2/entries/en/";

    const response = await axios.get(api + input);
    console.log(input);
    setData(response.data);
    console.log(response.data);
    setWord(input);

    console.log(response.data[0].phonetics[0]);
    if (response.data[0].phonetics[0] != undefined) {
      setAudio(response.data[0].phonetics[0].audio);

      console.log(response.data[0].phonetics[0].audio);
    } else {
      setAudio(undefined);
    }
  };
  return (
    <div>
      <Header />
      <Translate />
      <Dictionary handleSearch={handleSearch} />
      <Quiz questions={Word.questions} />
      {data && <DictionaryComponent data={data} word={word} audio={audio} />}
    </div>
  );
}
