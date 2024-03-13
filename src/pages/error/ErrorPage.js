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
          <p>watch other pens</p>
        </div>
      </a>
      <button className='custom-btn btn-3'><span><Link to={`/choose_page_27?inputValue=${encodeURIComponent(inputValue)}`} className='word' >回上一頁</Link></span></button>
    </div>
    
  );
};

export default ErrorPage;
