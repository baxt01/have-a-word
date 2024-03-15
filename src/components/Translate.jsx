import React, { useState } from 'react';
import axios from 'axios';

export default function Translate ()  {
    const [text, setText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
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
                    source: 'en', // Source language code (English)
                    target: 'fr', // Target language code (French)
                    format: 'text',
                },
                {
                    params: {
                        key: 'AIzaSyCj0SwvjXBthtNYNhFw8Oe3gfg-7XX2MQ4', // 
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

// export default Translate;