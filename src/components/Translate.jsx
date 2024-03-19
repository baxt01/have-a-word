import React, { useState } from 'react';
import axios from 'axios';

// Language codes to choose your base language from.
const selectfromLanguage = [
    'af', 'sq', 'am', 'ar', 'hy', 'as', 'ay', 'az', 'bm', 'eu', 'be', 'bn', 'bho', 'bs', 'bg', 'ca', 'ceb',
    'zh-CN or zh (BCP-47)', 'zh-TW (BCP-47)', 'co', 'hr', 'cs', 'da', 'dv', 'doi', 'nl', 'en', 'eo', 'et', 'ee',
    'fil', 'fi', 'fr', 'fy', 'gl', 'ka', 'de', 'el', 'gn', 'gu', 'ht', 'ha', 'haw', 'he or iw', 'hi', 'hmn', 'hu',
    'is', 'ig', 'ilo', 'id', 'ga', 'it', 'ja', 'jv or jw', 'kn', 'kk', 'km', 'rw', 'gom', 'ko', 'kri', 'ku', 'ckb',
    'ky', 'lo', 'la', 'lv', 'ln', 'lt', 'lg', 'lb', 'mk', 'mai', 'mg', 'ms', 'ml', 'mt', 'mi', 'mr', 'mni-Mtei',
    'lus', 'mn', 'my', 'ne', 'no', 'ny', 'or', 'om', 'ps', 'fa', 'pl', 'pt', 'pa', 'qu', 'ro', 'ru', 'sm', 'sa',
    'gd', 'nso', 'sr', 'st', 'sn', 'sd', 'si', 'sk', 'sl', 'so', 'es', 'su', 'sw', 'sv', 'tl', 'tg', 'ta', 'tt',
    'te', 'th', 'ti', 'ts', 'tr', 'tk', 'ak', 'uk', 'ur', 'ug', 'uz', 'vi', 'cy', 'xh', 'yi', 'yo', 'zu'
];

// setting the useState options for all the options through the code.
const TranslationComponent = () => {
    const [text, setText] = useState('');
    const [sourceLanguage, setSourceLanguage] = useState('');
    const [translatedText, setTranslatedText] = useState('Ready to translate');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // starting the async await function
    const translateText = async () => {
        // changing the setLoading to True.
        setLoading(true);
        // preparing the setError as null.
        setError(null);

        // creating a try catch block for the await POST through axios.
        try {
            const response = await axios.post(
                'https://translation.googleapis.com/language/translate/v2',
                {
                    q: text,
                    source: sourceLanguage, // calling the users chosen base language.
                    target: 'en', // Target language code (English)
                    format: 'text', // defining the format of the API response as text.
                },
                {
                    params: {
                        // calling the API key from the dotenv file in the process function of vite.
                        key: process.env.REACT_APP_TRANSLATE_API_KEY
                    },
                }
            );
            // getting the first API response and giving it to the useState.
            setTranslatedText(response.data.data.translations[0].translatedText);
            
            console.log(translatedText); // getting the translated text after submission.
            console.log(text); // getting the original text typed by the user.

            setLoading(false); // changing the setLoading to false now the response is gained.
                // catching any errors from the POST / response.
        } catch (error) {
            setError(error.message); // putting any error messages into the useState.
            setLoading(false); // changing the useState setLoading to false.
        }
    };

    return (
        <div className= 'mx-3 my-3'>
            <textarea className='rounded border-2 border-dark-subtle mx-1 my-1'
                name='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something..."
            />
            <select className='rounded border-2 border-dark-subtle mx-2 my-2'
                name='languageSelection'
                value={sourceLanguage}
                onChange={(e) => setSourceLanguage(e.target.value)}
            >
                {selectfromLanguage.map(language => (
                    <option key={language} value={language}>{language}</option>
                ))}
            </select>
            <button className='btn btn-info border-dark-subtle text-dark-subtle' name='translate' onClick={translateText} disabled={loading}>
                Translate
            </button>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            <div>
                <h3>Translated Text:</h3>
                <p>{translatedText}</p>
            </div>
        </div>
    );
};

export default TranslationComponent;
