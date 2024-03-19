import React from "react";
import "../style/DictionaryComponent.css";

export default function DictionaryComponent({ data, word, audio }) {
  console.log(data);

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="List">
              <h4>
                <strong>Result for:{word}</strong>
              </h4>
              <p className="partofspeech">{data[0].meanings[0].partOfSpeech}</p>

              <p>
                Phonetics:
                {data[0].phonetics[0] === undefined
                  ? "not found"
                  : data[0].phonetics[0].text}
              </p>
              <div>
                <ul>
                  <strong>Meaning & Definitions:</strong>
                </ul>

                {data[0].meanings[0].definitions[0].definition === undefined
                  ? "Not found"
                  : data[0].meanings[0].definitions.map((defi) => {
                      return <li>{defi.definition}</li>;
                    })}
              </div>
              <div>
                <p>
                  <strong>Synonyms:</strong>
                </p>
              </div>
              {
                <div>
                  Audio:
                  {audio === undefined ? (
                    "not found"
                  ) : (
                    <div>
                      <audio controls>
                        <source src={audio} type="audio/ogg" />
                        Your browser does not support the audio tag.
                      </audio>
                    </div>
                  )}
                </div>
              }
              <div>
                <strong>Example:</strong>
                {/* {data[0].meanings[0].definitions[0].example === undefined
                  ? "Not found"
                  : data[0].meanings[0].definitions[0].example} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
