import React, { useEffect, useState } from 'react';

const ScrollRevealText = ({ text, link, linkText }) => {
    const [opacity, setOpacity] = useState(0);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            const newOpacity = Math.min(scrollY / (windowHeight / 2), 1);
            setOpacity(newOpacity);

            const newScale = Math.min(scrollY / (windowHeight / 4), 1.5);
            setScale(newScale);

            if (scrollY >= documentHeight) {
                window.location.href = link;
                console.log('linkkk')
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        window.location.href = link;
    };

    return (
        <div className="scrollRevealContainer">
            <div 
                className="customText"
                onClick={handleClick} 
                style={{ 
                    opacity: scale, 
                    transform: `scale(${scale})`, 
                    cursor: 'pointer' 
                }}
            >
                {linkText || 'View Other Projects'} {/* Default text if none is provided */}
            </div>
        </div>
    );
};

export default ScrollRevealText;