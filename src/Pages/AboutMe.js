import NavBar from '../components/NavBar';
import Cursor from '../components/Cursor';
import Footer from '../components/Footer';
import { useCustomCursor } from '../Hooks/useCustomCursor';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../AboutMePage.css';
import '../App.css';
import { Link } from 'react-router-dom';

function AboutMePage() {
    const { 
        isVisible,
        cursorVarient,
        variants,
        cursorEnterCardHover,
        cursorLeaveCardHover,
    } = useCustomCursor();

    const [activeSection, setActiveSection] = useState('about');

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

            <div className='MainContent'>
                {/* Left Sidebar Menu */}
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

                {/* Scrollable Content */}
                <div className='scrollableContent'>
                    <section id="about" ref={aboutRef}>
                        <h2>About Me</h2>
                        <p>
                            I am Imane Kimissi, a passionate future engineer in Network Systems and Programmable Services, 
                            expected to graduate in June 2025. I have strong experience in web development, network security, 
                            and cloud computing, along with a love for creative design and problem-solving. My work focuses 
                            on developing efficient, secure, and user-friendly solutions. I thrive on challenges that push 
                            my technical and creative boundaries, whether it's designing an elegant user interface or optimizing 
                            network systems. Beyond tech, I enjoy philosophy, music, and exploring the intersections between 
                            technology and creativity.
                        </p>
                    </section>

                    <section id="motivations" ref={motivationsRef}>
                        <h2>Motivations</h2>
                        <p>
                            My primary motivation stems from a deep-seated desire to bridge the gap between technology and 
                            human-centered design. I believe that technology should serve as a tool to enhance people's lives, 
                            making their experiences more efficient and meaningful. This drives me to pursue projects that not only 
                            challenge my technical skills but also have a positive impact on users and society as a whole.
                        </p>
                        <p>
                            I am inspired by teams that foster creativity, encourage autonomy, and prioritize continuous learning. 
                            I find great fulfillment in environments where collaboration thrives and where every team member is 
                            valued for their unique contributions. My ideal team is one that embraces diversity and nurtures mentorship, 
                            creating a culture of shared growth and innovation.
                        </p>
                        <p>
                            While I have a clear vision of the kind of projects I want to work on—particularly in cloud computing, 
                            network security, and autonomous systems—I also value the input of others and believe in the power of 
                            collective problem-solving. I am excited to learn from my peers while also sharing my own knowledge and 
                            insights. Together, I believe we can push technological boundaries and create solutions that truly make a difference.
                        </p>
                    </section>

                    <section id="education" ref={educationRef}>
                        <h2>Education</h2>
                        <p>
                            - **Engineer’s Degree in Network Systems and Programmable Services**, expected June 2025  
                            <i>Currently pursuing studies with a focus on network systems, programming, and cloud infrastructure.</i>  
                            - Coursework and independent studies in **Python, Cloud Computing, Network Security**, and **Web Development**.  
                            - Participation in national competitions such as the **Huawei ICT Competition** to enhance my expertise in network systems.
                        </p>
                    </section>

                    <section id="skills" ref={skillsRef}>
                        <h2>Skills</h2>
                        <div className='skill' style={{border: 'solid 1px #FF2D20'}}>
                            <svg width="60px" height="60px" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="0.00064">
                                <path fill="#FF2D20" fillRule="evenodd" clipRule="evenodd" d="M47.982 23.453c.012.044.018.089.018.134v7.071a.516.516 0 0 1-.26.448l-5.934 3.417v6.772a.517.517 0 0 1-.258.447L29.16 48.874c-.029.016-.06.026-.09.037-.012.004-.023.011-.035.015a.519.519 0 0 1-.264 0c-.015-.004-.027-.012-.041-.017-.028-.01-.058-.02-.085-.035l-12.386-7.132a.517.517 0 0 1-.259-.447V20.082c0-.046.006-.091.018-.135.004-.015.013-.028.018-.043.01-.027.019-.055.033-.08.01-.017.024-.03.035-.046.015-.02.029-.042.046-.06.015-.015.034-.026.051-.039.019-.015.035-.032.057-.044l6.194-3.566a.517.517 0 0 1 .515 0l6.194 3.566c.021.013.039.029.057.044.017.013.036.024.05.038.019.02.032.04.047.061.011.016.026.029.035.046.015.025.023.053.034.08.005.015.014.028.017.044a.52.52 0 0 1 .019.134v13.25l5.16-2.972v-6.773a.52.52 0 0 1 .019-.134c.004-.016.012-.03.018-.044.01-.027.019-.055.033-.08.01-.017.024-.03.035-.046.015-.02.028-.042.046-.06.015-.015.034-.025.05-.038.02-.016.037-.033.057-.045l6.195-3.566a.516.516 0 0 1 .515 0l6.194 3.566c.022.013.038.03.058.044.016.013.034.024.05.039.017.018.03.04.046.06.011.016.025.03.034.046.015.025.024.053.034.08.006.015.014.028.018.044zm-1.014 6.907v-5.88L44.8 25.728l-2.994 1.724v5.88l5.162-2.972zm-6.194 10.637v-5.884l-2.945 1.682-8.41 4.8v5.94l11.355-6.538zM17.032 20.975v20.022l11.355 6.537v-5.938l-5.932-3.357-.002-.002-.003-.001c-.02-.012-.036-.028-.055-.043-.016-.012-.035-.023-.049-.037l-.001-.002c-.017-.016-.029-.036-.043-.054-.013-.017-.028-.032-.038-.05l-.001-.002c-.012-.02-.019-.043-.027-.065-.009-.019-.02-.037-.025-.058-.006-.025-.007-.05-.01-.076-.003-.02-.008-.038-.008-.058V23.946L19.2 22.222l-2.168-1.247zm5.678-3.863-5.16 2.97 5.159 2.97 5.16-2.97-5.16-2.97h.001zm2.684 18.537 2.993-1.723V20.975l-2.167 1.247-2.994 1.724v12.951l2.168-1.248zM41.29 20.617l-5.16 2.97 5.16 2.97 5.158-2.97-5.158-2.97zm-.517 6.835-2.994-1.724-2.167-1.248v5.88l2.993 1.723 2.168 1.249v-5.88zm-11.872 13.25 7.568-4.32 3.783-2.16-5.156-2.968-5.936 3.418-5.41 3.115 5.151 2.915z"></path>
                            </svg>
                        </div>
                        <div className='skill' style={{border: 'solid 1px #53C1DE'}}>
                            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#53C1DE" d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"></path>
                            </svg>
                        </div>
                        <div className='skill' style={{border: 'solid 1px #FF2D20'}}>
                        <svg 
                            width="60px" 
                            height="60px" 
                            fill="#000000" 
                            viewBox="0 0 32 32" 
                            version="1.1" 
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path d="M14.923 8.080c-0.025 0.072-0.141 0.061-0.207 0.082-0.059 0.031-0.107 0.085-0.175 0.085-0.062 0-0.162-0.025-0.17-0.085-0.012-0.082 0.11-0.166 0.187-0.166 0.050-0.024 0.108-0.037 0.169-0.037 0.056 0 0.109 0.011 0.157 0.032l-0.003-0.001c0.022 0.009 0.038 0.030 0.038 0.055 0 0.003-0 0.005-0.001 
                            0.008l0-0v0.025h0.004zM15.611 8.080v-0.027c-0.008-0.025 0.016-0.052 0.036-0.062 0.046-0.020 0.1-0.032 0.157-0.032 0.061 0 0.119 0.014 0.17 0.038l-0.002-0.001c0.079 0 0.2 0.084 0.187 0.169-0.007 0.061-0.106 0.082-0.169 0.082-0.069 0-0.115-0.054-0.176-0.085-0.065-0.023-0.182-0.010-0.204-0.081zM16.963 
                            10.058c-0.532 0.337-1.161 0.574-1.835 0.666l-0.024 0.003c-0.606-0.035-1.157-0.248-1.607-0.588l0.007 0.005c-0.192-0.167-0.35-0.335-0.466-0.419-0.205-0.167-0.18-0.416-0.092-0.416 0.136 0.020 0.161 0.167 0.249 0.25 0.12 0.082 0.269 0.25 0.45 0.416 0.397 0.328 0.899 0.541 1.45 0.583l0.009 0.001c0.654-0.057 
                            1.249-0.267 1.763-0.592l-0.016 0.010c0.244-0.169 0.556-0.417 0.81-0.584 0.195-0.17 0.186-0.334 0.349-0.334 0.16 0.020 0.043 0.167-0.184 0.415-0.246 0.188-0.527 0.381-0.818 0.56l-0.044 0.025zM8.017 21.397h0.012c0.069 0 0.137 0.007 0.203 0.019l-0.007-0.001c0.544 0.14 0.992 0.478 1.273 0.931l0.005 0.009 
                            1.137 2.079 0.004 0.004c0.457 0.773 0.948 1.442 1.497 2.059l-0.011-0.013c0.49 0.52 0.82 1.196 0.909 1.946l0.002 0.016v0.008c-0.012 0.817-0.613 1.491-1.396 1.616l-0.009 0.001c-0.2 0.031-0.432 0.048-0.667 0.048-0.857 0-1.659-0.233-2.347-0.64l0.021 0.012c-1.053-0.441-2.275-0.714-3.555-0.752l-0.015-0c-0.372-0.025-0.696-0.215-0.901-0.496l-0.002-0.003c-0.054-0.174-0.085-0.374-0.085-0.582
                             0-0.35 0.088-0.679 0.244-0.966l-0.005 0.011v-0.005l0.003-0.004c0.041-0.188 0.065-0.405 0.065-0.627 0-0.274-0.036-0.539-0.104-0.791l0.005 0.021c-0.041-0.15-0.065-0.323-0.065-0.502 0-0.242 0.043-0.473 0.123-0.687l-0.004 0.014c0.2-0.417 0.495-0.5 0.862-0.666 0.438-0.133 0.819-0.334 1.151-0.593l-0.008 
                             0.006h0.002v-0.003c0.32-0.335 0.556-0.751 0.835-1.047 0.195-0.249 0.492-0.41 0.827-0.42l0.002-0zM21.531 21.336c-0.001 0.017-0.001 0.038-0.001 0.059 0 0.743 0.449 1.381 1.091 1.658l0.012 0.005c0.048 0.003 0.104 0.005 0.16 0.005 0.831 0 1.575-0.371 2.075-0.957l0.003-0.004 0.264-0.012c0.053-0.008 0.114-0.012 0.176-0.012 0.341 0 0.652 0.132 0.883 0.348l-0.001-0.001 0.004 0.004c0.249 0.301 0.422 0.673 0.487 1.082l0.002 0.013c0.055 0.505 0.238 0.96 0.517 1.34l-0.005-0.008c0.416 0.356 0.705 0.85 0.793 1.411l0.002 0.013 0.004-0.009v0.022l-0.004-0.015c-0.019 0.327-0.231 0.495-0.622 0.744-1.184 0.497-2.201 1.158-3.077 1.968l0.007-0.006c-0.608 0.792-1.501 1.339-2.523 1.486l-0.021 0.002c-0.074 0.010-0.16 0.016-0.247 0.016-0.768 0-1.428-0.464-1.716-1.126l-0.005-0.012-0.006-0.004c-0.093-0.286-0.146-0.615-0.146-0.956 0-0.416 0.079-0.813 0.224-1.178l-0.008 0.022c0.234-0.668 0.435-1.466 0.568-2.288l0.011-0.083c0.016-0.812 0.104-1.593 0.258-2.35l-0.014 0.083c0.085-0.518 0.121-0.937 0.168-1.484 0.009-0.161 0.016-0.348 0.016-0.538 0-0.065 0-0.13-0.002-0.195l0.001 0.01zM14.483 11.554c0 0.052-0.004 0.103-0.011 0.152l0.001-0.009v0.007c0 0.062-0.004 0.12-0.012 0.177l0.001-0.009c-0.040 0.5-0.364 0.934-0.851 1.097l-0.008 0.003c-0.079 0.027-0.17 0.042-0.267 0.042-0.574 0-1.039-0.465-1.039-1.039 0-0.057 0.004-0.114 0.012-0.17l-0.001 0.009c0.040-0.5 0.364-0.934 0.851-1.097l0.008-0.003c0.075-0.025 0.162-0.039 0.252-0.039 0.575 0 1.04 0.465 1.04 1.04v0z"></path>
                            </svg>
                        </div>

                        <div className='skill' style={{border: 'solid 1px #FFCA28'}}>
                        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="2" width="28" height="28" fill="#FFCA28"></rect> 
                            <path d="M19 25.2879L21.0615 23.9237C21.2231 24.4313 22.2462 25.6368 23.5385 25.6368C24.8308 25.6368 25.4308 24.931 25.4308 24.463C25.4308 23.1878 24.1112 22.7382 23.4774 22.5223C23.374 22.4871 23.289 22.4581 23.2308 22.4328C23.2009 22.4198 23.1558 22.4025 23.0979 22.3804C22.393 22.1111 19.7923 21.1175 19.7923 18.2373C19.7923 15.065 22.8538 14.7002 23.5462 14.7002C23.9991 14.7002 26.1769 14.7557 27.2615 16.7939L25.2615 18.1898C24.8231 17.3015 24.0946 17.0081 23.6462 17.0081C22.5385 17.0081 22.3077 17.8201 22.3077 18.1898C22.3077 19.227 23.5112 19.6919 24.5273 20.0844C24.7932 20.1871 25.0462 20.2848 25.2615 20.3866C26.3692 20.91 28 21.7666 28 24.463C28 25.8136 26.8672 28.0002 24.0154 28.0002C20.1846 28.0002 19.1692 25.7003 19 25.2879Z" fill="#3E3E3E"></path> 
                            <path d="M9 25.5587L11.1487 24.1953C11.317 24.7026 11.9713 25.638 12.9205 25.638C13.8698 25.638 14.3557 24.663 14.3557 24.1953V15.0002H16.9982V24.1953C17.041 25.4636 16.3376 28.0002 13.2332 28.0002C10.379 28.0002 9.19242 26.3039 9 25.5587Z" fill="#3E3E3E"></path> 
                        </svg>
                        </div>

                        <div className='skill' style={{border: 'solid 1px #1172B8'}}>
                        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path> 
                            <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path> 
                            <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"></path> 
                        </svg>
                        </div>

                        <div className='skill' style={{border: 'solid 1px #E44D26'}}>
                        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"></path> 
                            <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"></path> 
                            <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"></path> 
                        </svg>
                        </div>

                        <div className='skill' style={{border: 'solid 1px #563D7C'}}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.98488 2C3.61546 2 2.60217 3.19858 2.64753 4.49844C2.69105 5.74725 2.63451 7.36461 2.22732 8.68359C1.81892 10.0064 1.1282 10.8444 0 10.952V12.1666C1.1282 12.2742 1.81892 13.1122 2.22732 14.4351C2.63451 15.754 2.69105 17.3714 2.64753 18.6202C2.60217 19.9199 3.61546 21.1186 4.98508 21.1186H19.0169C20.3864 21.1186 21.3995 19.9201 21.3541 18.6202C21.3106 17.3714 21.3671 15.754 21.7743 14.4351C22.1829 13.1122 22.8718 12.2742 24 12.1666V10.952C22.8718 10.8444 22.1829 10.0064 21.7743 8.68359C21.3671 7.36481 21.3106 5.74725 21.3541 4.49844C21.3995 3.19878 20.3864 2 19.0169 2H4.98468H4.98488ZM16.2712 13.7687C16.2712 15.5586 14.9361 16.6441 12.7206 16.6441H8.94915C8.84127 16.6441 8.7378 16.6012 8.66152 16.5249C8.58523 16.4486 8.54237 16.3452 8.54237 16.2373V6.88136C8.54237 6.77347 8.58523 6.67001 8.66152 6.59372C8.7378 6.51743 8.84127 6.47458 8.94915 6.47458H12.6991C14.5464 6.47458 15.7588 7.47525 15.7588 9.01166C15.7588 10.09 14.9433 11.0555 13.9041 11.2245V11.2809C15.3187 11.4361 16.2712 12.4156 16.2712 13.7687ZM12.3094 7.76407H10.1589V10.8015H11.9701C13.3702 10.8015 14.1423 10.2377 14.1423 9.2299C14.1423 8.28556 13.4784 7.76407 12.3094 7.76407ZM10.1589 12.0068V15.3542H12.3885C13.8462 15.3542 14.6184 14.7692 14.6184 13.6699C14.6184 12.6578 13.8462 12.0068 12.3654 12.0068H10.1589Z" fill="white"></path> 
                        </svg>
                        </div>

                    </section>

                    <section id="experience" ref={experienceRef}>
                        <h2>Experience</h2>
                        <p>
                            - **Intern at OCP**, developed a web application that integrates React and Laravel for managing drilling machine information.  
                            Created a user-friendly interface with automatic database population and options for data modification and inspection.
                        </p>
                        <Link to='/projects'>
                            <motion.div
                                onMouseEnter = {cursorEnterCardHover}
                                onMouseLeave = {cursorLeaveCardHover}
                                className='card nextButton'
                                >
                                    View Projects
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

            {/* Footer */}
            <Footer />
        </motion.div>
    );
}

export default AboutMePage;
