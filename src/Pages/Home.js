import ProjectsCard from '../Cards/ProjectsCard';
import MainHeading from '../Cards/MainHeadingCard';
import EducationCard from '../Cards/EducationCard';
import UtilityCards from '../Cards/UtilitiesCard';
import SocialMediaCards from '../Cards/SocialCard';
import FlowerCard from '../Cards/FlowerCard';
import ScrollArrowCard from '../Cards/ScrollArrowCard';
import AboutMeCard from '../Cards/AboutMeCard';
import LanguagesCard from '../Cards/LanguagesCard';
import QuoteCard from '../Cards/QuoteCard';
import ProjectsLinksCards from '../Cards/ProjectsLinksCards';
import ContactCard from '../Cards/ContactCard';
import Profession from '../Cards/ProfessionCard';
import { useCustomCursor } from '../Hooks/useCustomCursor';
import Cursor from '../Components/Cursor';
import NavBar from '../Components/NavBar';
import ScrollToTopButton from '../Components/scrollToTopButton';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';
import Transition from '../Components/Transition';
import '../Style/HomePage.css';

function HomePage(pageRef) {
  const { 
    isVisible,
    cursorVarient,
    variants,
    cursorEnterCard,
    cursorLeaveCard,
    cursorEnterCardHover,
    cursorLeaveCardHover,
    cursorEnterFlowerCard,
    cursorLeaveFlowerCard,
    cursorEnterSocialsCard,
    cursorLeaveSocialsCard,
    cursorEnterProjectsCard,
    cursorLeaveProjectsCard,
    cursorEnterDownloadCard,
    cursorLeaveDownloadCard } = useCustomCursor();

    return(
        <motion.div 
        className={`homeContainer pageContainer ${document.fullscreenElement ? 'fullscreenContent' : ''}`}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
             <Cursor
                style={{ display: isVisible ? 'block' : 'none' }}
                cursorVarient={cursorVarient}
                variants={variants}
              />
              <NavBar
                cursorEnterCardHover={cursorEnterCardHover}
                cursorLeaveCardHover={cursorLeaveCardHover}
                />
              <ScrollToTopButton
                cursorEnterCardHover={cursorEnterCardHover}
                cursorLeaveCardHover={cursorLeaveCardHover}
              />
            <div className='portfolio'>
              |Portfolio&nbsp;
              <svg viewBox="0 0 24 24" fill="none" width='30px' height='30px' xmlns="http://www.w3.org/2000/svg" stroke="#E3A5C7" strokeWidth="2.4">
                <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#E3A5C7">
                </path>
              </svg>
              &nbsp;2024|
            </div>
            <div className='flexContainer'>
              <div className='row rowOne'>

                <MainHeading
                  cursorEnterCard={cursorEnterCard}
                  cursorLeaveCard={cursorLeaveCard}
                />

                <ProjectsCard
                  cursorEnterProjectsCard={cursorEnterProjectsCard}
                  cursorLeaveProjectsCard={cursorLeaveProjectsCard}
                />

              </div>

              <div className='row rowTwo'>

                <EducationCard
                  cursorEnterCard={cursorEnterCard}
                  cursorLeaveCard={cursorLeaveCard}
                />

                <UtilityCards
                  cursorEnterCardHover={cursorEnterCardHover}
                  cursorLeaveCardHover={cursorLeaveCardHover}
                  pageRef={pageRef}
                />

                <FlowerCard
                  cursorEnterFlowerCard = {cursorEnterFlowerCard}
                  cursorLeaveFlowerCard = {cursorLeaveFlowerCard}
                />

                <Profession
                cursorEnterCard={cursorEnterCard}
                cursorLeaveCard={cursorLeaveCard}
                />

              </div>
                
              <div className='row rowThree'>
              <ScrollArrowCard
                  cursorEnterCardHover = {cursorEnterCardHover}
                  cursorLeaveCardHover = {cursorLeaveCardHover}
                />
              </div>

              <div className='row rowFour' id='rowFour'>
                <AboutMeCard
                  cursorEnterCard={cursorEnterCard}
                  cursorLeaveCard={cursorLeaveCard}
                />
                <LanguagesCard
                  cursorEnterCard={cursorEnterCard}
                  cursorLeaveCard={cursorLeaveCard}
                />
                <QuoteCard
                  cursorEnterCard={cursorEnterCard}
                  cursorLeaveCard={cursorLeaveCard}
                />
              </div>
              <div className='row rowFive'>
                <ProjectsLinksCards
                  cursorEnterProjectsCard={cursorEnterProjectsCard}
                  cursorLeaveProjectsCard={cursorLeaveProjectsCard}
                  cursorEnterDownloadCard={cursorEnterDownloadCard}
                  cursorLeaveDownloadCard={cursorLeaveDownloadCard}
                />
                <ProjectsCard
                  cursorEnterProjectsCard={cursorEnterProjectsCard}
                  cursorLeaveProjectsCard={cursorLeaveProjectsCard}
                />
                </div>

                <div className='row rowSix'>
                  <ContactCard/>
                </div>

                <div className='row rowSeven'>
                <SocialMediaCards
                  cursorEnterSocialsCard={cursorEnterSocialsCard} 
                  cursorLeaveSocialsCard={cursorLeaveSocialsCard} 
                />
                </div>
            </div>
            <Footer />
          </motion.div>
    );
}

export default Transition(HomePage);