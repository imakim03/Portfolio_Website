import NavBar from '../Components/NavBar';
import Cursor from '../Components/Cursor';
import Footer from '../Components/Footer';
import { useCustomCursor } from '../Hooks/useCustomCursor';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import react from '../Images/SkillsImages/react.png';
import laravel from '../Images/SkillsImages/laravel.png';
import php from '../Images/SkillsImages/php.png';
import html from '../Images/SkillsImages/html.png';
import css from '../Images/SkillsImages/css.png';
import javaScript from '../Images/SkillsImages/javaScript.png';
import nodeJs from '../Images/SkillsImages/nodeJs.png';
import mySql from '../Images/SkillsImages/mySql.png';
import flask from '../Images/SkillsImages/flask.png';
import ajax from '../Images/SkillsImages/ajax.png';
import jinja from '../Images/SkillsImages/jinja.png';
import bootstrap from '../Images/SkillsImages/bootstarp.png';
import beautifulSoup from '../Images/SkillsImages/beautifulSoup.png';
import requests from '../Images/SkillsImages/requests.webp';
import docker from '../Images/SkillsImages/docker.png';
import ansible from '../Images/SkillsImages/ansible.png';
import k8s from '../Images/SkillsImages/k8s.png';
import git from '../Images/SkillsImages/git.png';
import github from '../Images/SkillsImages/github.png';
import tensorflow from '../Images/SkillsImages/tensorflow.png';
import sklearn from '../Images/SkillsImages/sklearn.png';
import zeek from '../Images/SkillsImages/zeek.png';
import electronJs from '../Images/SkillsImages/electronJs.webp';
import expressJs from '../Images/SkillsImages/expressJs.png';
import firebase from '../Images/SkillsImages/fireBase.png';
import selenium from '../Images/SkillsImages/selenium.png';
import pandas from '../Images/SkillsImages/pandas.png';
import linux from '../Images/SkillsImages/linux.png';
import powerpoint from '../Images/SkillsImages/powerPoint.webp';
import python from '../Images/SkillsImages/python.webp';
import word from '../Images/SkillsImages/word.png';
import latex from '../Images/SkillsImages/latex.png';
import c from '../Images/SkillsImages/c.png';
import cPlus from '../Images/SkillsImages/c++.png';
import figma from '../Images/SkillsImages/figma.webp';
import illustrator from '../Images/SkillsImages/illustrator.jpg';
import photoshop from '../Images/SkillsImages/photoshop.png';
import canva from '../Images/SkillsImages/canva.png';
import vsCode from '../Images/SkillsImages/vsCode.png';
import notion from '../Images/SkillsImages/notion.webp';
import aws from '../Images/SkillsImages/aws.png';
import azure from '../Images/SkillsImages/azure.png';
import cisco from '../Images/SkillsImages/cisco.png';
import activeDirectory from '../Images/SkillsImages/activeDirectory.webp';
import csv from '../Images/SkillsImages/csv.png';
import json from '../Images/SkillsImages/json.jpeg';
import sqlAlchemy from '../Images/SkillsImages/SQLalchemy.png';
import sqlite from '../Images/SkillsImages/SQLite.png';
import matplotlib from '../Images/SkillsImages/matplotlib.png';
import seaborn from '../Images/SkillsImages/seaborn.png';
import numpy from '../Images/SkillsImages/numpy.webp';
import tkinter from '../Images/SkillsImages/tkinter.png';
import jupyter from '../Images/SkillsImages/jupyter.png';
import restApi from '../Images/SkillsImages/restAPI.png';
import packetTracer from '../Images/SkillsImages/packetTracer.png';
import excel from '../Images/SkillsImages/excel.webp';
import kotlin from '../Images/SkillsImages/kotlin.png';
import androidStudio from '../Images/SkillsImages/android_studio.png';
import Transition from '../Components/Transition';
import '../Style/AboutMePage.css';
import '../Style/SideBarMenu.css';
import '../App.css';

