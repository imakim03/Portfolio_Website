import { useState, useEffect } from 'react';

export const useCustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVarient, setCursorVarient] = useState('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  let previousScrollY = window.scrollY;

  useEffect(() => {
    // Detect if the device is touch-enabled
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);

    // Only attach mouse and scroll listeners if it's not a touch device
    if (!isTouch) {
      const updateCursorPosition = (e) => {
        const isFullscreen = document.fullscreenElement !== null;
        // Use clientX, clientY for fullscreen
        const cursorX = isFullscreen ? e.screenX : e.pageX; 
        const cursorY = isFullscreen ? e.screenY : e.pageY;
    
        setMousePosition({ x: cursorX, y: cursorY });
    };

      const updateCursorOnScroll = () => {
        const scrollDifference = window.scrollY - previousScrollY;
        setMousePosition((prevPosition) => ({
          x: prevPosition.x,
          y: prevPosition.y + scrollDifference,
        }));
        previousScrollY = window.scrollY;
      };

      window.addEventListener('mousemove', updateCursorPosition);
      window.addEventListener('scroll', updateCursorOnScroll);

      return () => {
        window.removeEventListener('mousemove', updateCursorPosition);
        window.removeEventListener('scroll', updateCursorOnScroll);
      };
    }
  }, []);

  useEffect(() => {
    if (!isTouchDevice) {
      // Hide cursor when the mouse leaves the page
      const handleMouseOut = (e) => {
        if (!e.relatedTarget || e.relatedTarget.nodeName === "HTML") {
          setIsVisible(false);
        }
      };

      const handleMouseMove = () => setIsVisible(true);

      window.addEventListener('mouseout', handleMouseOut);
      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mouseout', handleMouseOut);
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [isTouchDevice]);

  const variants = {
    default: {
        x: mousePosition.x - 36,
        y: mousePosition.y - 36,
        border: 'dashed 2px var(--font-color)',
        transition: { duration: 0 }
    },
    card: {
        x: mousePosition.x - 45,
        y: mousePosition.y - 45,
        height: 90,
        width: 90,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: 'dashed 2px var(--font-color)',
        transition: { duration: 0 }
    },
    socialCard: {
      x: mousePosition.x - 36,
      y: mousePosition.y - 36,
      height: 50,
      width: 50,
      border: 'dashed 2px var(--font-color)',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      transition: { duration: 0.1 }
    },
    card2: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      border: 'dashed 2px var(--font-color)',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      transition: { duration: 0 }
    },
    cardHover: {
      x: mousePosition.x - 36,
      y: mousePosition.y - 36,
      border: 'dashed 2px var(--font-color)',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      transition: { duration: 0 }
    }
}

  const cursorEnterCardHover = () => { setCursorVarient('cardHover'); }
  const cursorLeaveCardHover = () => { setCursorVarient('default'); }

  const cursorEnterCard = () => { setCursorVarient('card'); document.querySelector('.cursorLearnMore').classList.add('showText'); }
  const cursorLeaveCard = () => { setCursorVarient('default'); document.querySelector('.cursorLearnMore').classList.remove('showText'); }

  const cursorEnterSocialsCard = () => { setCursorVarient('socialCard'); document.querySelector('.cursorArrow').classList.add('showText');}
  const cursorLeaveSocialsCard = () => { setCursorVarient('default'); document.querySelector('.cursorArrow').classList.remove('showText'); }

  const cursorEnterFlowerCard = () => { setCursorVarient('card2'); document.querySelector('.cursorRefresh').classList.add('showText'); }
  const cursorLeaveFlowerCard = () => { setCursorVarient('default'); document.querySelector('.cursorRefresh').classList.remove('showText'); }

  const cursorEnterProjectsCard = () => { setCursorVarient('card2'); document.querySelector('.cursorView').classList.add('showText'); }
  const cursorLeaveProjectsCard = () => { setCursorVarient('default'); document.querySelector('.cursorView').classList.remove('showText'); }

  const cursorEnterDownloadCard = () => { setCursorVarient('card'); document.querySelector('.cursorDownload').classList.add('showText'); }
  const cursorLeaveDownloadCard = () => { setCursorVarient('default'); document.querySelector('.cursorDownload').classList.remove('showText'); }

  return { 
    isVisible: !isTouchDevice && isVisible,
    cursorVarient, 
    variants,
    cursorEnterCard,
    cursorLeaveCard,
    cursorEnterCardHover,
    cursorLeaveCardHover,
    cursorEnterFlowerCard,
    cursorLeaveFlowerCard,
    cursorEnterSocialsCard,
    cursorLeaveSocialsCard,
    cursorEnterProjectsCard,
    cursorLeaveProjectsCard,
    cursorEnterDownloadCard,
    cursorLeaveDownloadCard 
  };
  
};
