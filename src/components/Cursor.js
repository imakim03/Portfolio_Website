import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import '../Style/cursor.css'

function Cursor({ mousePosition, style, cursorVarient, variants, isVisible }) {
    const { t } = useTranslation();

    return (
      <motion.div
        className="cursor"
        style={style}
        variants={variants}
        animate={cursorVarient}>

          <span className="cursorIcon cursorLearnMore">{t('homePage.cursor.Learn More')}</span>
          <span className="cursorIcon cursorView">{t('homePage.cursor.view')}</span>
          <span className="cursorIcon cursorRefresh">{t('homePage.cursor.Refresh')}</span>
          <span className="cursorIcon cursorDownload">{t('homePage.cursor.Download')}</span>
        <span className="cursorIcon cursorArrow">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
          >
            <path
              d="M7 17L17 7M17 7H8M17 7V16"
              stroke="#ffffff"
              strokeWidth="1.44"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
    </motion.div>
  );
}

export default Cursor;