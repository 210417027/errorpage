import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <div className="text"><p>404</p></div>
      <div className="container">
        <div className="caveman">
          <div className="leg">
            <div className="foot"><div className="fingers"></div></div>      
          </div>
          <div className="leg">
            <div className="foot"><div className="fingers"></div></div>      
          </div>
          <div className="shape">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
          <div className="head">
            <div className="eye"><div className="nose"></div></div>
            <div className="mouth"></div>
          </div>
          <div className="arm-right"><div className="club"></div></div>    
        </div>
        
        <div className="caveman">
          <div className="leg">
            <div className="foot"><div className="fingers"></div></div>      
          </div>
          <div className="leg">
            <div className="foot"><div className="fingers"></div></div>      
          </div>
          <div className="shape">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
          <div className="head">
            <div className="eye"><div className="nose"></div></div>
            <div className="mouth"></div>
          </div>
          <div className="arm-right"><div className="club"></div></div>    
        </div>
      </div>
      <a href="https://codepen.io/SofiaSergio/" target="_blank">
        <div id="link">
          <i className="fab fa-codepen"></i>
          <h1>Back</h1>
        </div>
      </a>
      {/* <div class="frame">
      <a href="/" target="_blank">      
        <div id="link">
          <i className="fab fa-codepen"></i>
          <button class="custom-btn btn-11">Back<div class="dot"></div>
          </button>
        </div>
      </a>
      </div> */}
    </div>
    
  );
};

export default ErrorPage;
