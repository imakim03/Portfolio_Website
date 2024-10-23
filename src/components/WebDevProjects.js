import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import BlogWebsite1 from '../Images/blog1.png';
import BlogWebsite2 from '../Images/blog2.png';
import BlogWebsite3 from '../Images/blog3.png';
import Portfolio1 from '../Images/portfolio1.png';
import Portfolio3 from '../Images/portfolio3.png';
import ocpProject1 from '../Images/ocpProject1.png';
import ocpProject2 from '../Images/ocpProject2.png';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 
import '../Style/ProjectsPage.css';
import '../App.css';

const blogImages = [BlogWebsite1, BlogWebsite2, BlogWebsite3];
const portfolioImages = [Portfolio1, Portfolio3];
const ocpProjectImages = [ocpProject1, ocpProject2];

const WebDevProjects = ({
    cursorEnterSocialsCard,
    cursorEnterCardHover,
    cursorEnterProjectsCard,
    cursorLeaveCardHover,
    cursorLeaveProjectsCard,
    cursorLeaveSocialsCard,
    webdevId
  }) => {
    const [activeSection, setActiveSection] = useState('blogWebsite');
    const [isOpen, setIsOpen] = useState(false);
    const [blogPhotoIndex, setBlogPhotoIndex] = useState(0);
    const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
    const [portfolioPhotoIndex, setPortfolioPhotoIndex] = useState(0);
    const [isOcpOpen, setIsOcpOpen] = useState(false);
    const [ocpIndex, setOcpIndex] = useState(0);

    const { t } = useTranslation();

    const style = document.createElement('style');

    const blogWebsiteRef = useRef(null);
    const portfolioWebsiteRef = useRef(null);
    const ocpProjectRef = useRef(null);

    const sections = [
        { id: 'blogWebsite', label: t('projectsPage.webDev.nav.blogWebsite'), ref: blogWebsiteRef },
        { id: 'portfolioWebsite', label: t('projectsPage.webDev.nav.portfolioWebsite'), ref: portfolioWebsiteRef },
        { id: 'ocpProject', label: t('projectsPage.webDev.nav.ocpProject'), ref: ocpProjectRef }
    ];    

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveSection(sectionId);
    };

    // When there is a project Id parameter 
    useEffect(() => {
        if (webdevId) {
            scrollToSection(webdevId);
        }
    }, [webdevId]);

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

    // Return to default cursor when the lightbox is open
    useEffect(() => {
        if (isPortfolioOpen || isOcpOpen || isOpen) {
            style.innerHTML = '* { cursor: default; }';
        } else {
            style.innerHTML = '* { cursor: none; }';
        }
        document.head.appendChild(style);
        
    }, [isPortfolioOpen, isOcpOpen, isOpen]);

    return (
            <section id='WebDevProjects'>  
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
                    <section id="blogWebsite" ref={blogWebsiteRef}>
                        <div className="sousSection blogWebsite">
                            <a
                                href="https://github.com/imakim03/Blog_with_users"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='projectTitle'
                                onMouseEnter={cursorEnterSocialsCard}
                                onMouseLeave={cursorLeaveSocialsCard}
                            >
                                <h2>{t('projectsPage.webDev.blogWebsite.title')}</h2>
                                <svg 
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className='projectIcon linkIcon'
                                >
                                    <path d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </a>
                            <p dangerouslySetInnerHTML={{ __html: t('projectsPage.webDev.blogWebsite.description') }} />
                            <div id="Tools">
                                <svg 
                                    className='ToolsIcon projectIcon'
                                    viewBox="0 0 48 48" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                 <path d="M36.2,26.4a1.8,1.8,0,0,0,1.4.6,2,2,0,0,0,1.4-.6L45.4,20a1.9,1.9,0,0,0,0-2.8l-3-3.1A3.7,3.7,0,0,0,43,12a4,4,0,0,0-4-4,3.7,3.7,0,0,0-2.1.6l-3.1-3a1.9,1.9,0,0,0-2.8,0L24.6,12a1.9,1.9,0,0,0,0,2.8L29,19.2l-5,5-5.4-5.4A8.7,8.7,0,0,0,20,14a9,9,0,0,0-9-9,2,2,0,0,0,0,4,5,5,0,1,1-5,5,2,2,0,0,0-4,0,9,9,0,0,0,9,9,8.7,8.7,0,0,0,4.8-1.4L21.2,27,8.6,39.6a1.9,1.9,0,0,0,0,2.8,1.9,1.9,0,0,0,2.8,0L24,29.8,36.6,42.4a1.9,1.9,0,0,0,2.8,0,1.9,1.9,0,0,0,0-2.8L26.8,27l5-5Zm-7.4-13,3.6-3.6,8.8,8.8-3.6,3.6Z"></path>   
                                </svg>
                                <p>{t('projectsPage.webDev.blogWebsite.tools')}</p>
                            </div>
                            <div className='images'>
                                {blogImages.map((img, index) => (
                                    <motion.img
                                        key={index}
                                        src={img}
                                        alt={`BlogWebsiteImage${index + 1}`}
                                        onMouseEnter={cursorEnterProjectsCard}
                                        onMouseLeave={cursorLeaveProjectsCard}
                                        onClick={() => {
                                            setBlogPhotoIndex(index);
                                            setIsOpen(true);
                                        }}
                                    />
                                ))}
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={blogImages[blogPhotoIndex]}
                                        nextSrc={blogImages[(blogPhotoIndex + 1) % blogImages.length]}
                                        prevSrc={blogImages[(blogPhotoIndex + blogImages.length - 1) % blogImages.length]}
                                        onCloseRequest={() => setIsOpen(false)}
                                        onMovePrevRequest={() =>
                                            setBlogPhotoIndex((blogPhotoIndex + blogImages.length - 1) % blogImages.length)
                                        }
                                        onMoveNextRequest={() =>
                                            setBlogPhotoIndex((blogPhotoIndex + 1) % blogImages.length)
                                        }
                                    />
                                )}
                            </div>
                        </div>
                    </section>
                
                    <section id="portfolioWebsite" ref={portfolioWebsiteRef}>
                        <div className="sousSection portfolioWebsite">
                            <a
                                href="https://github.com/imakim03/Portfolio_website"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='projectTitle'
                                onMouseEnter={cursorEnterSocialsCard}
                                onMouseLeave={cursorLeaveSocialsCard}
                            >
                                <h2>{t('projectsPage.webDev.portfolioWebsite.title')}</h2>
                                <svg 
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className='projectIcon linkIcon'
                                >
                                    <path d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </a>
                            <p dangerouslySetInnerHTML={{ __html: t('projectsPage.webDev.portfolioWebsite.description') }} />
                            <div id="Tools">
                                <svg 
                                    className='ToolsIcon projectIcon'
                                    viewBox="0 0 48 48" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M36.2,26.4a1.8,1.8,0,0,0,1.4.6,2,2,0,0,0,1.4-.6L45.4,20a1.9,1.9,0,0,0,0-2.8l-3-3.1A3.7,3.7,0,0,0,43,12a4,4,0,0,0-4-4,3.7,3.7,0,0,0-2.1.6l-3.1-3a1.9,1.9,0,0,0-2.8,0L24.6,12a1.9,1.9,0,0,0,0,2.8L29,19.2l-5,5-5.4-5.4A8.7,8.7,0,0,0,20,14a9,9,0,0,0-9-9,2,2,0,0,0,0,4,5,5,0,1,1-5,5,2,2,0,0,0-4,0,9,9,0,0,0,9,9,8.7,8.7,0,0,0,4.8-1.4L21.2,27,8.6,39.6a1.9,1.9,0,0,0,0,2.8,1.9,1.9,0,0,0,2.8,0L24,29.8,36.6,42.4a1.9,1.9,0,0,0,2.8,0,1.9,1.9,0,0,0,0-2.8L26.8,27l5-5Zm-7.4-13,3.6-3.6,8.8,8.8-3.6,3.6Z"></path>
                                </svg>
                                <p>{t('projectsPage.webDev.portfolioWebsite.tools')}</p>
                            </div>
                            <div className='images'>
                                {portfolioImages.map((img, index) => (
                                    <motion.img
                                        key={index}
                                        src={img}
                                        alt={`PortfolioImage${index + 1}`}
                                        onMouseEnter={cursorEnterProjectsCard}
                                        onMouseLeave={cursorLeaveProjectsCard}
                                        onClick={() => {
                                            setPortfolioPhotoIndex(index);
                                            setIsPortfolioOpen(true);
                                            style.innerHTML = '* { cursor: default; }';
                                            document.head.appendChild(style);
                                        }}
                                    />
                                ))}
                                {isPortfolioOpen && (
                                    <Lightbox
                                        mainSrc={portfolioImages[portfolioPhotoIndex]}
                                        nextSrc={portfolioImages[(portfolioPhotoIndex + 1) % portfolioImages.length]}
                                        prevSrc={portfolioImages[(portfolioPhotoIndex + portfolioImages.length - 1) % portfolioImages.length]}
                                        onCloseRequest={() => setIsPortfolioOpen(false)}
                                        onMovePrevRequest={() =>
                                            setPortfolioPhotoIndex((portfolioPhotoIndex + portfolioImages.length - 1) % portfolioImages.length)
                                        }
                                        onMoveNextRequest={() =>
                                            setPortfolioPhotoIndex((portfolioPhotoIndex + 1) % portfolioImages.length)
                                        }
                                    />
                                )}
                            </div>
                        </div>
                    </section>
                
                    <section id="ocpProject" ref={ocpProjectRef}>
                        <div className="sousSection ocpProject">
                            <div className='projectTitle'>
                                <h2>{t('projectsPage.webDev.drillingMachine.title')}</h2>
                            </div>
                            <p dangerouslySetInnerHTML={{ __html: t('projectsPage.webDev.drillingMachine.description') }} />
                            <div id="Tools">
                                <svg 
                                    className='ToolsIcon projectIcon'
                                    viewBox="0 0 48 48" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M36.2,26.4a1.8,1.8,0,0,0,1.4.6,2,2,0,0,0,1.4-.6L45.4,20a1.9,1.9,0,0,0,0-2.8l-3-3.1A3.7,3.7,0,0,0,43,12a4,4,0,0,0-4-4,3.7,3.7,0,0,0-2.1.6l-3.1-3a1.9,1.9,0,0,0-2.8,0L24.6,12a1.9,1.9,0,0,0,0,2.8L29,19.2l-5,5-5.4-5.4A8.7,8.7,0,0,0,20,14a9,9,0,0,0-9-9,2,2,0,0,0,0,4,5,5,0,1,1-5,5,2,2,0,0,0-4,0,9,9,0,0,0,9,9,8.7,8.7,0,0,0,4.8-1.4L21.2,27,8.6,39.6a1.9,1.9,0,0,0,0,2.8,1.9,1.9,0,0,0,2.8,0L24,29.8,36.6,42.4a1.9,1.9,0,0,0,2.8,0,1.9,1.9,0,0,0,0-2.8L26.8,27l5-5Zm-7.4-13,3.6-3.6,8.8,8.8-3.6,3.6Z"></path>
                                </svg>
                                <p>{t('projectsPage.webDev.drillingMachine.tools')}</p>
                            </div>
                            <div className='images'>
                                {ocpProjectImages.map((img, index) => (
                                    <motion.img
                                        key={index}
                                        src={img}
                                        alt={`OCPImage${index + 1}`}
                                        onMouseEnter={cursorEnterProjectsCard}
                                        onMouseLeave={cursorLeaveProjectsCard}
                                        onClick={() => {
                                            setOcpIndex(index);
                                            setIsOcpOpen(true);
                                        }}
                                    />
                                ))}
                                {isOcpOpen && (
                                    <Lightbox
                                        mainSrc={ocpProjectImages[ocpIndex]}
                                        nextSrc={ocpProjectImages[(ocpIndex + 1) % ocpProjectImages.length]}
                                        prevSrc={ocpProjectImages[(ocpIndex + ocpProjectImages.length - 1) % ocpProjectImages.length]}
                                        onCloseRequest={() => setIsOcpOpen(false)}
                                        onMovePrevRequest={() =>
                                            setOcpIndex((ocpIndex + ocpProjectImages.length - 1) % ocpProjectImages.length)
                                        }
                                        onMoveNextRequest={() =>
                                            setOcpIndex((ocpIndex + 1) % ocpProjectImages.length)
                                        }
                                    />
                                )}
                            </div>
                        </div>
                    </section>
                </div>
                

                </div>
            </AnimatePresence>                
            </section>
    );
}
export default WebDevProjects;