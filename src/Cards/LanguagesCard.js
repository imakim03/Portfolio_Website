import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function Languages({ cursorEnterCard, cursorLeaveCard }) {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <Link 
            to='/about'
            className="LanguagesCard"
        >
            <motion.div
                onMouseEnter={cursorEnterCard}
                onMouseLeave={cursorLeaveCard}
                className="card colTwoContent"
                ref={ref}
            >
                <h1>Languages</h1>
                <div className="languagesContainer">
                    <div className="lang" style={{ '--percentage': inView ? 88 : 0 }}>
                        <div className="inner-circle">FR</div>
                    </div>
                    <div className="lang" style={{ '--percentage': inView ? 95 : 0 }}>
                        <div className="inner-circle">ENG</div>
                    </div>
                    <div className="lang" style={{ '--percentage': inView ? 98 : 0 }}>
                        <div className="inner-circle">AR</div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}

export default Languages;
