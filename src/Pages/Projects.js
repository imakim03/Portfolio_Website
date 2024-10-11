import NavBar from '../components/NavBar';
import Cursor from '../components/Cursor';
import ScrollToTopButton from '../components/scrollToTopButton';
import Footer from '../components/Footer';
import { useCustomCursor } from '../Hooks/useCustomCursor';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlogWebsite1 from '../Images/blog1.png';
import BlogWebsite2 from '../Images/blog2.png';
import BlogWebsite3 from '../Images/blog3.png';
import Portfolio1 from '../Images/portfolio1.png';
import Portfolio2 from '../Images/portfolio2.png';
import Portfolio3 from '../Images/portfolio3.png';
import ocpProject1 from '../Images/ocpProject1.png';
import ocpProject2 from '../Images/ocpProject2.png';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 
import '../ProjectsPage.css';
import '../App.css';

const blogImages = [BlogWebsite1, BlogWebsite2, BlogWebsite3];
const portfolioImages = [Portfolio1, Portfolio3];
const ocpProjectImages = [ocpProject1, ocpProject2];

const Projects = () => {
    const [activeSection, setActiveSection] = useState('blogWebsite');
    const [isOpen, setIsOpen] = useState(false);
    const [blogPhotoIndex, setBlogPhotoIndex] = useState(0);
    const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
    const [portfolioPhotoIndex, setPortfolioPhotoIndex] = useState(0);
    const [isOcpOpen, setIsOcpOpen] = useState(false);
    const [ocpIndex, setOcpIndex] = useState(0);

    const style = document.createElement('style');

    const blogWebsiteRef = useRef(null);
    const portfolioWebsiteRef = useRef(null);
    const ocpProjectRef = useRef(null);

    const sections = [
        { id: 'blogWebsite', label: 'Blog Website', ref: blogWebsiteRef },
        { id: 'portfolioWebsite', label: 'Portfolio Website', ref: portfolioWebsiteRef },
        { id: 'ocpProject', label: 'Web Application for Drilling Machine Informations', ref: ocpProjectRef }
    ];

    const { 
        isVisible,
        cursorVarient,
        variants,
        cursorEnterCardHover,
        cursorLeaveCardHover,
        cursorEnterProjectsCard,
        cursorLeaveProjectsCard,
        cursorEnterSocialsCard,
        cursorLeaveSocialsCard
    } = useCustomCursor([isOpen, isPortfolioOpen, isOcpOpen]);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveSection(sectionId);
    };

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
        <motion.div 
            initial={{ opacity: 0 }}
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
            <div className='MainProjectsContent'>
                <section id='WebDevProjects'>
                    <h1 className='projectDomain'>Web Devoloppement Projects</h1>
                    <div className='sectionContent'>
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
                            {/* Blog Website Section */}
                            <section id="blogWebsite" ref={blogWebsiteRef}>
                                <div className="sousSection blogWebsite">
                                    <a
                                        href="https://github.com/imakim03/BlogProject"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='projectTitle'
                                        onMouseEnter={cursorEnterSocialsCard}
                                        onMouseLeave={cursorLeaveSocialsCard}
                                    >
                                        <h2>Blog Website</h2>
                                        <svg 
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className='projectIcon linkIcon'
                                        >
                                            <path d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5" strokeWidth="3" strokeLinecap="round" />
                                        </svg>
                                    </a>
                                    <p>
                                        This project is a blog website built with Flask and Bootstrap. It allows users to register, log in, and post or comment on blogs. Admins can manage the posts by creating, editing, and deleting them. The main features include user authentication and a commenting system. The code integrates Flask for backend management and Bootstrap for the front-end UI.
                                    </p>
                                    <div id="Tools">
                                        <svg 
                                            className='ToolsIcon projectIcon'
                                            viewBox="0 0 48 48" 
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M36.2,26.4a1.8,1.8,0,0,0,1.4.6,2,2,0,0,0,1.4-.6L45.4,20a1.9,1.9,0,0,0,0-2.8l-3-3.1A3.7,3.7,0,0,0,43,12a4,4,0,0,0-4-4,3.7,3.7,0,0,0-2.1.6l-3.1-3a1.9,1.9,0,0,0-2.8,0L24.6,12a1.9,1.9,0,0,0,0,2.8L29,19.2l-5,5-5.4-5.4A8.7,8.7,0,0,0,20,14a9,9,0,0,0-9-9,2,2,0,0,0,0,4,5,5,0,1,1-5,5,2,2,0,0,0-4,0,9,9,0,0,0,9,9,8.7,8.7,0,0,0,4.8-1.4L21.2,27,8.6,39.6a1.9,1.9,0,0,0,0,2.8,1.9,1.9,0,0,0,2.8,0L24,29.8,36.6,42.4a1.9,1.9,0,0,0,2.8,0,1.9,1.9,0,0,0,0-2.8L26.8,27l5-5Zm-7.4-13,3.6-3.6,8.8,8.8-3.6,3.6Z"></path>
                                        </svg>
                                        Flask - SQLite - Bootstrap - Flask-WTF
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

                            {/* Portfolio Website Section */}
                            <section id="portfolioWebsite" ref={portfolioWebsiteRef}>
                                <div className="sousSection portfolioWebsite">
                                    <a
                                        href="https://github.com/imakim03/PortfolioWebsite"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='projectTitle'
                                        onMouseEnter={cursorEnterSocialsCard}
                                        onMouseLeave={cursorLeaveSocialsCard}
                                    >
                                        <h2>Portfolio Website</h2>
                                        <svg 
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className='projectIcon linkIcon'
                                        >
                                            <path d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5" strokeWidth="3" strokeLinecap="round" />
                                        </svg>
                                    </a>
                                    <p>
                                    This is my old portfolio website, hosted on GitHub, serves as a personal showcase of my projects and skills. The site is designed to present my work in an aesthetically pleasing and user-friendly manner.                            </p>
                                    <div id="Tools">
                                        <svg 
                                            className='ToolsIcon projectIcon'
                                            viewBox="0 0 48 48" 
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M36.2,26.4a1.8,1.8,0,0,0,1.4.6,2,2,0,0,0,1.4-.6L45.4,20a1.9,1.9,0,0,0,0-2.8l-3-3.1A3.7,3.7,0,0,0,43,12a4,4,0,0,0-4-4,3.7,3.7,0,0,0-2.1.6l-3.1-3a1.9,1.9,0,0,0-2.8,0L24.6,12a1.9,1.9,0,0,0,0,2.8L29,19.2l-5,5-5.4-5.4A8.7,8.7,0,0,0,20,14a9,9,0,0,0-9-9,2,2,0,0,0,0,4,5,5,0,1,1-5,5,2,2,0,0,0-4,0,9,9,0,0,0,9,9,8.7,8.7,0,0,0,4.8-1.4L21.2,27,8.6,39.6a1.9,1.9,0,0,0,0,2.8,1.9,1.9,0,0,0,2.8,0L24,29.8,36.6,42.4a1.9,1.9,0,0,0,2.8,0,1.9,1.9,0,0,0,0-2.8L26.8,27l5-5Zm-7.4-13,3.6-3.6,8.8,8.8-3.6,3.6Z"></path>
                                        </svg>
                                        HTML - CSS - JavaScript
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

                            {/* OCP Project Section */}
                            <section id="ocpProject" ref={ocpProjectRef}>
                                <div className="sousSection ocpProject">
                                    <div className='projectTitle'>
                                        <h2>Web Application for Drilling Machine Informations</h2>
                                    </div>
                                    <p>
                                        For my end-of-year project, I developed a web application that features a user-friendly graphical user interface (GUI) using React. This interface enables users to easily enter and manage drilling machine data. On the backend, I utilized Laravel to create a robust database management system, ensuring seamless data storage and retrieval.                         
                                    </p>
                                    <div id="Tools">
                                        <svg 
                                            className='ToolsIcon projectIcon'
                                            viewBox="0 0 48 48" 
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M36.2,26.4a1.8,1.8,0,0,0,1.4.6,2,2,0,0,0,1.4-.6L45.4,20a1.9,1.9,0,0,0,0-2.8l-3-3.1A3.7,3.7,0,0,0,43,12a4,4,0,0,0-4-4,3.7,3.7,0,0,0-2.1.6l-3.1-3a1.9,1.9,0,0,0-2.8,0L24.6,12a1.9,1.9,0,0,0,0,2.8L29,19.2l-5,5-5.4-5.4A8.7,8.7,0,0,0,20,14a9,9,0,0,0-9-9,2,2,0,0,0,0,4,5,5,0,1,1-5,5,2,2,0,0,0-4,0,9,9,0,0,0,9,9,8.7,8.7,0,0,0,4.8-1.4L21.2,27,8.6,39.6a1.9,1.9,0,0,0,0,2.8,1.9,1.9,0,0,0,2.8,0L24,29.8,36.6,42.4a1.9,1.9,0,0,0,2.8,0,1.9,1.9,0,0,0,0-2.8L26.8,27l5-5Zm-7.4-13,3.6-3.6,8.8,8.8-3.6,3.6Z"></path>
                                        </svg>
                                        Laravel - React.js
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
                </section>

                <section id='cloudProjects'>
                    <h1 className='card projectDomain'>Cloud Projects</h1>
                    <div className='sectionContent'>
                        {/* <div className='sidebarMenu sideBarProjects'>
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
                        </div> */}
                        <div className='scrollableContent'>
                            {/* Blog Website Section */}
                            <section id="blogWebsite" ref={blogWebsiteRef}>
                                <div className="sousSection blogWebsite">
                                    <a
                                        href="https://github.com/imakim03/BlogProject"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='projectTitle'
                                        onMouseEnter={cursorEnterSocialsCard}
                                        onMouseLeave={cursorLeaveSocialsCard}
                                    >
                                        <h2>Blog Website</h2>
                                        <svg 
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className='projectIcon linkIcon'
                                        >
                                            <path d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5" strokeWidth="3" strokeLinecap="round" />
                                        </svg>
                                    </a>
                                    <p>
                                        This project is a blog website built with Flask and Bootstrap. It allows users to register, log in, and post or comment on blogs. Admins can manage the posts by creating, editing, and deleting them. The main features include user authentication and a commenting system. The code integrates Flask for backend management and Bootstrap for the front-end UI.
                                    </p>
                                    <div id="Tools">
                                        <svg 
                                            className='ToolsIcon projectIcon'
                                            viewBox="0 0 48 48" 
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M36.2,26.4a1.8,1.8,0,0,0,1.4.6,2,2,0,0,0,1.4-.6L45.4,20a1.9,1.9,0,0,0,0-2.8l-3-3.1A3.7,3.7,0,0,0,43,12a4,4,0,0,0-4-4,3.7,3.7,0,0,0-2.1.6l-3.1-3a1.9,1.9,0,0,0-2.8,0L24.6,12a1.9,1.9,0,0,0,0,2.8L29,19.2l-5,5-5.4-5.4A8.7,8.7,0,0,0,20,14a9,9,0,0,0-9-9,2,2,0,0,0,0,4,5,5,0,1,1-5,5,2,2,0,0,0-4,0,9,9,0,0,0,9,9,8.7,8.7,0,0,0,4.8-1.4L21.2,27,8.6,39.6a1.9,1.9,0,0,0,0,2.8,1.9,1.9,0,0,0,2.8,0L24,29.8,36.6,42.4a1.9,1.9,0,0,0,2.8,0,1.9,1.9,0,0,0,0-2.8L26.8,27l5-5Zm-7.4-13,3.6-3.6,8.8,8.8-3.6,3.6Z"></path>
                                        </svg>
                                        Flask - SQLite - Bootstrap - Flask-WTF
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

                            {/* Portfolio Website Section */}
                            <section id="portfolioWebsite" ref={portfolioWebsiteRef}>
                                <div className="sousSection portfolioWebsite">
                                    <a
                                        href="https://github.com/imakim03/PortfolioWebsite"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='projectTitle'
                                        onMouseEnter={cursorEnterSocialsCard}
                                        onMouseLeave={cursorLeaveSocialsCard}
                                    >
                                        <h2>Portfolio Website</h2>
                                        <svg 
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className='projectIcon linkIcon'
                                        >
                                            <path d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5" strokeWidth="3" strokeLinecap="round" />
                                        </svg>
                                    </a>
                                    <p>
                                    This is my old portfolio website, hosted on GitHub, serves as a personal showcase of my projects and skills. The site is designed to present my work in an aesthetically pleasing and user-friendly manner.                            </p>
                                    <div id="Tools">
                                        <svg 
                                            className='ToolsIcon projectIcon'
                                            viewBox="0 0 48 48" 
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M36.2,26.4a1.8,1.8,0,0,0,1.4.6,2,2,0,0,0,1.4-.6L45.4,20a1.9,1.9,0,0,0,0-2.8l-3-3.1A3.7,3.7,0,0,0,43,12a4,4,0,0,0-4-4,3.7,3.7,0,0,0-2.1.6l-3.1-3a1.9,1.9,0,0,0-2.8,0L24.6,12a1.9,1.9,0,0,0,0,2.8L29,19.2l-5,5-5.4-5.4A8.7,8.7,0,0,0,20,14a9,9,0,0,0-9-9,2,2,0,0,0,0,4,5,5,0,1,1-5,5,2,2,0,0,0-4,0,9,9,0,0,0,9,9,8.7,8.7,0,0,0,4.8-1.4L21.2,27,8.6,39.6a1.9,1.9,0,0,0,0,2.8,1.9,1.9,0,0,0,2.8,0L24,29.8,36.6,42.4a1.9,1.9,0,0,0,2.8,0,1.9,1.9,0,0,0,0-2.8L26.8,27l5-5Zm-7.4-13,3.6-3.6,8.8,8.8-3.6,3.6Z"></path>
                                        </svg>
                                        HTML - CSS - JavaScript
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

                            {/* OCP Project Section */}
                            <section id="ocpProject" ref={ocpProjectRef}>
                                <div className="sousSection ocpProject">
                                    <div className='projectTitle'>
                                        <h2>Web Application for Drilling Machine Informations</h2>
                                    </div>
                                    <p>
                                        For my end-of-year project, I developed a web application that features a user-friendly graphical user interface (GUI) using React. This interface enables users to easily enter and manage drilling machine data. On the backend, I utilized Laravel to create a robust database management system, ensuring seamless data storage and retrieval.                         
                                    </p>
                                    <div id="Tools">
                                        <svg 
                                            className='ToolsIcon projectIcon'
                                            viewBox="0 0 48 48" 
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M36.2,26.4a1.8,1.8,0,0,0,1.4.6,2,2,0,0,0,1.4-.6L45.4,20a1.9,1.9,0,0,0,0-2.8l-3-3.1A3.7,3.7,0,0,0,43,12a4,4,0,0,0-4-4,3.7,3.7,0,0,0-2.1.6l-3.1-3a1.9,1.9,0,0,0-2.8,0L24.6,12a1.9,1.9,0,0,0,0,2.8L29,19.2l-5,5-5.4-5.4A8.7,8.7,0,0,0,20,14a9,9,0,0,0-9-9,2,2,0,0,0,0,4,5,5,0,1,1-5,5,2,2,0,0,0-4,0,9,9,0,0,0,9,9,8.7,8.7,0,0,0,4.8-1.4L21.2,27,8.6,39.6a1.9,1.9,0,0,0,0,2.8,1.9,1.9,0,0,0,2.8,0L24,29.8,36.6,42.4a1.9,1.9,0,0,0,2.8,0,1.9,1.9,0,0,0,0-2.8L26.8,27l5-5Zm-7.4-13,3.6-3.6,8.8,8.8-3.6,3.6Z"></path>
                                        </svg>
                                        Laravel - React.js
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
                </section>
            </div>
            <Footer/>
        </motion.div>
    );
}
export default Projects;