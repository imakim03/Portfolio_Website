import NavBar from '../Components/NavBar';
import Cursor from '../Components/Cursor';
import ScrollToTopButton from '../Components/scrollToTopButton';
import Footer from '../Components/Footer';
import SocialMediaCards from '../Cards/SocialCard';
import { useCustomCursor } from '../Hooks/useCustomCursor';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Transition from '../Components/Transition';
import '../Style/ContactPage.css';
import '../App.css';

function ContactPage() {
    const { 
        isVisible,
        cursorVarient,
        variants,
        cursorEnterCardHover,
        cursorLeaveCardHover,
        cursorEnterSocialsCard,
        cursorLeaveSocialsCard
    } = useCustomCursor();

    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [confirmMessage, setConfirmMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState({ text: '', type: '' });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const xhr = new XMLHttpRequest();
        
        xhr.open("POST", process.env.REACT_APP_FORMSPREE_ENDPOINT);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    setResponseMessage({ text: t('contactPage.messageSuccess'), type: 'success' });
                } else {
                    setResponseMessage({ text: t('contactPage.messageError'), type: 'error' });
                }
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
                setTimeout(() => setResponseMessage({ text: '', type: '' }), 3000);
            }
        };
        xhr.send(new FormData(e.target));
    };

    return(
        <motion.div 
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`projectsPageContainer pageContainer ${document.fullscreenElement ? 'fullscreenContent' : ''}`}
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
            <div className='MainContactContent'>
                {responseMessage.text && (
                    <div className={`responseMessage ${responseMessage.type} card`}>
                        {responseMessage.text}
                    </div>
                )}
                <p className='contact'>{t('contactPage.leaveMessage')}</p>
                <div className="contactContainer">
                    <form onSubmit={handleSubmit} className="contactForm">
                        <div className="formGroup">
                            <label htmlFor="subject">{t('contactPage.subject')}</label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="formColumns">
                            <div className="column1">
                                <div className="formGroup">
                                    <label htmlFor="name">{t('contactPage.name')} ⁎</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="formGroup">
                                    <label htmlFor="email">{t('contactPage.email')} ⁎</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="column2">
                                <div className="formGroup">
                                    <label htmlFor="message">{t('contactPage.message')} ⁎</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                            onMouseEnter={cursorEnterCardHover}
                            onMouseLeave={cursorLeaveCardHover}
                            type="submit"
                            className="submitButton card2"
                        >
                            {t('contactPage.sendMessage')}
                        </button>
                    </form>
                    {confirmMessage && <div id="confirm_msg">{confirmMessage}</div>}
                </div>
                <div className='socials'>
                    <p>{t('contactPage.orGetInTouch')}</p>
                    <SocialMediaCards
                        cursorEnterSocialsCard={cursorEnterSocialsCard}
                        cursorLeaveSocialsCard={cursorLeaveSocialsCard}
                    />
                </div>
            </div>

            <Footer/>
        </motion.div>
    );
}

export default Transition(ContactPage);
