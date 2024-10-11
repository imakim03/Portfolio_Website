import React from "react";
import { motion } from "framer-motion";

function ScrollArrowCard({
    cursorEnterCardHover, 
    cursorLeaveCardHover
}) {
    const scrollToSection = () => {
        const section = document.getElementById('rowFour');
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return(
        <motion.a onClick={scrollToSection} onMouseEnter={ cursorEnterCardHover } onMouseLeave={ cursorLeaveCardHover }  className='card2 scrollArrowCard'>

        <svg 
        width="66" 
        height="22" 
        viewBox="0 0 66 22" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
          <path 
          d="M2.7535 0.702987C2.03718 0.286842 1.11913 0.530183 0.702987 1.2465C0.286842 1.96282 0.530183 2.88087 1.2465 3.29701L2.7535 0.702987ZM32.2468 18.7028C31.5304 19.1188 31.2868 20.0368 31.7028 20.7532C32.1188 21.4696 33.0368 21.7132 33.7532 21.2972L32.2468 18.7028ZM64.7532 3.29718C65.4696 2.8812 65.7132 1.96321 65.2972 1.2468C64.8812 0.530382 63.9632 0.286834 63.2468 0.702817L64.7532 3.29718ZM1.2465 3.29701L32.024 21.1771L33.531 18.5831L2.7535 0.702987L1.2465 3.29701ZM33.7532 21.2972L64.7532 3.29718L63.2468 0.702817L32.2468 18.7028L33.7532 21.2972Z" 
          fill="white"
          />
        </svg>

        </motion.a>
    );
}

export default ScrollArrowCard;