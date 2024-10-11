import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/NavBar.css';

function NavBar({
  cursorEnterCardHover,
  cursorLeaveCardHover
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    cursorLeaveCardHover();
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menuOpen');
    } else {
      document.body.classList.remove('menuOpen');
    }
    
    return () => {
      document.body.classList.remove('menuOpen');
    };
  }, [isMenuOpen]);

  return (
    <header className="Container">
      {!isMenuOpen && (
      <div className="NavBarContainer">
        <Link
        to = '/projects'>
          <motion.div 
            href='#' 
            whileHover={cursorEnterCardHover} 
            onMouseLeave={cursorLeaveCardHover}
            className='link'
            data-text='Projects'
          >
            Projects
          </motion.div>
        </Link>
        <Link
        to = '/'>
          <motion.div
            href='#' 
            onMouseEnter={cursorEnterCardHover} 
            onMouseLeave={cursorLeaveCardHover} 
            className='link'
            data-text='Home'
          >
            Home
          </motion.div>
        </Link>
        <motion.div
          onMouseEnter={cursorEnterCardHover} 
          onMouseLeave={cursorLeaveCardHover} 
          className='link'
          data-text='Menu' 
          onClick={toggleMenu}
        >
          Menu
        </motion.div>
      </div>
      )}

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="menuContainer"
        >
          <motion.button 
            onMouseEnter={cursorEnterCardHover} 
            onMouseLeave={cursorLeaveCardHover} 
            className="closeButton"
            onClick={toggleMenu}
          >
            ✕
          </motion.button>
          
          <ul className="menuList">
          <Link
          to = '/'>
            <motion.li 
            onMouseEnter={cursorEnterCardHover} 
            onMouseLeave={cursorLeaveCardHover}
            className="link menuItem" 
            data-text='Home' >
              Home
            </motion.li>
          </Link>

          <Link
          to = '/about'>
            <motion.li 
            onMouseEnter={cursorEnterCardHover} 
            onMouseLeave={cursorLeaveCardHover} 
            className="link menuItem" 
            data-text='About'>
              About
            </motion.li>
          </Link>

          <Link
          to = '/projects'>
            <motion.li 
            onMouseEnter={cursorEnterCardHover} 
            onMouseLeave={cursorLeaveCardHover} 
            className="link menuItem" data-text='Projects'>
              Projects
            </motion.li>
          </Link>

          <Link
          to = '/'>
            <motion.li 
            onMouseEnter={cursorEnterCardHover} 
            onMouseLeave={cursorLeaveCardHover} 
            className="link menuItem" 
            data-text='Contact'>
              Contact
            </motion.li>
          </Link>

          <Link
          to = '/'>
            <motion.li 
            onMouseEnter={cursorEnterCardHover} 
            onMouseLeave={cursorLeaveCardHover}
            className="link menuItem" 
            data-text='Download CV' >
              Download CV
            </motion.li>
          </Link>
          </ul>
        </motion.div>
      )}
    </header>
  );
}

export default NavBar;
