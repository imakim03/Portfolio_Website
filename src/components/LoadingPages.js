import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function LoadingPages({ pageName }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          style={loadingContainerStyle}
          initial={{ opacity: 0.9 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="loadingText" style={textStyle}>
            {pageName}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const loadingContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'var(--background-color)',
  zIndex: 1000,
};

const textStyle = {
  fontSize: '4rem',
  fontFamily: 'var(--main-font)',
  color: 'var(--font-color)',
};

export default LoadingPages;
