
import React, { useState, useEffect } from 'react';
import './Quiz.css';

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(true);
  const [score, setScore] = useState(0);

