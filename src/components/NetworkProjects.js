import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import 'react-image-lightbox/style.css'; 
import '../Style/ProjectsPage.css';
import '../App.css';

const NetwrokProjects = ({
    cursorEnterCardHover,
    cursorLeaveCardHover,
    networkId
  }) => {
    const [activeSection, setActiveSection] = useState('Fiveg');

    const { t } = useTranslation();

    const fourgNetworkRef = useRef(null);
    const FivegNetworkRef = useRef(null);
    const idsRef = useRef(null);
    const vpnServerRef = useRef(null);

    const sections = [
        { id: 'Fiveg', label: t('projectsPage.network.nav.Fiveg'), ref: FivegNetworkRef },
        { id: 'openVPN', label: t('projectsPage.network.nav.openVPN'), ref: vpnServerRef },
        { id: 'ids', label: t('projectsPage.network.nav.ids'), ref: idsRef },
        { id: 'Fourg', label: t('projectsPage.network.nav.Fourg'), ref: fourgNetworkRef }
    ];

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveSection(sectionId);
    };

    // When there is a project Id parameter 
    useEffect(() => {
        if (networkId) {
            scrollToSection(networkId);
        }
    }, [networkId]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => {
            if (section.ref.current) {
                observer.observe(section.ref.current);
            }
        });

        return () => {
            sections.forEach((section) => {
                if (section.ref.current) {
                    observer.unobserve(section.ref.current);
                }
            });
        };
    }, [sections]);

    return (
        <section d='NetworkProjects'>    
        <AnimatePresence>
        <div 
            className='sectionContent'
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
                <div className='sidebarMenu sideBarProjects'>
                <ul>
                    {sections.map(section => (
                        <motion.li
                            onMouseEnter={cursorEnterCardHover}
                            onMouseLeave={cursorLeaveCardHover}
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={activeSection === section.id ? 'activeSection' : ''}
                        >
                            {section.label}
                        </motion.li>
                    ))}
                </ul>
                </div>
                <div className='scrollableContent'>

                    <section id="Fiveg" ref={FivegNetworkRef}>
                        <div className="sousSection Fiveg">
                            <div className='projectTitle'>
                                <h2>{t('projectsPage.network.Fiveg')}</h2>
                            </div>
                            <p dangerouslySetInnerHTML={{ __html: t('projectsPage.network.FivegDescription')}}>
                            </p>
                            <div id="Tools">
                                <svg 
                                    className='ToolsIcon projectIcon'
                                    viewBox="0 0 48 48" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M36.2,26.4a1.8,1.8,0,0,0,1.4.6,2,2,0,0,0,1.4-.6L45.4,20a1.9,1.9,0,0,0,0-2.8l-3-3.1A3.7,3.7,0,0,0,43,12a4,4,0,0,0-4-4,3.7,3.7,0,0,0-2.1.6l-3.1-3a1.9,1.9,0,0,0-2.8,0L24.6,12a1.9,1.9,0,0,0,0,2.8L29,19.2l-5,5-5.4-5.4A8.7,8.7,0,0,0,20,14a9,9,0,0,0-9-9,2,2,0,0,0,0,4,5,5,0,1,1-5,5,2,2,0,0,0-4,0,9,9,0,0,0,9,9,8.7,8.7,0,0,0,4.8-1.4L21.2,27,8.6,39.6a1.9,1.9,0,0,0,0,2.8,1.9,1.9,0,0,0,2.8,0L24,29.8,36.6,42.4a1.9,1.9,0,0,0,2.8,0,1.9,1.9,0,0,0,0-2.8L26.8,27l5-5Zm-7.4-13,3.6-3.6,8.8,8.8-3.6,3.6Z"></path>
                                </svg>
                                <p>{t('projectsPage.network.toolsFiveg')}</p>
                            </div>
                        </div>
                    </section>

                    <section id="openVPN" ref={vpnServerRef}>
                        <div className="sousSection openVPN">
                            <div className='projectTitle'>
                                <h2>{t('projectsPage.network.openVPN')}</h2>
                            </div>
                            <p dangerouslySetInnerHTML={{ __html: t('projectsPage.network.openVPNDescription') }}>
                            </p>
                            <div id="Tools">
                                <svg 
                                    className='ToolsIcon projectIcon'
                                    viewBox="0 0 48 48" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M36.2,26.4a1.8,1.8,0,0,0,1.4.6,2,2,0,0,0,1.4-.6L45.4,20a1.9,1.9,0,0,0,0-2.8l-3-3.1A3.7,3.7,0,0,0,43,12a4,4,0,0,0-4-4,3.7,3.7,0,0,0-2.1.6l-3.1-3a1.9,1.9,0,0,0-2.8,0L24.6,12a1.9,1.9,0,0,0,0,2.8L29,19.2l-5,5-5.4-5.4A8.7,8.7,0,0,0,20,14a9,9,0,0,0-9-9,2,2,0,0,0,0,4,5,5,0,1,1-5,5,2,2,0,0,0-4,0,9,9,0,0,0,9,9,8.7,8.7,0,0,0,4.8-1.4L21.2,27,8.6,39.6a1.9,1.9,0,0,0,0,2.8,1.9,1.9,0,0,0,2.8,0L24,29.8,36.6,42.4a1.9,1.9,0,0,0,2.8,0,1.9,1.9,0,0,0,0-2.8L26.8,27l5-5Zm-7.4-13,3.6-3.6,8.8,8.8-3.6,3.6Z"></path>
                                </svg>
                                <p>{t('projectsPage.network.toolsOpenVPN')}</p>
                            </div>
                        </div>
                    </section>

                    <section id="ids" ref={idsRef}>
                        <div className="sousSection ids">
                            <div className='projectTitle'>
                                <h2>{t('projectsPage.network.ids')}</h2>
                            </div>
                            <p dangerouslySetInnerHTML={{ __html: t('projectsPage.network.idsDescription') }}>
                            </p>
                            <div id="Tools">
                                <svg 
                                    className='ToolsIcon projectIcon'
                                    viewBox="0 0 48 48" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M36.2,26.4a1.8,1.8,0,0,0,1.4.6,2,2,0,0,0,1.4-.6L45.4,20a1.9,1.9,0,0,0,0-2.8l-3-3.1A3.7,3.7,0,0,0,43,12a4,4,0,0,0-4-4,3.7,3.7,0,0,0-2.1.6l-3.1-3a1.9,1.9,0,0,0-2.8,0L24.6,12a1.9,1.9,0,0,0,0,2.8L29,19.2l-5,5-5.4-5.4A8.7,8.7,0,0,0,20,14a9,9,0,0,0-9-9,2,2,0,0,0,0,4,5,5,0,1,1-5,5,2,2,0,0,0-4,0,9,9,0,0,0,9,9,8.7,8.7,0,0,0,4.8-1.4L21.2,27,8.6,39.6a1.9,1.9,0,0,0,0,2.8,1.9,1.9,0,0,0,2.8,0L24,29.8,36.6,42.4a1.9,1.9,0,0,0,2.8,0,1.9,1.9,0,0,0,0-2.8L26.8,27l5-5Zm-7.4-13,3.6-3.6,8.8,8.8-3.6,3.6Z"></path>
                                </svg>
                                <p>{t('projectsPage.network.toolsIDS')}</p>
                            </div>
                        </div>
                    </section>

                    <section id="Fourg" ref={fourgNetworkRef}>
                        <div className="sousSection Fourg">
                            <div className='projectTitle'>
                                <h2>{t('projectsPage.network.Fourg')}</h2>
                            </div>
                            <p dangerouslySetInnerHTML={{ __html: t('projectsPage.network.FourgDescription') }}>
                            </p>
                            <div id="Tools">
                                <svg 
                                    className='ToolsIcon projectIcon'
                                    viewBox="0 0 48 48" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M36.2,26.4a1.8,1.8,0,0,0,1.4.6,2,2,0,0,0,1.4-.6L45.4,20a1.9,1.9,0,0,0,0-2.8l-3-3.1A3.7,3.7,0,0,0,43,12a4,4,0,0,0-4-4,3.7,3.7,0,0,0-2.1.6l-3.1-3a1.9,1.9,0,0,0-2.8,0L24.6,12a1.9,1.9,0,0,0,0,2.8L29,19.2l-5,5-5.4-5.4A8.7,8.7,0,0,0,20,14a9,9,0,0,0-9-9,2,2,0,0,0,0,4,5,5,0,1,1-5,5,2,2,0,0,0-4,0,9,9,0,0,0,9,9,8.7,8.7,0,0,0,4.8-1.4L21.2,27,8.6,39.6a1.9,1.9,0,0,0,0,2.8,1.9,1.9,0,0,0,2.8,0L24,29.8,36.6,42.4a1.9,1.9,0,0,0,2.8,0,1.9,1.9,0,0,0,0-2.8L26.8,27l5-5Zm-7.4-13,3.6-3.6,8.8,8.8-3.6,3.6Z"></path>
                                </svg>
                                <p>{t('projectsPage.network.toolsFourg')}</p>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        </AnimatePresence>              
        </section>
    );
}
export default NetwrokProjects;