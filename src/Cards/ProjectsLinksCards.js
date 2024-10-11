import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function ProjectsLinksCards({
    cursorEnterProjectsCard,
    cursorLeaveProjectsCard,
    cursorEnterDownloadCard,
    cursorLeaveDownloadCard
}) {
    return(
        <div className="colOne">
            <Link 
            to='/projects/#webDev'
            className="ProjectsLinksCard"
            >
                <motion.div
                href="#"
                onMouseEnter = {cursorEnterProjectsCard}
                onMouseLeave = {cursorLeaveProjectsCard}
                className="card">
                    <p>Web Dev Projects</p>
                </motion.div>
            </Link>

            <Link 
            to='/projects/#cloud'
            className="ProjectsLinksCard"
            >
                <motion.div
                href="#"
                onMouseEnter = {cursorEnterProjectsCard}
                onMouseLeave = {cursorLeaveProjectsCard}
                className="card">
                    <p>Cloud Projects</p>
                </motion.div>
            </Link>

            <Link 
            to='/projects/#networkAndSecurity'
            className="ProjectsLinksCard"
            >
                <motion.div
                href="#"
                onMouseEnter = {cursorEnterProjectsCard}
                onMouseLeave = {cursorLeaveProjectsCard}
                className="card">
                    <p>Network & Security Projects</p>
                </motion.div>
            </Link>

            <motion.a
            href="#"
            onMouseEnter = {cursorEnterDownloadCard}
            onMouseLeave = {cursorLeaveDownloadCard}
            className="ProjectsLinksCard">
            <div className="card" id="downloadCv">
                <p>Download CV</p>
            </div>
            </motion.a>
        </div>
    );
}

export default ProjectsLinksCards;