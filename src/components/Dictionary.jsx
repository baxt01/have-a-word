import axios from "axios";
import React from "react";
import { useState } from "react";
<<<<<<< HEAD
import "../style/Dictionary.css";

export default function Dictionary({ handleSearch }) {
  const [input, setInput] = useState("");

  const handleClear = () => {
    setInput("");
  };

  return (
    <div className="container">
      <header>
        <nav>
          <h2>Dictionary App</h2>
        </nav>
      </header>
      <main>
        <form>
          {/* <label htmlFor="search" className="form-label"> */}
          <p>
            Welcome to the Dictionary App Homepage! This App is designed to be
            your go-to resource for all your language needs.
          </p>
          {/* </label> */}

          <input
            type="text"
            // className="form-control"
            placeholder="Enter a word"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

          <button
            type="submit"
            className="button1"
            onClick={(event) => {
              event.preventDefault();
              handleSearch(input);
            }}
          >
            Search
          </button>
          <button type="submit" className="button2" onClick={handleClear}>
            Clear
          </button>
        </form>
      </main>
=======

export default function Dictionary() {
  const [searchWord, setsearchWord] = useState("");
  const [searchData, setsearchData] = useState([]);

  // const [searchData, setsearchData] = useState({ search: "", results: [] });

  const searchApi = async () => {
    // API.search ()
    // .then((res)=>setsearchData({...searchData, results:res.data.data}))
    // .catch((err)=> console.log(err));

    const response = await axios(
      "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
    );
    const data = await response.json();
    setsearchData(data[0]);
  };
  console.log(searchData);

  // )

  //   }
  const updateSearchWord = (evt) => {
    // console.log(evt.target.value);
    setsearchWord(evt.target.value);
  };
  return (
    <div className="container">
      <h2>Dictionary</h2>
      <label htmlFor="search" className="form-label">
        Search Word:
      </label>

      <input
        type="text"
        name='searchWord'
        className="form-control"
        placeholder="Search for a word"
        value={searchWord}
        onChange={updateSearchWord}
      />

      <button
        onClick={searchApi}
        type="Search"
        className="btn btn-primary mt-3"
      >
        Search
      </button>

      <div className="">
        <p>Noun</p>
        <ul>
          <li>definition</li>
          <li>Example</li>
          <li>Synonyms</li>
          <li>antonyms</li>
        </ul>
      </div>
      <div className="">
        <p>Noun</p>
        <ul>
          <li>definition</li>
          <li>Example</li>
          <li>Synonyms</li>
          <li>antonyms</li>
        </ul>
      </div>
      <div></div>
>>>>>>> 6d468885da3ce19d0407ba60665e0bcfc9b932fe
    </div>
  );
}
