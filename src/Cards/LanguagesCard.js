import { useInView } from 'react-intersection-observer';
import { AnimatePresence, motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

function Languages({ cursorEnterCard, cursorLeaveCard }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.6 });

    const { t } = useTranslation();

    const size = 45; 
    const strokeWidth = 3; 
    const trackColor = '#625f6255';
    const progressColor = '#ddd';

    const languages = [
        { label: 'Fr', percentage: 75 },
        { label: 'Eng', percentage: 88 },
        { label: 'Arb', percentage: 95 }
    ];  

    const renderProgressCircle = (label, percentage, ) => {
        const center = size / 2;
        const radius = center - strokeWidth / 2;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percentage / 100) * circumference;

        return (
            <div className="progressWrapper">
                <svg width={size} height={size} className="progressBar">
                    <circle
                        className="progressBar-track"
                        cx={center}
                        cy={center}
                        r={radius}
                        stroke={trackColor}
                        strokeWidth={strokeWidth}
                        fill="none"
                    />
                    {inView && (
                        <AnimatePresence>
                            <motion.circle
                                key={label}
                                className="progressBarProgress"
                                cx={center}
                                cy={center}
                                r={radius}
                                stroke={progressColor}
                                strokeWidth={strokeWidth}
                                fill="none"
                                strokeDasharray={circumference}
                                strokeDashoffset={offset}
                                initial={{ strokeDashoffset: circumference }}
                                animate={{ strokeDashoffset: offset }}
                                exit={{ strokeDashoffset: circumference }}
                                transition={{ duration: 1 }} 
                                style={{
                                    strokeLinecap: 'round'
                                }}
                            />
                        </AnimatePresence>
                    )}
                    <text
                        x="50%"
                        y="50%"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fontSize="12px"
                        fill="var(--font-color)"
                    >
                        {label}
                    </text>
                </svg>
            </div>
        );
    };

    return (
        <Link 
            to='/about'
            className="LanguagesCard"
        >
            <motion.div
                onMouseEnter={cursorEnterCard}
                onMouseLeave={cursorLeaveCard}
                className="card colTwoContent"
                ref={ref}
            >
                <h1>{t('homePage.languages')}</h1>
                <div className="languagesContainer">
                    {languages.map((lang, index) => (
                        <div key={index} className="progressItem">
                            {renderProgressCircle(lang.label, lang.percentage)}    
                            <span>{lang.percentage}%</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </Link>
    );
}

export default Languages;
