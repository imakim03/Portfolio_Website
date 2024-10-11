import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

function UtilityCards({
  cursorEnterCardHover,
  cursorLeaveCardHover,
}) {
  // Translate functionality
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en';
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  // Dark/light mode functionality
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      return JSON.parse(savedMode);
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.style.setProperty('--background-color', '#1D1B1F');
      root.style.setProperty('--font-color', 'rgba(255, 255, 255, 0.814)');
      root.style.setProperty('--accent-color', '#333333');
      root.style.setProperty('--primary-accent-color', '#333333');
      root.style.setProperty('--secondary-accent-color', '#3a3a3a');
    } else {
      root.style.setProperty('--background-color', '#FFDFD6');
      root.style.setProperty('--font-color', '#493548');
      root.style.setProperty('--accent-color', '#E3A5C7');
      root.style.setProperty('--primary-accent-color', 'white');
      root.style.setProperty('--secondary-accent-color', '#D3C4E3');
    }

    // Save the user's preference in localStorage
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setIsDarkMode(e.matches);
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className='colTwo'>
      {/* Light/Dark Mode Toggle Card */}
      <motion.div 
        onMouseEnter={cursorEnterCardHover} 
        onMouseLeave={cursorLeaveCardHover} 
        className='card2 lightDarkModeCard'
      >
        <button className='lightDarkButton icon' onClick={toggleDarkMode}>
          { isDarkMode ? (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="4rem">
              <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" 
              stroke="#ffffff" 
              strokeWidth="1.44" 
              strokeLinecap="round" 
              strokeLinejoin="round"></path>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height='3rem'>
              <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" 
              stroke="#ffffff" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </motion.div>

      {/* Language Toggle Card */}
      <motion.div
        onMouseEnter={cursorEnterCardHover}
        onMouseLeave={cursorLeaveCardHover}
        className='card2 languageToggleCard icon'
      >
        <button className='languageButton' onClick={toggleLanguage}>
          {language === 'en' ? 'Fr' : 'En'}  {/* Display current language */}
        </button>
      </motion.div>

      {/* Sound Button */}
      <motion.div onMouseEnter={cursorEnterCardHover} onMouseLeave={cursorLeaveCardHover} className='card2 button icon'>
        <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 14.9588L2 9.04123C2 8.46617 2.44772 8 3 8H6.58579C6.851 8 7.10536 7.8903 7.29289 7.69503L10.2929 4.30706C10.9229 3.65112 12 4.11568 12 5.04332V18.9567C12 19.8908 10.91 20.3524 10.2839 19.6834L7.29437 16.3145C7.10615 16.1134 6.84791 16 6.57824 16H3C2.44772 16 2 15.5338 2 14.9588Z" stroke="#ffffff" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M16 8.5C17.3333 10.2778 17.3333 13.7222 16 15.5" stroke="#ffffff" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M19 5C22.9879 8.80835 23.0121 15.2171 19 19" stroke="#ffffff" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </motion.div>
    </div>
  );
}

export default UtilityCards;
