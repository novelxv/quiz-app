import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';

function App() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
         </Routes>
      </Router>
   );
}

export default App;
