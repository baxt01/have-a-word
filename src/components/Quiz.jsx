
import React, { useState, useEffect } from 'react';
import './Quiz.css';

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(true);
  const [score, setScore] = useState(0);
  

  const handleAnswerSelect = (correctOption) => {
    setSelectedAnswer(correctOption);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      const correctAnswer = questions[currentQuestion].correctOption;
      const isAnswerCorrect = selectedAnswer === correctAnswer;

    
      setIsCorrect(isAnswerCorrect);

     
      if (isAnswerCorrect) {
        setScore(score + 1);
      }

      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
       
      }
    } else {
      
    }
  };
  
  useEffect(() => {
    if ((currentQuestion + 1) % 10 === 0 && currentQuestion !== 0) {
      
    }
  }, [currentQuestion, score]);

  return currentQuestion < 10 ? (
    <div className=" flex justify-center items-center">
        <div className='holder'>
              <h1>Start Playing Quiz</h1>
              
            
        </div>
        <br></br>
             <h2>Question {currentQuestion + 1}</h2>
             <p className='query-name'>{questions[currentQuestion].word}</p>
      <ul>
        {questions[currentQuestion].options.map((option, index) => (
          <li className="list-name" key={index}>
            <label>
              <input
                type="radio"
                name="answer"
                value={option}
                checked={selectedAnswer === option}
                onChange={() => handleAnswerSelect(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      {!isCorrect && <p style={{ color: 'red' }}>Incorrect answer.</p>}
      <button className="button-next text-white" onClick={handleNextQuestion}>
        Next
        
      </button>
      
      <h2>Your Score: {score}</h2>
    </div>
  ) : (
    <div className="final-score">
         <div className='holder'>
              <h1>Start Playing Quiz</h1>
            
        </div>
      <h2>Quiz ended! Your final score is {score}</h2>
    </div>
  );
  
  
};

export default Quiz;
