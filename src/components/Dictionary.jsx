import axios from "axios";
import React from "react";
import { useState } from "react";

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
      </div>
  );
          }
