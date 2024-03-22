import React, { useState } from 'react';
import axios from 'axios';
import DictionaryComponent from './DictionaryComponent'; 

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

const TranslationComponent = () => {
    const [text, setText] = useState('');
    const [sourceLanguage, setSourceLanguage] = useState('');
    const [translatedText, setTranslatedText] = useState('Ready');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const translateText = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(
                'https://translation.googleapis.com/language/translate/v2',
                {
                    q: text,
                    source: sourceLanguage,
                    target: 'en',
                    format: 'text',
                },
                {
                    params: {
                        key: 'AIzaSyBFPvjR5NQrnOESlwB0N6Hc8XstKp7bzao'
                    },
                }
            );

            setTranslatedText(response.data.data.translations[0].translatedText);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    return (
        <div className= 'mx-3 my-3'>
            <textarea
                className='rounded border-2 border-dark-subtle mx-1 my-1'
                name='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something..."
            />
            <select
                className='rounded border-2 border-dark-subtle mx-2 my-2'
                name='languageSelection'
                value={sourceLanguage}
                onChange={(e) => setSourceLanguage(e.target.value)}
            >
                {selectfromLanguage.map(language => (
                    <option key={language} value={language}>{language}</option>
                ))}
            </select>
            <button
                className='btn btn-info border-dark-subtle text-dark-subtle'
                name='translate'
                onClick={translateText}
                disabled={loading}
            >
                Translate
            </button>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            <div>
                <h3>Translated Text:</h3>
                <p>{translatedText}</p>
            </div>
            <DictionaryComponent translatedText={translatedText} />
        </div>
    );
};

export default TranslationComponent;
