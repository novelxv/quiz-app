import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
   const [questions, setQuestions] = useState([]);
   const [currentQuestion, setCurrentQuestion] = useState(0);
   const [answers, setAnswers] = useState([]);
   const [timeLeft, setTimeLeft] = useState(60); 
   const navigate = useNavigate();

   useEffect(() => {
      axios.get('https://opentdb.com/api.php?amount=5&type=multiple')
         .then(response => {
            const fetchedQuestions = response.data.results.map((question) => {
               const allAnswers = [...question.incorrect_answers, question.correct_answer]
                  .sort(() => Math.random() - 0.5);
               return { ...question, allAnswers };
            });
            setQuestions(fetchedQuestions);
         })
         .catch(error => console.error(error));
   }, []);

   useEffect(() => {
      if (timeLeft > 0) {
         const timer = setTimeout(() => {
            setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
         }, 1000);
         return () => clearTimeout(timer);
      } else {
         navigate('/result', { state: { answers } });
      }
   }, [timeLeft, currentQuestion, answers, navigate]);

   const handleAnswerSelection = (selectedAnswer) => {
      const correctAnswer = questions[currentQuestion].correct_answer;
      const updatedAnswers = [...answers, { selectedAnswer, isCorrect: selectedAnswer === correctAnswer }];
      setAnswers(updatedAnswers);

      if (currentQuestion < questions.length - 1) {
         setCurrentQuestion(currentQuestion + 1);
      } else {
         setTimeout(() => {
            navigate('/result', { state: { answers: updatedAnswers } });
         }, 100);
      }
   };

   if (questions.length === 0) {
      return <div>Loading...</div>;
   }

   const currentQuestionObj = questions[currentQuestion];
   const allAnswers = currentQuestionObj.allAnswers;

   return (
      <div className="quiz-container">
         <h2>Time Left: {timeLeft} seconds</h2>
         <h3 dangerouslySetInnerHTML={{ __html: currentQuestionObj.question }} />
         {allAnswers.map((answer, index) => (
            <button key={index} onClick={() => handleAnswerSelection(answer)}>
               <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
         ))}
      </div>
   );
};

export default Quiz;
