import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../Components/ThemeProvider';

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
  
  // Dark/Light mode functionality
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // FullScreen fonctionality
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const rootElement = document.getElementById('root');
    if (!document.fullscreenElement) {
      rootElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div className='colTwo'>
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

      <motion.div
        onMouseEnter={cursorEnterCardHover}
        onMouseLeave={cursorLeaveCardHover}
        className='card2 languageToggleCard icon'
      >
        <button className='languageButton' onClick={toggleLanguage}>
          {language === 'en' ? 'Fr' : 'En'}
        </button>
      </motion.div>

      <motion.div
      onMouseEnter={cursorEnterCardHover}
      onMouseLeave={cursorLeaveCardHover}
      onClick={toggleFullscreen}
      className='card2 soundButton icon'
    >
      {isFullscreen ? (
        <svg stroke="#ffffff" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height='4rem'>
          <path d="M9.00001 18.0001L9.00001 17.0001C9.00001 15.8956 8.10458 15.0001 7.00001 15.0001H6.00001M15 18.0001V17.0001C15 15.8956 15.8954 15.0001 17 15.0001L18 15.0001M9 6.00012L9 7.00012C9 8.10469 8.10457 9.00012 7 9.00012L6 9.00012M15 6.00014L15 7.00014C15 8.10471 15.8954 9.00014 17 9.00014L18 9.00014" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      ) : (
        <svg stroke="#ffffff" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height='4rem'>
          <path d="M6 15V16C6 17.1046 6.89543 18 8 18H9M18 15V16C18 17.1046 17.1046 18 16 18H15M6 9V8C6 6.89543 6.89543 6 8 6H9M18 9V8C18 6.89543 17.1046 6 16 6H15" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </motion.div>
    </div>
  );
}

export default UtilityCards;
