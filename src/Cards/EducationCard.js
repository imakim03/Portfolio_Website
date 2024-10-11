import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function EducationCard({ cursorEnterCard, cursorLeaveCard }) {
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
            <h2 className="cardHeading">Education</h2>
            <ul className="educationList">
              <li className="educationItem">
                <p>High School</p>
                <p className="date">2017 - 2020</p>
              </li>
              <li className="educationItem">
                <p>Preparatory Cycle</p>
                <p className="date">2020 - 2022</p>
              </li>
              <li className="educationItem lastItem">
                <p>Engineering Cycle</p>
                <p className="date">2022 - 2025</p>
              </li>
            </ul>
          </div>
        </motion.div>
      </Link>
    );
  }

  export default EducationCard; 