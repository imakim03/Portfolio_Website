import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import yesOrNo1 from '../Images/yesOrNo1.png';
import yesOrNo2 from '../Images/yesOrNo2.png';
import yesOrNo3 from '../Images/yesOrNo3.png';
import cleanDesktop1 from '../Images/cleanDesktop1.gif';
import cleanDesktop2 from '../Images/cleanDesktop2.png';
import rockPaperScissors1 from '../Images/rockPaperScissors1.gif';
import memoryGame1 from '../Images/memoryGame1.png';
import memoryGame2 from '../Images/memoryGame2.png';
import memoryGame3 from '../Images/memoryGame3.gif';
import watermarkApp1 from '../Images/watermarkApp1.png';
import watermarkApp2 from '../Images/watermarkApp2.png';
import watermarkApp3 from '../Images/watermarkApp4.png';
import watermarkApp4 from '../Images/watermarkApp3.png';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 
import '../Style/ProjectsPage.css';
import '../App.css';

const yesOrNoImages = [yesOrNo1, yesOrNo2, yesOrNo3];
const cleanDesktopImages = [cleanDesktop1, cleanDesktop2];
const rockPaperScissorsImages = [rockPaperScissors1];
const memoryGameImages = [memoryGame1, memoryGame2, memoryGame3];
const watermarkAppImages = [watermarkApp1, watermarkApp2, watermarkApp3, watermarkApp4];

