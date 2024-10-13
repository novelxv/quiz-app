import React from 'react';
import { useLocation } from 'react-router-dom';

const Result = () => {
   const { state } = useLocation();
   const { answers } = state;

   const correctAnswers = answers.filter(answer => answer.isCorrect).length;
   const incorrectAnswers = answers.length - correctAnswers;

   return (
      <div>
         <h2>Quiz Results</h2>
         <p>Correct Answers: {correctAnswers}</p>
         <p>Incorrect Answers: {incorrectAnswers}</p>
         <p>Total Questions Answered: {answers.length}</p>
      </div>
   );
};

export default Result;
