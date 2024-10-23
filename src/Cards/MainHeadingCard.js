import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import {ReactTyped as Typed} from 'react-typed';
import { useTranslation } from 'react-i18next';

function MainHeading({ 
  cursorEnterCard, 
  cursorLeaveCard 
}) {
  const { t } = useTranslation();

  const typedStrings = [
    t('homePage.typedText.designing'),
    t('homePage.typedText.coding'),
    t('homePage.typedText.developing'),
    t('homePage.typedText.learning')
  ];
  
  return (
    <Link 
      to='/about'
      className="MainHeadingCard"
    >
      <motion.div
        onMouseEnter={cursorEnterCard}
        onMouseLeave={cursorLeaveCard}
        className="colOneContent card"
      >
        <p className="introParagraph">{t('homePage.introParagraph')}</p>
        
        <h1 className="mainHeading">
          {t('homePage.IEnjoy')} &nbsp;
          <Typed
            strings={typedStrings}
            typeSpeed={100}
            backSpeed={50}
            cursorChar="|"
            loop
          />
        </h1>
      </motion.div>
    </Link>
  );
}

export default MainHeading;
