import React, { useState } from 'react';
import WebDevProjects from '../Components/WebDevProjects';
import CloudProjects from '../Components/CloudProjects';
import NetwrokProjects from '../Components/NetworkProjects';
import SmallProjects from '../Components/SmallProjects';
import OtherProjects from '../Components/OtherProjects';
import Cursor from '../Components/Cursor';
import NavBar from '../Components/NavBar';
import ScrollToTopButton from '../Components/scrollToTopButton';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useCustomCursor } from '../Hooks/useCustomCursor';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Transition from '../Components/Transition';
import '../Style/ProjectsPage.css';
import '../Style/SideBarMenu.css';
import Footer from '../Components/Footer';

const Projects = () => {
    const { 
        isVisible,
        variants,
        cursorVarient,
        cursorEnterCardHover,
        cursorLeaveCardHover,
        cursorEnterProjectsCard,
        cursorLeaveProjectsCard,
        cursorEnterSocialsCard,
        cursorLeaveSocialsCard
    } = useCustomCursor();

    const { t } = useTranslation();

    const [hoveredIcon, setHoveredIcon] = useState(null);
    const [title, setTitle] = useState('Projects • Web Development');

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const initialComponent = searchParams.get('domain') || 'webdev';
    const webdevId = searchParams.get('webdevId') || null;
    const cloudId = searchParams.get('cloudId') || null;
    const networkId = searchParams.get('networkId') || null;
    const smallId = searchParams.get('smallId') || null;
    const otherId = searchParams.get('otherId') || null;
    const [activeComponent, setActiveComponent] = useState(initialComponent);

    useEffect(() => {
        setActiveComponent(initialComponent);
    }, [initialComponent]);

    const handleMouseEnter = (iconName) => {
        setHoveredIcon(iconName);
        cursorEnterCardHover();
    };

    const handleMouseLeave = () => {
        setHoveredIcon(null);
        cursorLeaveProjectsCard();
    };

    const renderComponent = () => {
        switch (activeComponent) {
        case 'webdev':
            return <WebDevProjects
            cursorEnterSocialsCard = {cursorEnterSocialsCard}
            cursorEnterCardHover = {cursorEnterCardHover}
            cursorEnterProjectsCard = {cursorEnterProjectsCard}
            cursorLeaveCardHover = {cursorLeaveCardHover}
            cursorLeaveProjectsCard = {cursorLeaveProjectsCard}
            cursorLeaveSocialsCard = {cursorLeaveSocialsCard}
            webdevId = {webdevId}
            />;
        case 'cloud':
            return <CloudProjects
            cursorEnterCardHover = {cursorEnterCardHover}
            cursorLeaveCardHover = {cursorLeaveCardHover}
            cloudId = {cloudId}
            />;
        case 'network':
            return <NetwrokProjects
            cursorEnterCardHover = {cursorEnterCardHover}
            cursorLeaveCardHover = {cursorLeaveCardHover}
            networkId = {networkId}
            />;
        case 'small':
            return <SmallProjects
            cursorEnterSocialsCard = {cursorEnterSocialsCard}
            cursorEnterCardHover = {cursorEnterCardHover}
            cursorEnterProjectsCard = {cursorEnterProjectsCard}
            cursorLeaveCardHover = {cursorLeaveCardHover}
            cursorLeaveProjectsCard = {cursorLeaveProjectsCard}
            cursorLeaveSocialsCard = {cursorLeaveSocialsCard}
            smallId = {smallId}
            />
        case 'other':
            return <OtherProjects
            cursorEnterCardHover = {cursorEnterCardHover}
            cursorLeaveCardHover = {cursorLeaveCardHover}
            otherId = {otherId}
            />
        default:
            return <WebDevProjects
            cursorEnterSocialsCard = {cursorEnterSocialsCard}
            cursorEnterCardHover = {cursorEnterCardHover}
            cursorEnterProjectsCard = {cursorEnterProjectsCard}
            cursorLeaveCardHover = {cursorLeaveCardHover}
            cursorLeaveProjectsCard = {cursorLeaveProjectsCard}
            cursorLeaveSocialsCard = {cursorLeaveSocialsCard}
            webdevId = {webdevId}
            />;
        }
    };
    
    useEffect(() => {
        switch (activeComponent) {
            case 'webdev':
              setTitle(t('projectsPage.projects.webdev'));
              break;
            case 'cloud':
              setTitle(t('projectsPage.projects.cloud'));
              break;
            case 'network':
              setTitle(t('projectsPage.projects.network'));
              break;
            case 'small':
              setTitle(t('projectsPage.projects.small'));
              break;
            case 'other':
              setTitle(t('projectsPage.projects.other'));
              break;
            default:
              setTitle(t('projectsPage.projects.other'));
        }
    }, [activeComponent]);

  return (
    <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="projectsPageContainer pageContainer"
    >
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
      <nav>
        <motion.div 
        onMouseEnter={() => handleMouseEnter('Web Dev Projects')}
        onMouseLeave={handleMouseLeave}
        onClick={() => setActiveComponent('webdev')}
        className={activeComponent === 'webdev' ? 'active' : ''}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ fill: "var(--font-color)" }} ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                <g fill="none" fillRule="evenodd"> 
                <path d="m0 0h32v32h-32z"></path> 
                <path d="m27 3c2.7614237 0 5 2.23857625 5 5v12c0 2.7614237-2.2385763 5-5 5h-7v3h3c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1h3v-3h-7c-2.6887547 0-4.88181811-2.1223067-4.99538049-4.7831104l-.00461951-.2168896v-12c0-2.76142375 2.23857625-5 5-5zm-9 25v-3h-4v3zm9-23h-22c-1.65685425 0-3 1.34314575-3 3v12c0 1.6568542 1.34314575 3 3 3h22c1.6568542 0 3-1.3431458 3-3v-12c0-1.65685425-1.3431458-3-3-3z" style={{ fill: "var(--font-color)" }}  fillRule="nonzero">
                </path>
                </g></g>
            </svg>
            {hoveredIcon === 'Web Dev Projects' && (
            <span>
                {t('projectsPage.nav.webdev')}
            </span>
            )}
        </motion.div>

        <motion.div 
        onMouseEnter={() => handleMouseEnter('Cloud Projects')}
        onMouseLeave={handleMouseLeave}
        onClick={() => setActiveComponent('cloud')}
        className={activeComponent === 'cloud' ? 'active' : ''}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                <path d="M3 13.6493C3 16.6044 5.41766 19 8.4 19L16.5 19C18.9853 19 21 16.9839 21 14.4969C21 12.6503 19.8893 10.9449 18.3 10.25C18.1317 7.32251 15.684 5 12.6893 5C10.3514 5 8.34694 6.48637 7.5 8.5C4.8 8.9375 3 11.2001 3 13.6493Z" style={{ stroke: "var(--font-color)" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            
            {hoveredIcon === 'Cloud Projects' && (
            <span>
                {t('projectsPage.nav.cloud')}
            </span>
            )}
        </motion.div>

        <motion.div 
        onMouseEnter={() => handleMouseEnter('Network Projects')} 
        onMouseLeave={handleMouseLeave} 
        onClick={() => setActiveComponent('network')}
        className={activeComponent === 'network' ? 'active' : ''}>
            <svg style={{ fill: "var(--font-color)" }}  viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M27 21.75c-0.795 0.004-1.538 0.229-2.169 0.616l0.018-0.010-2.694-2.449c0.724-1.105 1.154-2.459 1.154-3.913 0-1.572-0.503-3.027-1.358-4.212l0.015 0.021 3.062-3.062c0.57 0.316 1.249 0.503 1.971 0.508h0.002c2.347 0 4.25-1.903 4.25-4.25s-1.903-4.25-4.25-4.25c-2.347 0-4.25 1.903-4.25 4.25v0c0.005 0.724 0.193 1.403 0.519 1.995l-0.011-0.022-3.062 3.062c-1.147-0.84-2.587-1.344-4.144-1.344-0.868 0-1.699 0.157-2.467 0.443l0.049-0.016-0.644-1.17c0.726-0.757 1.173-1.787 1.173-2.921 0-2.332-1.891-4.223-4.223-4.223s-4.223 1.891-4.223 4.223c0 2.332 1.891 4.223 4.223 4.223 0.306 0 0.605-0.033 0.893-0.095l-0.028 0.005 0.642 1.166c-1.685 1.315-2.758 3.345-2.758 5.627 0 0.605 0.076 1.193 0.218 1.754l-0.011-0.049-0.667 0.283c-0.78-0.904-1.927-1.474-3.207-1.474-2.334 0-4.226 1.892-4.226 4.226s1.892 4.226 4.226 4.226c2.334 0 4.226-1.892 4.226-4.226 0-0.008-0-0.017-0-0.025v0.001c-0.008-0.159-0.023-0.307-0.046-0.451l0.003 0.024 0.667-0.283c1.303 2.026 3.547 3.349 6.1 3.349 1.703 0 3.268-0.589 4.503-1.574l-0.015 0.011 2.702 2.455c-0.258 0.526-0.41 1.144-0.414 1.797v0.001c0 2.347 1.903 4.25 4.25 4.25s4.25-1.903 4.25-4.25c0-2.347-1.903-4.25-4.25-4.25v0zM8.19 5c0-0.966 0.784-1.75 1.75-1.75s1.75 0.784 1.75 1.75c0 0.966-0.784 1.75-1.75 1.75v0c-0.966-0.001-1.749-0.784-1.75-1.75v-0zM5 22.42c-0.966-0.001-1.748-0.783-1.748-1.749s0.783-1.749 1.749-1.749c0.966 0 1.748 0.782 1.749 1.748v0c-0.001 0.966-0.784 1.749-1.75 1.75h-0zM27 3.25c0.966 0 1.75 0.784 1.75 1.75s-0.784 1.75-1.75 1.75c-0.966 0-1.75-0.784-1.75-1.75v0c0.001-0.966 0.784-1.749 1.75-1.75h0zM11.19 16c0-0.001 0-0.002 0-0.003 0-2.655 2.152-4.807 4.807-4.807 1.328 0 2.53 0.539 3.4 1.409l0.001 0.001 0.001 0.001c0.87 0.87 1.407 2.072 1.407 3.399 0 2.656-2.153 4.808-4.808 4.808s-4.808-2.153-4.808-4.808c0-0 0-0 0-0v0zM27 27.75c-0.966 0-1.75-0.784-1.75-1.75s0.784-1.75 1.75-1.75c0.966 0 1.75 0.784 1.75 1.75v0c-0.001 0.966-0.784 1.749-1.75 1.75h-0z"></path> </g></svg>
        
        {hoveredIcon === 'Network Projects' && (
        <span>
            {t('projectsPage.nav.network')}
        </span>
        )}
        </motion.div>
        
        <motion.div 
        onMouseEnter={() => handleMouseEnter('Small Projects')} 
        onMouseLeave={handleMouseLeave} 
        onClick={() => setActiveComponent('small')}
        className={activeComponent === 'small' ? 'active' : ''}>
        <svg style={{ stroke: "var(--font-color)" }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M20 7H17.8486C17.3511 7 17 6.49751 17 6C17 4.34315 15.6569 3 14 3C12.3431 3 11 4.34315 11 6C11 6.49751 10.6488 7 10.1513 7H8C7.44771 7 7 7.44772 7 8V10.1513C7 10.6488 6.49751 11 6 11C4.34315 11 3 12.3431 3 14C3 15.6569 4.34315 17 6 17C6.49751 17 7 17.3511 7 17.8486V20C7 20.5523 7.44771 21 8 21L20 21C20.5523 21 21 20.5523 21 20V17.8486C21 17.3511 20.4975 17 20 17C18.3431 17 17 15.6569 17 14C17 12.3431 18.3431 11 20 11C20.4975 11 21 10.6488 21 10.1513L21 8C21 7.44772 20.5523 7 20 7Z" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path></svg>        
        {hoveredIcon === 'Small Projects' && (
            <span>
                {t('projectsPage.nav.small')}
            </span>
        )}
        </motion.div>

        <motion.div 
        onMouseEnter={() => handleMouseEnter('Other Projects')} 
        onMouseLeave={handleMouseLeave} 
        onClick={() => setActiveComponent('other')}
        className={activeComponent === 'other' ? 'active' : ''}>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ fill: "var(--font-color)" }} ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill='none' style={{ stroke: "var(--font-color)" }} strokeWidth="2" d="M9,15 L9,23 L1,23 L1,15 L9,15 Z M23,15 L23,23 L15,23 L15,15 L23,15 Z M9,1 L9,9 L1,9 L1,1 L9,1 Z M23,1 L23,9 L15,9 L15,1 L23,1 Z"></path> </g></svg>
        
        {hoveredIcon === 'Other Projects' && (
            <span>
                {t('projectsPage.nav.other')}
            </span>
        )}
        </motion.div>
      </nav>

      <main>
            <div className='MainProjectsContent'>
                <div className="projectsDomain">
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={title}
                        initial={{ y: 50 }}
                        animate={{ y: 0 }} 
                        exit={{ y: 50 }} 
                        transition={{ duration: .2 }}
                    >
                        {title}
                    </motion.h1>
                </AnimatePresence>
                </div>
            <div className='ProjectsContent'>
                {renderComponent()}
            </div>
            </div>
        </main>
    <Footer/>
    </motion.div>
  );
};

export default Transition(Projects);
