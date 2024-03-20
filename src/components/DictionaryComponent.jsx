import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DictionaryComponent({ translatedText }) {
  const [data, setData] = useState(null);
  const [word, setWord] = useState(null);
  const [audio, setAudio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!translatedText) return; // No need to fetch if translatedText is empty
      
      setLoading(true);
      try {
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${translatedText}`);
        setData(response.data);
        setWord(translatedText);

        if (response.data[0].phonetics[0]) {
          setAudio(response.data[0].phonetics[0].audio);
        }

        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [translatedText]);

  if (!translatedText) {
    return null; // Don't render if translatedText is empty
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data || data.length === 0) {
    return <div>No information found for "{translatedText}"</div>;
  }

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
                  : data[0].meanings[0].definitions[0].definition}
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
                {data[0].meanings[0].definitions[0].example === undefined
                  ? "Not found"
                  : data[0].meanings[0].definitions[0].example}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
