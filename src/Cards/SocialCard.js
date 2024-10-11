import React from 'react';
import { motion } from 'framer-motion';

const SocialMediaCards = ({ cursorEnterSocialsCard, cursorLeaveSocialsCard }) => {
  return (
    <div className='colFour'>
      <div className='socialIconsCard'>
        <div className='social'>
          <motion.a 
            onMouseEnter={cursorEnterSocialsCard} 
            onMouseLeave={cursorLeaveSocialsCard} 
            href='mailto:kiimissi.imane@gmail.com' 
            target='_blank' 
            className='socialCard emailIcon icon'>
            <span className='email'>@</span>
          </motion.a>

          <motion.a 
            onMouseEnter={cursorEnterSocialsCard} 
            onMouseLeave={cursorLeaveSocialsCard} 
            href='https://x.com/huhu19hu' 
            target='_blank' 
            className='socialCard twitterIcon icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="4vw" height="4vw" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0023 3z"/>
            </svg>
          </motion.a>

        </div>

        <div className='social'>
          <motion.a 
            onMouseEnter={cursorEnterSocialsCard} 
            onMouseLeave={cursorLeaveSocialsCard} 
            href='https://linkedin.com/in/kimissi-imane-7b1aa624a/' 
            target='_blank' 
            className='socialCard linkedinIcon icon'>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="4vw" height="4vw">
              <circle cx="4" cy="4" r="2" stroke="#ffffff" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="2" y="9" width="4" height="13" stroke="#ffffff" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 22H14V15C14 13.8954 14.8954 13 16 13C17.1046 13 18 13.8954 18 15V22H22V15C22 11.6863 19.3137 9 16 9C12.6863 9 10 11.6863 10 15V22Z" stroke="#ffffff" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>

          <motion.a 
            onMouseEnter={cursorEnterSocialsCard} 
            onMouseLeave={cursorLeaveSocialsCard} 
            href='https://github.com/imakim03' 
            target='_blank' 
            className='socialCard githubIcon icon'>
            <svg 
                  fill="#ffffff" 
                  width="5vw" 
                  height="5vw" 
                  viewBox="-6 0 32 32" 
                  version="1.1" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M18.36 9.28c0.48-1.72-0.24-3.6-0.28-3.72-0.12-0.28-0.4-0.52-0.72-0.52-0.080 0-1.92-0.16-3.76 1.24-1.44-0.28-3.080-0.36-3.16-0.36-0.040 0-0.040 0-0.080 0-0.080 0-1.72 0.080-3.16 0.36-1.84-1.4-3.68-1.24-3.76-1.24-0.32 0.040-0.6 0.24-0.72 0.52-0.040 0.080-0.8 2-0.28 3.72-0.92 1.28-1.64 2.96-1 5.96 0.6 2.72 2.84 4.24 5.16 4.76-0.2 0.56-0.28 1.24-0.36 1.96-0.96 0.040-1.56-0.52-2.4-1.4-0.72-0.76-1.52-1.64-2.84-1.92-0.44-0.12-0.88 0.16-1 0.64-0.080 0.48 0.2 0.92 0.68 1 0.76 0.16 1.28 0.72 1.92 1.4 0.84 0.88 1.8 1.96 3.52 1.96 0 0 0.040 0 0.040 0 0 0.92 0.080 1.8 0.12 2.52 0.040 0.48 0.44 0.8 0.92 0.76s0.8-0.44 0.76-0.92c-0.24-2.72-0.040-5.6 0.4-6 0.32-0.2 0.52-0.56 0.4-0.96-0.080-0.36-0.4-0.64-0.8-0.64-0.36 0-4.12-0.2-4.84-3.52-0.6-2.72 0.16-3.92 0.96-4.88 0.2-0.24 0.24-0.6 0.12-0.92-0.32-0.68-0.2-1.64-0.040-2.28 0.56 0.080 1.4 0.32 2.28 1.080 0.2 0.2 0.48 0.24 0.76 0.2 1.24-0.32 2.92-0.4 3.2-0.4 0.24 0 1.96 0.080 3.2 0.4 0.28 0.080 0.56 0 0.76-0.2 0.88-0.76 1.76-1 2.28-1.080 0.16 0.6 0.28 1.56-0.040 2.28-0.12 0.28-0.080 0.64 0.12 0.92 0.8 0.96 1.52 2.16 0.96 4.88-0.72 3.32-4.48 3.52-4.92 3.56-0.4 0-0.72 0.28-0.8 0.64s0.080 0.76 0.4 0.96c0.48 0.4 0.68 3.24 0.44 6-0.040 0.48 0.32 0.88 0.76 0.92 0.040 0 0.040 0 0.080 0 0.44 0 0.8-0.32 0.84-0.76 0.16-1.76 0.28-4.48-0.28-6.2 2.32-0.48 4.56-2.040 5.16-4.76 0.64-3-0.040-4.68-1-5.96z"
                  />
            </svg>
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaCards;
