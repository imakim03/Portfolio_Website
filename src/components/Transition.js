import { motion } from "framer-motion";
import '../App.css'

const Transition = (OgComponent) => {
return () => (
    <>
    <OgComponent />
    <motion.div
        className="slide"
        initial={{ scaleY: 1}}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: .2, ease: [0.22, 1,0.36,1], delay: .6}}
    />

    <motion.div
        className="slide"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0}}
        transition={{ duration: .2, ease: [0.22, 1,0.36,1], delay: .4}}
    />

    <motion.div
        className="slide"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0}}
        transition={{ duration: .2, ease: [0.22, 1,0.36,1], delay: .2}}
    />
    
    <motion.div
        className="slide"
        initial={{ scaleY: 1}}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: .2, ease: [0.22, 1,0.36,1]}}
    />
   
    </>
);
}

export default Transition;