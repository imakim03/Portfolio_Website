import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { ReactTyped as Typed } from 'react-typed';

function MainHeading({ 
  cursorEnterCard, 
  cursorLeaveCard 
}) {
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
          <p className="introParagraph">Hi, I'm Imane.</p>
          <h1 className="mainHeading">
            I enjoy &nbsp;
            <Typed
              strings={['designing', 'coding', 'developing', 'coding', 'learning']}
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