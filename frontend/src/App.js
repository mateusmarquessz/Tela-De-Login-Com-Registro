import React, { useState } from 'react';
import "./componets/Global.css";
import {FaUser, FaLock } from 'react-icons/fa';
import Register from './Register';


function App() {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const toggleRegisterForm = () => {
    setShowRegisterForm(!showRegisterForm);
  }


  return (
    <div className="login">
      <h2>{showRegisterForm ? 'Register' : 'Login'}</h2>
      {showRegisterForm ? (
        <Register toggleRegisterForm={toggleRegisterForm} />
      ) : (
        <form className="login-form">
          <div className="textbox">
            <input type="email" placeholder="Email" /> <span className="material-symbols-outlined">
              <FaUser />
            </span>
          </div>
          <div className="textbox">
            <input type="password" placeholder="Password" /> <span className="material-symbols-outlined">
              <FaLock />  
            </span>
          </div>
          <button type="submit">LOGIN</button>
          <a href="#" onClick={toggleRegisterForm}>Register</a>
        </form>
      )}
    </div>
  );
}

export default App;
