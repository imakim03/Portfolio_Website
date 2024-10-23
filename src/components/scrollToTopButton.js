import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import '../Style/scrollToTopButton.css';

const ScrollToTopButton = ({
  cursorEnterCardHover,
  cursorLeaveCardHover
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    setTimeout(() => {
      cursorLeaveCardHover();
    }, 500);
  };

  return (
    <AnimatePresence>
      <div>
      {isVisible && (
        <motion.button 
        className='card'
        id='scrollToTopButton' 
        onMouseEnter={cursorEnterCardHover} 
        onMouseLeave={cursorLeaveCardHover}
        onClick={() => {
          scrollToTop();
          cursorLeaveCardHover();
        }}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opcaity: 0}}
        >
          <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289L19.7071 10.2929C20.0976 10.6834 20.0976 11.3166 19.7071 11.7071C19.3166 12.0976 18.6834 12.0976 18.2929 11.7071L13 6.41421V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V6.41421L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929L11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3Z" 
          ></path></svg>
        </motion.button>
      )}
    </div>
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
