import { motion } from "framer-motion";
import '../style/cursor.css'

function Cursor({ mousePosition, style, cursorVarient, variants, isVisible }) {
    return (
      <motion.div
        className="cursor"
        style={style}
        variants={variants}
        animate={cursorVarient}>

        <span className="cursorIcon cursorLearnMore">Learn More</span>
        <span className="cursorIcon cursorView">view</span>
        <span className="cursorIcon cursorRefresh">Refresh</span>
        <span className="cursorIcon cursorDownload">Download</span>
        <span className="cursorIcon cursorArrow">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
          >
            <path
              d="M7 17L17 7M17 7H8M17 7V16"
              stroke="#ffffff"
              strokeWidth="1.44"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
    </motion.div>
  );
}

export default Cursor;