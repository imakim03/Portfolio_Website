import NavBar from '../components/NavBar';
import Cursor from '../components/Cursor';
import ScrollToTopButton from '../components/scrollToTopButton';
import Footer from '../components/Footer';
import { useCustomCursor } from '../Hooks/useCustomCursor';
import { motion } from 'framer-motion';
import '../ProjectsPage.css';
import '../App.css';

function AboutMePage() {
    const { 
    isVisible,
    cursorVarient,
    variants,
    cursorEnterCardHover,
    cursorLeaveCardHover} = useCustomCursor();

    return(
        <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="projectsPageContainer pageContainer">
            <Cursor
                style={{ display: isVisible ? 'block' : 'none' }}
                variants={variants}
                cursorVarient={cursorVarient}
            />
            <NavBar
                cursorEnterCardHover={cursorEnterCardHover}
                cursorLeaveCardHover={cursorLeaveCardHover}
            />
            <ScrollToTopButton
                cursorEnterCardHover={cursorEnterCardHover}
                cursorLeaveCardHover={cursorLeaveCardHover}
            />
            <div className='MainContent'>
                
            </div>
            <Footer/>
        </motion.div>
    );
}

export default AboutMePage;