const SmallProjects = ({
    cursorEnterSocialsCard,
    cursorEnterCardHover,
    cursorEnterProjectsCard,
    cursorLeaveCardHover,
    cursorLeaveProjectsCard,
    cursorLeaveSocialsCard,
    smallId
  }) => {
    const { t } = useTranslation();

    const [activeSection, setActiveSection] = useState('yesOrNo');
    const [isYesOrNoOpen, setIsYesOrNoOpen] = useState(false);
    const [yesOrNoIndex, setYesOrNoIndex] = useState(0);
    const [isCleanDesktopOpen, setIsCleanDesktopOpen] = useState(false);
    const [cleanDesktopIndex, setCleanDesktopIndex] = useState(0);
    const [isRockPaperScissorsOpen, setIsRockPaperScissorsOpen] = useState(false);
    const [rockPaperScissorsIndex, setRockPaperScissorsIndex] = useState(0);
    const [isMemoryGameOpen, setIsMemoryGameOpen] = useState(false);
    const [memoryIndex, setmemoryIndex] = useState(0);
    const [isWatermarkAppOpen, setIsWatermarkAppOpen] = useState(false);
    const [watermarkIndex, setWatermarkIndex] = useState(0);

    const style = document.createElement('style');

    const yesOrNoRef = useRef(null);
    const desktopCleanerRef = useRef(null);
    const rockPaperScissorsRef = useRef(null);
    const memoryGameRef = useRef(null);
    const watermarkAppRef = useRef(null);

    const sections = [
        { id: 'yesOrNo', label: t('projectsPage.small.nav.yesOrNo'), ref: yesOrNoRef },
        { id: 'desktopCleaner', label: t('projectsPage.small.nav.desktopCleaner'), ref: desktopCleanerRef },
        { id: 'rockPaperScissors', label: t('projectsPage.small.nav.rockPaperScissors'), ref: rockPaperScissorsRef },
        { id: 'memoryGame', label: t('projectsPage.small.nav.memoryGame'), ref: memoryGameRef },
        { id: 'watermarkApp', label: t('projectsPage.small.nav.watermarkApp'), ref: watermarkAppRef }
    ];

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveSection(sectionId);
    };

    // When there is a project Id parameter 
    useEffect(() => {
        if (smallId) {
            scrollToSection(smallId);
        }
    }, [smallId]);

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
        if (isCleanDesktopOpen || isRockPaperScissorsOpen || isYesOrNoOpen || isMemoryGameOpen || isWatermarkAppOpen) {
            style.innerHTML = '* { cursor: default; }';
        } else {
            style.innerHTML = '* { cursor: none; }';
        }
        document.head.appendChild(style);
        
    }, [isCleanDesktopOpen, isRockPaperScissorsOpen, isYesOrNoOpen, isMemoryGameOpen, isWatermarkAppOpen]);

    return (
            <section id='SmallProjects'>  
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

                        <section id="yesOrNo" ref={yesOrNoRef}>
                            <div className="sousSection yesOrNo">
                                <a
                                    href="https://github.com/imakim03/yes-or-no-wheel-app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='projectTitle'
                                    onMouseEnter={cursorEnterSocialsCard}
                                    onMouseLeave={cursorLeaveSocialsCard}
                                >
                                    <h2>{t('projectsPage.small.yesOrNo.title')}</h2>
                                    <svg 
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className='projectIcon linkIcon'
                                    >
                                        <path d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </a>
                                <p  dangerouslySetInnerHTML={{ __html: t('projectsPage.small.yesOrNo.description') }}></p>
                                <div id="Tools">
                                    <svg 
                                        className='ToolsIcon projectIcon'
                                        viewBox="0 0 48 48" 
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M36.2,26.4a1.8,1.8,0,0,0,1.4.6,2,2,0,0,0,1.4-.6L45.4,20a1.9,1.9,0,0,0,0-2.8l-3-3.1A3.7,3.7,0,0,0,43,12a4,4,0,0,0-4-4,3.7,3.7,0,0,0-2.1.6l-3.1-3a1.9,1.9,0,0,0-2.8,0L24.6,12a1.9,1.9,0,0,0,0,2.8L29,19.2l-5,5-5.4-5.4A8.7,8.7,0,0,0,20,14a9,9,0,0,0-9-9,2,2,0,0,0,0,4,5,5,0,1,1-5,5,2,2,0,0,0-4,0,9,9,0,0,0,9,9,8.7,8.7,0,0,0,4.8-1.4L21.2,27,8.6,39.6a1.9,1.9,0,0,0,0,2.8,1.9,1.9,0,0,0,2.8,0L24,29.8,36.6,42.4a1.9,1.9,0,0,0,2.8,0,1.9,1.9,0,0,0,0-2.8L26.8,27l5-5Zm-7.4-13,3.6-3.6,8.8,8.8-3.6,3.6Z"></path>
                                    </svg>
                                    <p>Electron.js - HTML - CSS - JavaScript </p>
                                </div>
                                <div className='images smallerImages'>
                                    {yesOrNoImages.map((img, index) => (
                                        <motion.img
                                            key={index}
                                            src={img}
                                            alt={`YesOrNoImage${index + 1}`}
                                            onMouseEnter={cursorEnterProjectsCard}
                                            onMouseLeave={cursorLeaveProjectsCard}
                                            onClick={() => {
                                                setYesOrNoIndex(index);
                                                setIsYesOrNoOpen(true);
                                            }}
                                        />
                                    ))}
                                    {isYesOrNoOpen && (
                                        <Lightbox
                                            mainSrc={yesOrNoImages[yesOrNoIndex]}
                                            nextSrc={yesOrNoImages[(yesOrNoIndex + 1) % yesOrNoImages.length]}
                                            prevSrc={yesOrNoImages[(yesOrNoIndex + yesOrNoImages.length - 1) % yesOrNoImages.length]}
                                            onCloseRequest={() => setIsYesOrNoOpen(false)}
                                            onMovePrevRequest={() =>
                                                setYesOrNoIndex((yesOrNoIndex + yesOrNoImages.length - 1) % yesOrNoImages.length)
                                            }
                                            onMoveNextRequest={() =>
                                                setYesOrNoIndex((yesOrNoIndex + 1) % yesOrNoImages.length)
                                            }
                                        />
                                    )}
                                </div>
                            </div>
                        </section>

                        <section id="desktopCleaner" ref={desktopCleanerRef}>
                            <div className="sousSection desktopCleaner">
                                <h2>{t('projectsPage.small.desktopCleaner.title')}</h2>
                                <p  dangerouslySetInnerHTML={{ __html: t('projectsPage.small.desktopCleaner.description') }}>
                                </p>                        
                                <div id="Tools">
                                    <svg 
                                        className='ToolsIcon projectIcon'
                                        viewBox="0 0 48 48" 
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M36.2,26.4a1.8,1.8,0,0,0,1.4.6,2,2,0,0,0,1.4-.6L45.4,20a1.9,1.9,0,0,0,0-2.8l-3-3.1A3.7,3.7,0,0,0,43,12a4,4,0,0,0-4-4,3.7,3.7,0,0,0-2.1.6l-3.1-3a1.9,1.9,0,0,0-2.8,0L24.6,12a1.9,1.9,0,0,0,0,2.8L29,19.2l-5,5-5.4-5.4A8.7,8.7,0,0,0,20,14a9,9,0,0,0-9-9,2,2,0,0,0,0,4,5,5,0,1,1-5,5,2,2,0,0,0-4,0,9,9,0,0,0,9,9,8.7,8.7,0,0,0,4.8-1.4L21.2,27,8.6,39.6a1.9,1.9,0,0,0,0,2.8,1.9,1.9,0,0,0,2.8,0L24,29.8,36.6,42.4a1.9,1.9,0,0,0,2.8,0,1.9,1.9,0,0,0,0-2.8L26.8,27l5-5Zm-7.4-13,3.6-3.6,8.8,8.8-3.6,3.6Z"></path>
                                    </svg>
                                    <p>Python - Shutil - OS - Subprocess - win10 - Toast</p>
                                </div>
                                <div className='images'>
                                    {cleanDesktopImages.map((img, index) => (
                                        <motion.img
                                            key={index}
                                            src={img}
                                            alt={`DesktopCleanerImage${index + 1}`}
                                            onMouseEnter={cursorEnterProjectsCard}
                                            onMouseLeave={cursorLeaveProjectsCard}
                                            onClick={() => {
                                                setCleanDesktopIndex(index);
                                                setIsCleanDesktopOpen(true);
                                                style.innerHTML = '* { cursor: default; }';
                                                document.head.appendChild(style);
                                            }}
                                        />
                                    ))}
                                    {isCleanDesktopOpen && (
                                        <Lightbox
                                            mainSrc={cleanDesktopImages[cleanDesktopIndex]}
                                            nextSrc={cleanDesktopImages[(cleanDesktopIndex + 1) % cleanDesktopImages.length]}
                                            prevSrc={cleanDesktopImages[(cleanDesktopIndex + cleanDesktopImages.length - 1) % cleanDesktopImages.length]}
                                            onCloseRequest={() => setIsCleanDesktopOpen(false)}
                                            onMovePrevRequest={() =>
                                                setCleanDesktopIndex((cleanDesktopIndex + cleanDesktopImages.length - 1) % cleanDesktopImages.length)
                                            }
                                            onMoveNextRequest={() =>
                                                setCleanDesktopIndex((cleanDesktopIndex + 1) % cleanDesktopImages.length)
                                            }
                                        />
                                    )}
                                </div>
                            </div>
                        </section>

                        <section id="rockPaperScissors" ref={rockPaperScissorsRef}>
                            <div className="sousSection rockPaperScissors">
                                <div className='projectTitle'>
                                <a
                                    href="https://github.com/aloukikjoshi/JavaScript-Mini-Projects"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='projectTitle'
                                    onMouseEnter={cursorEnterSocialsCard}
                                    onMouseLeave={cursorLeaveSocialsCard}
                                >
                                    <h2>{t('projectsPage.small.rockPaperScissors.title')}</h2>
                                    <svg 
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className='projectIcon linkIcon'
                                    >
                                        <path d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </a>
                                </div>
                                <p  dangerouslySetInnerHTML={{ __html: t('projectsPage.small.rockPaperScissors.description') }}>
                                </p>
                                <div id="Tools">
                                    <svg 
                                        className='ToolsIcon projectIcon'
                                        viewBox="0 0 48 48" 
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M36.2,26.4a1.8,1.8,0,0,0,1.4.6,2,2,0,0,0,1.4-.6L45.4,20a1.9,1.9,0,0,0,0-2.8l-3-3.1A3.7,3.7,0,0,0,43,12a4,4,0,0,0-4-4,3.7,3.7,0,0,0-2.1.6l-3.1-3a1.9,1.9,0,0,0-2.8,0L24.6,12a1.9,1.9,0,0,0,0,2.8L29,19.2l-5,5-5.4-5.4A8.7,8.7,0,0,0,20,14a9,9,0,0,0-9-9,2,2,0,0,0,0,4,5,5,0,1,1-5,5,2,2,0,0,0-4,0,9,9,0,0,0,9,9,8.7,8.7,0,0,0,4.8-1.4L21.2,27,8.6,39.6a1.9,1.9,0,0,0,0,2.8,1.9,1.9,0,0,0,2.8,0L24,29.8,36.6,42.4a1.9,1.9,0,0,0,2.8,0,1.9,1.9,0,0,0,0-2.8L26.8,27l5-5Zm-7.4-13,3.6-3.6,8.8,8.8-3.6,3.6Z"></path>
                                    </svg>
                                    <p>HTML - CSS - JavaScript</p>
                                </div>
                                <div className='images'>
                                    {rockPaperScissorsImages.map((img, index) => (
                                        <motion.img
                                            key={index}
                                            src={img}
                                            alt={`RockPaperScissorsImage${index + 1}`}
                                            onMouseEnter={cursorEnterProjectsCard}
                                            onMouseLeave={cursorLeaveProjectsCard}
                                            onClick={() => {
                                                setRockPaperScissorsIndex(index);
                                                setIsRockPaperScissorsOpen(true);
                                            }}
                                        />
                                    ))}
                                    {isRockPaperScissorsOpen && (
                                        <Lightbox
                                            mainSrc={rockPaperScissorsImages[rockPaperScissorsIndex]}
                                            nextSrc={rockPaperScissorsImages[(rockPaperScissorsIndex + 1) % rockPaperScissorsImages.length]}
                                            prevSrc={rockPaperScissorsImages[(rockPaperScissorsIndex + rockPaperScissorsImages.length - 1) % rockPaperScissorsImages.length]}
                                            onCloseRequest={() => setIsRockPaperScissorsOpen(false)}
                                            onMovePrevRequest={() =>
                                                setRockPaperScissorsIndex((rockPaperScissorsIndex + rockPaperScissorsImages.length - 1) % rockPaperScissorsImages.length)
                                            }
                                            onMoveNextRequest={() =>
                                                setRockPaperScissorsIndex((rockPaperScissorsIndex + 1) % rockPaperScissorsImages.length)
                                            }
                                        />
                                    )}
                                </div>
                            </div>
                        </section>

                        <section id="memoryGame" ref={memoryGameRef}>
                            <div className="sousSection memoryGame">
                                <h2>{t('projectsPage.small.memoryGame.title')}</h2>
                                <p dangerouslySetInnerHTML={{ __html: t('projectsPage.small.memoryGame.description') }}>
                                </p>                        
                                <div id="Tools">
                                    <svg 
                                        className='ToolsIcon projectIcon'
                                        viewBox="0 0 48 48" 
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M36.2,26.4a1.8,1.8,0,0,0,1.4.6,2,2,0,0,0,1.4-.6L45.4,20a1.9,1.9,0,0,0,0-2.8l-3-3.1A3.7,3.7,0,0,0,43,12a4,4,0,0,0-4-4,3.7,3.7,0,0,0-2.1.6l-3.1-3a1.9,1.9,0,0,0-2.8,0L24.6,12a1.9,1.9,0,0,0,0,2.8L29,19.2l-5,5-5.4-5.4A8.7,8.7,0,0,0,20,14a9,9,0,0,0-9-9,2,2,0,0,0,0,4,5,5,0,1,1-5,5,2,2,0,0,0-4,0,9,9,0,0,0,9,9,8.7,8.7,0,0,0,4.8-1.4L21.2,27,8.6,39.6a1.9,1.9,0,0,0,0,2.8,1.9,1.9,0,0,0,2.8,0L24,29.8,36.6,42.4a1.9,1.9,0,0,0,2.8,0,1.9,1.9,0,0,0,0-2.8L26.8,27l5-5Zm-7.4-13,3.6-3.6,8.8,8.8-3.6,3.6Z"></path>
                                    </svg>
                                    <p>Android Studio - Kotlin</p>
                                </div>
                                <div className='images smallerImages'>
                                    {memoryGameImages.map((img, index) => (
                                        <motion.img
                                            key={index}
                                            src={img}
                                            alt={`MemoryGameImage${index + 1}`}
                                            onMouseEnter={cursorEnterProjectsCard}
                                            onMouseLeave={cursorLeaveProjectsCard}
                                            onClick={() => {
                                                setmemoryIndex(index);
                                                setIsMemoryGameOpen(true);
                                                style.innerHTML = '* { cursor: default; }';
                                                document.head.appendChild(style);
                                            }}
                                        />
                                    ))}
                                    {isMemoryGameOpen && (
                                        <Lightbox
                                            mainSrc={memoryGameImages[memoryIndex]}
                                            nextSrc={memoryGameImages[(memoryIndex + 1) % memoryGameImages.length]}
                                            prevSrc={memoryGameImages[(memoryIndex + memoryGameImages.length - 1) % memoryGameImages.length]}
                                            onCloseRequest={() => setIsMemoryGameOpen(false)}
                                            onMovePrevRequest={() =>
                                                setmemoryIndex((memoryIndex + memoryGameImages.length - 1) % memoryGameImages.length)
                                            }
                                            onMoveNextRequest={() =>
                                                setmemoryIndex((memoryIndex + 1) % memoryGameImages.length)
                                            }
                                        />
                                    )}
                                </div>
                            </div>
                        </section>

                        <section id="watermarkApp" ref={watermarkAppRef}>
                            <div className="sousSection watermarkApp">
                                <a
                                    href="https://github.com/imakim03/watermark_app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='projectTitle'
                                    onMouseEnter={cursorEnterSocialsCard}
                                    onMouseLeave={cursorLeaveSocialsCard}
                                >
                                    <h2>{t('projectsPage.small.watermarkApp.title')}</h2>
                                    <svg 
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className='projectIcon linkIcon'
                                    >
                                        <path d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </a>
                                <p dangerouslySetInnerHTML={{ __html: t('projectsPage.small.watermarkApp.description') }}>
                                </p>
                                <div id="Tools">
                                    <svg 
                                        className='ToolsIcon projectIcon'
                                        viewBox="0 0 48 48" 
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M36.2,26.4a1.8,1.8,0,0,0,1.4.6,2,2,0,0,0,1.4-.6L45.4,20a1.9,1.9,0,0,0,0-2.8l-3-3.1A3.7,3.7,0,0,0,43,12a4,4,0,0,0-4-4,3.7,3.7,0,0,0-2.1.6l-3.1-3a1.9,1.9,0,0,0-2.8,0L24.6,12a1.9,1.9,0,0,0,0,2.8L29,19.2l-5,5-5.4-5.4A8.7,8.7,0,0,0,20,14a9,9,0,0,0-9-9,2,2,0,0,0,0,4,5,5,0,1,1-5,5,2,2,0,0,0-4,0,9,9,0,0,0,9,9,8.7,8.7,0,0,0,4.8-1.4L21.2,27,8.6,39.6a1.9,1.9,0,0,0,0,2.8,1.9,1.9,0,0,0,2.8,0L24,29.8,36.6,42.4a1.9,1.9,0,0,0,2.8,0,1.9,1.9,0,0,0,0-2.8L26.8,27l5-5Zm-7.4-13,3.6-3.6,8.8,8.8-3.6,3.6Z"></path>
                                    </svg>
                                    <p>Python - Tkinter - Pillow - OS</p>
                                </div>
                                <div className='images smallerImages'>
                                    {watermarkAppImages.map((img, index) => (
                                        <motion.img
                                            key={index}
                                            src={img}
                                            alt={`YesOrNoImage${index + 1}`}
                                            onMouseEnter={cursorEnterProjectsCard}
                                            onMouseLeave={cursorLeaveProjectsCard}
                                            onClick={() => {
                                                setWatermarkIndex(index);
                                                setIsWatermarkAppOpen(true);
                                            }}
                                        />
                                    ))}
                                    {isWatermarkAppOpen && (
                                        <Lightbox
                                            mainSrc={watermarkAppImages[watermarkIndex]}
                                            nextSrc={watermarkAppImages[(watermarkIndex + 1) % watermarkAppImages.length]}
                                            prevSrc={watermarkAppImages[(watermarkIndex + watermarkAppImages.length - 1) % watermarkAppImages.length]}
                                            onCloseRequest={() => setIsWatermarkAppOpen(false)}
                                            onMovePrevRequest={() =>
                                                setWatermarkIndex((watermarkIndex + watermarkAppImages.length - 1) % watermarkAppImages.length)
                                            }
                                            onMoveNextRequest={() =>
                                                setWatermarkIndex((watermarkIndex + 1) % watermarkAppImages.length)
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
export default SmallProjects;