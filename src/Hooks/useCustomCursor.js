import { useState, useEffect } from 'react';
import Lightbox from 'react-image-lightbox';

export const useCustomCursor = (lightboxStates) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVarient, setCursorVarient] = useState('default');
  let previousScrollY = window.scrollY;

  useEffect(() => {
    const updateCursorPosition = (e) => setMousePosition({ x: e.pageX, y: e.pageY });

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
  }, []);

  // When the mouse leaves the page
  useEffect(() => {
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
  }, []);

  // If any of the lightBoxs is open then set the cursor into default
  // useEffect(() => {
  //   if (lightboxStates.some(state => state)) {
  //       setIsVisible(false);
  //   } else {
  //       setIsVisible(true);
  //   }
  //   }, [lightboxStates]);

  const variants = {
    default: {
        x: mousePosition.x - 25,
        y: mousePosition.y - 25,
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
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
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
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
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
    isVisible,
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
