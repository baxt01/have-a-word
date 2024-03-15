import React, { useState } from 'react';
import { Translate } from '@google-cloud/translate';

// Create a translator object with your API key
const translator = new Translate({
    key: 'AIzaSyCj0SwvjXBthtNYNhFw8Oe3gfg-7XX2MQ4'
});

export default TranslationComponent = () => {
  const [inputText, setInputText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('en');
  const [translatedText, setTranslatedText] = useState('');

  const handleInputChange = async (e) => {
    const text = e.target.value;
    setInputText(text);
    
    // Detect language
    const [detections] = await translator.detect(text);
    const inputLanguage = detections[0].language;

    // Translate text
    const [translation] = await translator.translate(text, targetLanguage);
    setTranslatedText(translation);
  };

  const handleLanguageChange = async (e) => {
    const newTargetLanguage = e.target.value;
    setTargetLanguage(newTargetLanguage);
    
    // Translate text when the target language changes
    const [translation] = await translator.translate(inputText, newTargetLanguage);
    setTranslatedText(translation);
  };

  return (
    <div>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <select value={targetLanguage} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        {/* Add more languages as needed */}
      </select>
      <div>
        <h3>Translated Text:</h3>
        <p>{translatedText}</p>
      </div>
    </div>
  );
};

// export default TranslationComponent;
