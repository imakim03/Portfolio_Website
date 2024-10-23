import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import UtiliesCard from '../Cards/UtilitiesCard';
import '../App.css';
import '../Style/NavBar.css';

function NavBar({
  cursorEnterCardHover,
  cursorLeaveCardHover
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;

    const cvPath = currentLanguage === 'fr' ? '/PDF/Imane_Kimissi_CV(fr).pdf' : '/PDF/Imane_Kimissi_CV(eng).pdf';

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
          <Link to='/projects'>
            <motion.div
              href='#'
              onMouseEnter={cursorEnterCardHover}
              onMouseLeave={cursorLeaveCardHover}
              className='link'
              data-text={t('nav.projects')}
            >
              {t('nav.projects')}
            </motion.div>
          </Link>
          <Link to='/'>
            <motion.div
              href='#'
              onMouseEnter={cursorEnterCardHover}
              onMouseLeave={cursorLeaveCardHover}
              className='link'
              data-text={t('nav.home')}
            >
              {t('nav.home')}
            </motion.div>
          </Link>
          <motion.div
            onMouseEnter={cursorEnterCardHover}
            onMouseLeave={cursorLeaveCardHover}
            className='link'
            data-text={t('nav.menu')}
            onClick={toggleMenu}
          >
            {t('nav.menu')}
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
            <Link to='/'>
              <motion.li
                onMouseEnter={cursorEnterCardHover}
                onMouseLeave={cursorLeaveCardHover}
                className="link menuItem"
                data-text={t('nav.home')}
              >
                {t('nav.home')}
              </motion.li>
            </Link>

            <Link to='/about'>
              <motion.li
                onMouseEnter={cursorEnterCardHover}
                onMouseLeave={cursorLeaveCardHover}
                className="link menuItem"
                data-text={t('nav.about')}
              >
                {t('nav.about')}
              </motion.li>
            </Link>

            <Link to='/projects'>
              <motion.li
                onMouseEnter={cursorEnterCardHover}
                onMouseLeave={cursorLeaveCardHover}
                className="link menuItem"
                data-text={t('nav.projects')}
              >
                {t('nav.projects')}
              </motion.li>
            </Link>

            <Link to='/contact'>
              <motion.li
                onMouseEnter={cursorEnterCardHover}
                onMouseLeave={cursorLeaveCardHover}
                className="link menuItem"
                data-text={t('nav.contact')}
              >
                {t('nav.contact')}
              </motion.li>
            </Link>

            <a href={cvPath}download>
              <motion.li
                onMouseEnter={cursorEnterCardHover}
                onMouseLeave={cursorLeaveCardHover}
                className="link menuItem"
                data-text={t('nav.downloadCV')}
              >
                {t('nav.downloadCV')}
              </motion.li>
            </a>
            <UtiliesCard
            cursorEnterCardHover={cursorEnterCardHover}
            cursorLeaveCardHover={cursorLeaveCardHover}
            />
          </ul>
        </motion.div>
      )}
    </header>

  );
}

export default NavBar;
