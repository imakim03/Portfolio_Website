import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function QuoteCard({
    cursorEnterCard,
    cursorLeaveCard
}) {
    return(
        <Link 
        to='/about'
        className="QuoteCard"
        >
            <motion.div
                onMouseEnter = {cursorEnterCard}
                onMouseLeave = {cursorLeaveCard}
                className="card colThreeContent">
                    <h3 style={{fontWeight: 'normal'}}>
                        <strong>“Today is the start of a new beginning,"</strong>
                        <div><i>she whispers.</i></div>
                        <div><strong>“I will be softer, I will be better, I will be greater."</strong></div>
                    </h3>
            </motion.div>
        </Link>
    );
}

export default QuoteCard;