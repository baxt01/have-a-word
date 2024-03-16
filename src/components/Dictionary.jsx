import axios from "axios";
import React from "react";
import { useState } from "react";

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
    </div>
  );
}
