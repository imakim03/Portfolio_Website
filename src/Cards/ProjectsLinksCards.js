import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ProjectsLinksCards({
    cursorEnterProjectsCard,
    cursorLeaveProjectsCard,
    cursorEnterDownloadCard,
    cursorLeaveDownloadCard
}) {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;

    const cvPath = currentLanguage === 'fr' ? '/PDF/Imane_Kimissi_CV(fr).pdf' : '/PDF/Imane_Kimissi_CV(eng).pdf';

    return (
        <div className="colOne">
            <Link 
                to='/projects?domain=webdev'
                className="ProjectsLinksCard"
            >
                <motion.div
                    onMouseEnter={cursorEnterProjectsCard}
                    onMouseLeave={cursorLeaveProjectsCard}
                    className="card"
                >
                    <p>{t('homePage.projects.webDev')}</p>
                </motion.div>
            </Link>

            <Link 
                to='/projects?domain=cloud'
                className="ProjectsLinksCard"
            >
                <motion.div
                    onMouseEnter={cursorEnterProjectsCard}
                    onMouseLeave={cursorLeaveProjectsCard}
                    className="card"
                >
                    <p>{t('homePage.projects.cloud')}</p>
                </motion.div>
            </Link>

            <Link 
                to='/projects?domain=network'
                className="ProjectsLinksCard"
            >
                <motion.div
                    onMouseEnter={cursorEnterProjectsCard}
                    onMouseLeave={cursorLeaveProjectsCard}
                    className="card"
                >
                    <p>{t('homePage.projects.networkSecurity')}</p>
                </motion.div>
            </Link>

            <motion.a
                href={cvPath}
                download
                onMouseEnter={cursorEnterDownloadCard}
                onMouseLeave={cursorLeaveDownloadCard}
                className="ProjectsLinksCard"
            >
                <div className="card" id="downloadCv">
                    <p>{t('homePage.projects.downloadCv')}</p>
                </div>
            </motion.a>
        </div>
    );
}

export default ProjectsLinksCards;
