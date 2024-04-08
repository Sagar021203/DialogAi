import React, { useContext, useState, useEffect } from 'react'
import './maincon.css'
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

const Maincon = () => {

  const { onSent, input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompt,
    setPrevPrompt,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    displayedData,
    setResultData,
    darkMode,
    toggleDarkMode,
    expanded,
    handleToggle } = useContext(Context)
  const [typedText, setTypedText] = useState('');



  useEffect(() => {
    if (showResult) {
      setTypedText('');
      typeText(resultData);
    }
  }, [showResult, resultData]);



  const typeText = (text) => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setTypedText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 5);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSent();
    }
  };
  return (
    <div className={`main ${darkMode ? 'dark-mode' : ''}`}>

      <div className='nav'>
        <svg onClick={handleToggle} className="menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(0,0,0,1)">
          <path d="M18 18V20H6V18H18ZM21 11V13H3V11H21ZM18 4V6H6V4H18Z">
          </path>
        </svg>
        <p>DialogAi</p>
        <svg onClick={toggleDarkMode} className='darktoggle' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill={darkMode ? '#fff' : 'rgba(0,0,0,0.7)'}>{darkMode ?
          (<path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path>)
          : (<path d="M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z"></path>)
        }</svg>
      </div>
      <div className="main-container">
        {!showResult ? <>
          <div className="greet">
            <p><span>Hello! User</span></p>
            <p className='greet-txt'>How Can I Help You Today?</p>
          </div>
          <div className='suggestion-card'>
            <div className="card">
              <p>Suggest beaches to visit in a city, including details</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="rgba(0,0,0,0.7)">
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM15.5 8.5L13.5 13.5L8.5 15.5L10.5 10.5L15.5 8.5Z">
                </path>
              </svg>
            </div>
            <div className="card">
              <p>Write a thank you note to my colleague</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(0,0,0,0.7)"><path d="M5 18.89H6.41421L15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89ZM21 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L9.24264 18.89H21V20.89ZM15.7279 6.74785L17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785Z"></path></svg>
            </div>
            <div className="card">
              <p>Draft an email to a recruiter to accept a job offer</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(0,0,0,0.7)"><path d="M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z"></path></svg>
            </div>
            <div className="card">
              <p>Brainstorm ideas for a mocktail given specific ingredients</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(0,0,0,0.7)"><path d="M9.97308 18H14.0269C14.1589 16.7984 14.7721 15.8065 15.7676 14.7226C15.8797 14.6006 16.5988 13.8564 16.6841 13.7501C17.5318 12.6931 18 11.385 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 11.3843 6.46774 12.6917 7.31462 13.7484C7.40004 13.855 8.12081 14.6012 8.23154 14.7218C9.22766 15.8064 9.84103 16.7984 9.97308 18ZM14 20H10V21H14V20ZM5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.624 15.7748 16 17 16 18.5V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V18.5C8 17 6.37458 15.7736 5.75395 14.9992ZM13 10.0048H15.5L11 16.0048V12.0048H8.5L13 6V10.0048Z"></path></svg>
            </div>
          </div></>
          : <div className='result'>
            <div className="result-title">
              <img className='catimg' src={assets.catImg} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              {loading
                ? (<div className="loader">
                  <hr />
                  <hr />
                  <hr />
                  <hr />
                  <hr />
                </div>)
                : (<pre dangerouslySetInnerHTML={{ __html: typedText }}></pre>)
              }
            </div>
          </div>}

        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} value={input} type="text" placeholder='Find Info here..' />
            {input ? <svg onClick={() => onSent()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="rgba(0,0,0,1)"><path d="M21.7267 2.95694L16.2734 22.0432C16.1225 22.5716 15.7979 22.5956 15.5563 22.1126L11 13L1.9229 9.36919C1.41322 9.16532 1.41953 8.86022 1.95695 8.68108L21.0432 2.31901C21.5716 2.14285 21.8747 2.43866 21.7267 2.95694ZM19.0353 5.09647L6.81221 9.17085L12.4488 11.4255L15.4895 17.5068L19.0353 5.09647Z"></path></svg> : null
            }          </div>
          <div>
            <p className="bottom-text">
              DialogAi may display inaccurate info, including about people, so double-check its responses. Your privacy & DialogAi
            </p></div>
        </div>
      </div>
    </div>
  );
}

export default Maincon