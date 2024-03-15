import React, { useState } from 'react';
import axios from 'axios';

const Translate = () => {
    const [text, setText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    console.log(process.env.REACT_APP_TRANSLATE_API_KEY) // remove this after you've confirmed it is working

    const translateText = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(
                'https://translation.googleapis.com/language/translate/v2',
                {
                    q: text,
                    source: 'en', // Source language code (English)
                    target: 'fr', // Target language code (French)
                    format: 'text',
                },
                {
                    params: {
                        key: process.env.REACT_APP_TRANSLATE_API_KEY
                    },
                }
            );

            setTranslatedText(response.data.data.translations[0].translatedText);
        } catch (error) {
            setError(error.message);
        }

        setLoading(false);
    };

    return (
        <div>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text to translate..."
            />
            <button onClick={translateText} disabled={loading}>
                Translate
            </button>
            {loading && <p>Loading...</p>}
            {translatedText && <p>Translated Text: {translatedText}</p>}
            {error && <p>Error: {error}</p>}
        </div>
    );
};

 export default Translate;
