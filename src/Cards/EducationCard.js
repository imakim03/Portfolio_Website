import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function EducationCard({ cursorEnterCard, cursorLeaveCard }) {
  const { t } = useTranslation();

  return (
    <Link 
      to='/about/#education'
      className="EducationCard"
    >
      <motion.div
        onMouseEnter={cursorEnterCard}
        onMouseLeave={cursorLeaveCard}
        className="card colOneContent"
      >
        <div className="cardContent">
          <h2 className="cardHeading">{t('homePage.education')}</h2>
          <ul className="educationList">
            <li className="educationItem">
              <p>{t('homePage.highSchool')}</p>
              <p className="date">2017 - 2020</p>
            </li>
            <li className="educationItem">
              <p>{t('homePage.preparatoryCycle')}</p>
              <p className="date">2020 - 2022</p>
            </li>
            <li className="educationItem lastItem">
              <p>{t('homePage.engineeringCycle')}</p>
              <p className="date">2022 - 2025</p>
            </li>
          </ul>
        </div>
      </motion.div>
    </Link>
  );
}

export default EducationCard;