function AboutMePage() {
    const { 
        isVisible,
        cursorVarient,
        variants,
        cursorEnterCardHover,
        cursorLeaveCardHover
    } = useCustomCursor();

    const [activeSection, setActiveSection] = useState('about');
    
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const { t } = useTranslation();

    const aboutRef = useRef(null);
    const motivationsRef = useRef(null);
    const educationRef = useRef(null);
    const skillsRef = useRef(null);
    const experienceRef = useRef(null);

    const sections = [
        { id: 'about', label: 'About Me', ref: aboutRef },
        { id: 'motivations', label: 'Motivations', ref: motivationsRef },
        { id: 'education', label: 'Education', ref: educationRef },
        { id: 'skills', label: 'Skills', ref: skillsRef },
        { id: 'experience', label: 'Experience', ref: experienceRef }
    ];

    const skills = [
        { src: html, name: 'HTML', borderColor: '#F16529' },
        { src: css, name: 'CSS', borderColor: '#33AADD' },
        { src: javaScript, name: 'JavaScript', borderColor: '#ebcf00' },
        { src: react, name: 'React', borderColor: '#53C1DE' },
        { src: bootstrap, name: 'Bootstrap', borderColor: '#563D7C' },
        { src: ajax, name: 'AJAX', borderColor: '#4495D0' },
        { src: electronJs, name: 'Electron.js', borderColor: '#47848F' },
    
        { src: nodeJs, name: 'Node.js', borderColor: '#3FA92D' },
        { src: expressJs, name: 'Express.js', borderColor: '#ebcf00' },
        { src: laravel, name: 'Laravel', borderColor: '#FF2D20' },
        { src: php, name: 'PHP', borderColor: '#8993be' },
        { src: flask, name: 'Flask', borderColor: '#000000' },
        { src: jinja, name: 'Jinja', borderColor: '#575757' },

        {src: androidStudio, name: "Android Studio", borderColor: '#4889F4'},
        {src: kotlin, name: 'Kotlin', borderColor: '#6D74E1'},
        {src: firebase, name: 'Firebase', borderColor:"#ffa712"},

        {src: linux, name: 'Linux', borderColor: '#F8BF11'},
    
        { src: mySql, name: 'MySQL', borderColor: '#5d87a1' },
        { src: sqlite, name: 'SQLite', borderColor: '#3E6E9B' },
        { src: sqlAlchemy, name: 'SQLAlchemy', borderColor: '#FF2D20' },
        { src: csv, name: 'CSV', borderColor: '#3FA92D' },
        { src: json, name: 'JSON', borderColor: '#000000' },
    
        { src: docker, name: 'Docker', borderColor: '#2396ED' },
        { src: ansible, name: 'Ansible', borderColor: '#000000' },
        { src: k8s, name: 'Kubernetes', borderColor: '#326CE5' },
        { src: aws, name: 'AWS', borderColor: '#FF9900' },
        { src: azure, name: 'Azure', borderColor: '#007FFF' },
    
        { src: git, name: 'Git', borderColor: '#EE513B' },
        { src: github, name: 'GitHub', borderColor: '#000000' },
    
        { src: tensorflow, name: 'TensorFlow', borderColor: '#ED8E24' },
        { src: sklearn, name: 'scikit-learn', borderColor: '#F89C3F' },
        { src: pandas, name: 'Pandas', borderColor: '#150458' },
        { src: matplotlib, name: 'Matplotlib', borderColor: '#11557C' },
        { src: seaborn, name: 'Seaborn', borderColor: '#8993be' },
        { src: numpy, name: 'NumPy', borderColor: '#08B5EC' },
        { src: jupyter, name: 'Jupyter', borderColor: '#F37626' },
    
        { src: zeek, name: 'Zeek', borderColor: '#08B5EC' },
        { src: cisco, name: 'Cisco', borderColor: '#FF2D20' },
        { src: packetTracer, name: 'Packet Tracer', borderColor: '#43B02A' },
        { src: activeDirectory, name: 'Active Directory', borderColor: '#4B8BBE' },
    
        { src: beautifulSoup, name: 'Beautiful Soup', borderColor: '#000000' },
        { src: requests, name: 'Requests', borderColor: '#000000' },
        { src: selenium, name: 'Selenium', borderColor: '#43B02A' },
    
        { src: python, name: 'Python', borderColor: '#3572A5' },
        { src: c, name: 'C', borderColor: '#00599C' },
        { src: cPlus, name: 'C++', borderColor: '#00599C' },
    
        { src: figma, name: 'Figma', borderColor: '#F24E1E' },
        { src: canva, name: 'Canva', borderColor: '#2D9BD8' },
        { src: illustrator, name: 'Illustrator', borderColor: '#FF9A00' },
        { src: photoshop, name: 'Photoshop', borderColor: '#00599C' },
    
        { src: vsCode, name: 'VSCode', borderColor: '#007ACC' },
        { src: notion, name: 'Notion', borderColor: '#000000' },
        { src: powerpoint, name: 'PowerPoint', borderColor: '#D04A21' },
        { src: excel, name: 'Excel', borderColor: '#43B02A' },
        { src: word, name: 'Word', borderColor: '#2B579A' },
        { src: latex, name: 'LaTeX', borderColor: '#000000' },
    
        { src: tkinter, name: 'Tkinter', borderColor: '#aaaaaa' },
        { src: restApi, name: 'REST API', borderColor: '#08B5EC' }
    ];    

    const scrollableContentRef = useRef(null);

    useEffect(() => {
        const scrollableContent = scrollableContentRef.current;
        const scrollArrow = document.getElementById('scrollArrow');
    
        const handleScroll = () => {
            scrollArrow.classList.add('hide');
        };
    
        if (scrollableContent) {
          scrollableContent.addEventListener('scroll', handleScroll);
        }
    
        return () => {
          if (scrollableContent) {
            scrollableContent.removeEventListener('scroll', handleScroll);
          }
        };
      }, []);
    

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

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const sectionId = hash.substring(1);
            scrollToSection(sectionId);
        }
    }, []);

    const [activeIndex, setActiveIndex] = useState(2);

    const toggleDescription = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} 
        className="aboutMeContainer pageContainer">
            <Cursor
                style={{ display: isVisible ? 'block' : 'none' }}
                variants={variants}
                cursorVarient={cursorVarient}
            />

            <NavBar
                cursorEnterCardHover={cursorEnterCardHover}
                cursorLeaveCardHover={cursorLeaveCardHover}
            />

            <div className='MainContentContainer'>
                <div className='MainContent'>
                    <div class="scroll-arrow" id="scrollArrow">&#42780;</div>
                <div className='sidebarMenu' >
                    <ul>
                        {sections.map(section => (
                            <motion.li
                                onMouseEnter = {cursorEnterCardHover}
                                onMouseLeave = {cursorLeaveCardHover}
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={ activeSection === section.id ? 'activeSection'  : ''}
                            >
                                {section.label}
                            </motion.li>
                        ))}
                    </ul>
                </div>

                <div className='scrollableContent' ref={scrollableContentRef}>
                    <section id="about" ref={aboutRef}>
                        <div>
                            <h2>{t('aboutMePage.aboutMe')} </h2>
                            <p dangerouslySetInnerHTML={{ __html: t('aboutMePage.aboutMeText') }}>
                            </p>
                            <p className='PFEIntenship'><div className='dot'></div>{t('aboutMePage.PFE')}</p>
                        </div>
                        
                    </section>

                    <section id="motivations" ref={motivationsRef}>
                        <h2>Motivations</h2>
                        <p dangerouslySetInnerHTML={{ __html: t('aboutMePage.motivationsText1') }}>
                        </p>
                        <p dangerouslySetInnerHTML={{ __html: t('aboutMePage.motivationsText2') }}>
                        </p>
                    </section>

                    <section id="education" ref={educationRef}>
                        <h2>{t('aboutMePage.education')}</h2>
                        <div className="educationSectionItem"  onMouseEnter={cursorEnterCardHover} onMouseLeave={cursorLeaveCardHover}  onClick={() => toggleDescription(0)}>
                            <svg onMouseEnter={cursorEnterCardHover} onMouseLeave={cursorLeaveCardHover} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 15.5002H7M6 18.5002H7M17 18.5002H18M17 15.5002H18M10 22.0002V18.0002C10 16.8956 10.8954 16.0002 12 16.0002C13.1046 16.0002 14 16.8956 14 18.0002V22.0002M12 5H16.84C16.896 5 16.924 5 16.9454 4.9891C16.9642 4.97951 16.9795 4.96422 16.9891 4.9454C17 4.92401 17 4.89601 17 4.84V2.16C17 2.10399 17 2.07599 16.9891 2.0546C16.9795 2.03578 16.9642 2.02049 16.9454 2.0109C16.924 2 16.896 2 16.84 2H12.16C12.104 2 12.076 2 12.0546 2.0109C12.0358 2.02049 12.0205 2.03578 12.0109 2.0546C12 2.07599 12 2.10399 12 2.16V5ZM12 5V7.69092M12.03 12.25H12.0375M12 7.69092C12.1947 7.69092 12.3895 7.71935 12.5779 7.77623C13.0057 7.90536 13.3841 8.24585 14.1407 8.92681L17 11.5002L18.5761 11.8942C19.4428 12.1109 19.8761 12.2192 20.1988 12.4608C20.4834 12.674 20.7061 12.9592 20.8439 13.2871C21 13.6587 21 14.1053 21 14.9987V18.8002C21 19.9203 21 20.4804 20.782 20.9082C20.5903 21.2845 20.2843 21.5905 19.908 21.7822C19.4802 22.0002 18.9201 22.0002 17.8 22.0002H6.2C5.0799 22.0002 4.51984 22.0002 4.09202 21.7822C3.71569 21.5905 3.40973 21.2845 3.21799 20.9082C3 20.4804 3 19.9203 3 18.8002V14.9987C3 14.1053 3 13.6587 3.15613 13.2871C3.29388 12.9592 3.51657 12.674 3.80124 12.4608C4.12389 12.2192 4.55722 12.1109 5.42388 11.8942L7 11.5002L9.85931 8.92681C10.6159 8.24584 10.9943 7.90536 11.4221 7.77623C11.6105 7.71935 11.8053 7.69092 12 7.69092ZM12.03 13C11.6158 13 11.28 12.6642 11.28 12.25C11.28 11.8358 11.6158 11.5 12.03 11.5C12.4442 11.5 12.78 11.8358 12.78 12.25C12.78 12.6642 12.4442 13 12.03 13Z" 
                                style={{ stroke: "var(--font-color)" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                            </svg>
                            <div className='description'>
                                <h4 onMouseEnter={cursorEnterCardHover} onMouseLeave={cursorLeaveCardHover}>{t('aboutMePage.bacTitle')}</h4>
                                <div className={`moreDetails ${activeIndex === 0 ? 'active' : ''}`}>
                                    <p className='educationDate'>{t('aboutMePage.bacGraduated')}</p>
                                    <ul className='educationDescription'>
                                        {t('aboutMePage.bacDetails', { returnObjects: true }).map(detail => (
                                            <li key={detail}>{detail}</li>
                                        ))}
                                    </ul> 
                                </div>
                                
                            </div>
                            <span onMouseEnter={cursorEnterCardHover} onMouseLeave={cursorLeaveCardHover}>{activeIndex === 0 ? '-' : '+'}</span>
                        </div>

                        <div className='sperator'></div>

                        <div className="educationSectionItem" onClick={() => toggleDescription(1)}>
                            <svg onMouseEnter={cursorEnterCardHover} onMouseLeave={cursorLeaveCardHover} style={{ fill: "var(--font-color)" }} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 6.28a1.23 1.23 0 0 0-.62-1.07l-6.74-4a1.27 1.27 0 0 0-1.28 0l-6.75 4a1.25 1.25 0 0 0 0 2.15l1.92 1.12v2.81a1.28 1.28 0 0 0 .62 1.09l4.25 2.45a1.28 1.28 0 0 0 1.24 0l4.25-2.45a1.28 1.28 0 0 0 .62-1.09V8.45l1.24-.73v2.72H16V6.28zm-3.73 5L8 13.74l-4.22-2.45V9.22l3.58 2.13a1.29 1.29 0 0 0 1.28 0l3.62-2.16zM8 10.27l-6.75-4L8 2.26l6.75 4z"></path>
                            </svg>
                            <div className='description'>
                                <h4 onMouseEnter={cursorEnterCardHover} onMouseLeave={cursorLeaveCardHover}>{t('aboutMePage.prepCycleTitle')}</h4>
                                <div className={`moreDetails ${activeIndex === 1 ? 'active' : ''}`}>
                                    <p className='educationDate'>{t('aboutMePage.prepCycleDate')}</p>
                                    <ul className='educationDescription'>
                                        {t('aboutMePage.prepCycleDetails', { returnObjects: true }).map(detail => (
                                            <li key={detail}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                            </div>
                            <span onMouseEnter={cursorEnterCardHover} onMouseLeave={cursorLeaveCardHover}>{activeIndex === 1 ? '-' : '+'}</span>
                        </div>

                        <div className='sperator'></div>

                        <div className="educationSectionItem" onClick={() => toggleDescription(2)}>
                            <svg onMouseEnter={cursorEnterCardHover} onMouseLeave={cursorLeaveCardHover}  style={{ fill: "var(--font-color)" }} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 6.28a1.23 1.23 0 0 0-.62-1.07l-6.74-4a1.27 1.27 0 0 0-1.28 0l-6.75 4a1.25 1.25 0 0 0 0 2.15l1.92 1.12v2.81a1.28 1.28 0 0 0 .62 1.09l4.25 2.45a1.28 1.28 0 0 0 1.24 0l4.25-2.45a1.28 1.28 0 0 0 .62-1.09V8.45l1.24-.73v2.72H16V6.28zm-3.73 5L8 13.74l-4.22-2.45V9.22l3.58 2.13a1.29 1.29 0 0 0 1.28 0l3.62-2.16zM8 10.27l-6.75-4L8 2.26l6.75 4z"></path>
                            </svg>
                            <div className='description'>
                            <h4 onMouseEnter={cursorEnterCardHover} onMouseLeave={cursorLeaveCardHover} >
                                {t('aboutMePage.engineerDegreeTitle')}
                            </h4>
                            <div className={`moreDetails ${activeIndex === 2 ? 'active' : ''}`}>
                                <p className='educationDate'>{t('aboutMePage.engineerDegreeDate')}</p>
                                <ul className='educationDescription'>
                                <li>{t('aboutMePage.engineerDegreeCoursework')}</li>
                                <li>
                                    {t('aboutMePage.currentlyWorkingOn')} 
                                    <Link to={`/projects?domain=network&networkId=Fiveg`}>
                                    <strong
                                        onMouseEnter={cursorEnterCardHover}
                                        onMouseLeave={cursorLeaveCardHover}>
                                        &nbsp;{t('aboutMePage.projects.fiveGNetwork')}&nbsp;
                                    </strong>
                                    </Link>
                                    {t('aboutMePage.and')}
                                    <Link to={`/projects?domain=other&otherId=iotProject`}>
                                    <strong
                                        onMouseEnter={cursorEnterCardHover}
                                        onMouseLeave={cursorLeaveCardHover}>
                                        &nbsp;{t('aboutMePage.projects.iotProject')}
                                    </strong>
                                    </Link>
                                </li>
                                </ul>
                            </div>
                            </div>
                            <span onMouseEnter={cursorEnterCardHover} onMouseLeave={cursorLeaveCardHover} >{activeIndex === 2 ? '-' : '+'}</span>
                        </div>
                    </section>


                    <section id="skills" ref={skillsRef}>
                        <h2>{t('aboutMePage.skills')}</h2>
                        <div className='skillImages'>
                            {skills.map((skill, index) => (
                                <div 
                                    key={index} 
                                    className='skillContainer'
                                    onMouseEnter={() => setHoveredSkill(skill.name)}
                                    onMouseLeave={() => setHoveredSkill(null)}
                                    style={{
                                        border: `2px dashed ${skill.borderColor}`,
                                    }}
                                >
                                    <img 
                                        src={skill.src}
                                        alt={`skillImage${index + 1}`}
                                        className='skillImage'
                                    />
                                        <span className='skillTooltip' style={{color: `${skill.borderColor}`}}>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="experience" ref={experienceRef}>
                        <h2>{t("aboutMePage.experience")}</h2>
                        <h4>⁘ {t("aboutMePage.internAtOCP")}</h4>
                        <div>
                            <u>
                            <a onMouseEnter={cursorEnterCardHover} onMouseLeave={cursorLeaveCardHover} target='_blank' href='https://www.ocpgroup.ma/' className='experienceDetails'>
                                <svg style={{ stroke: "var(--font-color)" }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 20H21V10C21 8.89543 20.1046 8 19 8H15M11 16H11.01M17 16H17.01M7 16H7.01M11 12H11.01M17 12H17.01M7 12H7.01M11 8H11.01M7 8H7.01M15 20V6C15 4.89543 14.1046 4 13 4H5C3.89543 4 3 4.89543 3 6V20H15Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                {t("aboutMePage.ocpGroup")}
                            </a></u>
                            <p className='experienceDetails'>
                                <svg style={{ fill: "var(--font-color)" }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-7.59V4h2v5.59l3.95 3.95-1.41 1.41L9 10.41z"></path>
                                </svg>
                                {t("aboutMePage.july2024Sep2024")}
                            </p>
                        </div>

                        <h4>{t("aboutMePage.projectOverview")}</h4>
                        <p dangerouslySetInnerHTML={{ __html: t('aboutMePage.internshipDescription') }}>
                        </p>
                        <span>
                        <Link to={`/projects?domain=webdev&webdevId=ocpProject`}>
                                <span
                                    onMouseEnter={cursorEnterCardHover}
                                    onMouseLeave={cursorLeaveCardHover}>
                                    <strong>{t("aboutMePage.seeMoreAboutTheProject")}</strong>
                                </span>
                            </Link>
                        </span>
                        <Link to='/projects'>
                            <motion.div
                                onMouseEnter={cursorEnterCardHover}
                                onMouseLeave={cursorLeaveCardHover}
                                className='card nextButton'>
                                {t("aboutMePage.viewProjects")}
                                <svg 
                                    viewBox="0 0 24 24" 
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 12H18M18 12L13 7M18 12L13 17" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </motion.div>
                        </Link>
                    </section>
                </div>
                </div>
            </div>

            <Footer />
        </motion.div>
    );
}

export default Transition(AboutMePage);
