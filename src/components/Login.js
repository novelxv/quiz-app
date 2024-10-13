import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
   const [username, setUsername] = useState('');
   const navigate = useNavigate();

   const handleLogin = () => {
      if (username.trim()) {
         localStorage.setItem('loggedIn', 'true');
         navigate('/quiz');
      }
   };

   return (
      <div className="login-container">
         <h2>Login</h2>
         <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
         />
         <button onClick={handleLogin}>Login</button>
      </div>
   );
};

export default Login;
