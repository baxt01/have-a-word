
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
