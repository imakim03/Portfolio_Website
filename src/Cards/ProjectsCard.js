import { AnimatePresence, motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import image1 from '../Images/openvpnServer.png';
import image2 from '../Images/exampleProjects/portfolio.png';
import image3 from '../Images/exampleProjects/blog2.png';
import image4 from '../Images/ids.png';
import image5 from '../Images/exampleProjects/blog1.png';
import image6 from '../Images/exampleProjects/memoryGame.png';

const projectsData = [
    { image: image1, title: 'OpenVpn server', description: "Configured and deployed a secure OpenVPN server on AWS.", year: "2022", domain: "network", projectId: "openVPN" },
    { image: image2, title: 'Portfolio website', description: "Old portfolio website made with html, java Script and css.", year: "Jan 2023", domain: "webdev", projectId: "portfolioWebsite" },
    { image: image3, title: 'Blog website', description: "A dynamic website with Flask and Bootstrap for content management and user interaction.", year: "Nov-Dec 2022", domain: "webdev", projectId: "blogWebsite" },
    { image: image4, title: 'Intrusion Detection System', description: "A machine learning-based IDS using Zeek and an Autoencoder for detecting anomalies.", year: "May-June 2023", domain: "network", projectId: "ids" },
    { image: image5, title: 'Blog website', description: "A dynamic website with Flask and Bootstrap for content management and user interaction.", year: "2023-2022", domain: "webdev", projectId: "blogWebsite"},
    { image: image6, title: 'Memory Mobile Game', description: "Mobile game made with Kotlin. Players must memorize complex patterns on a grid of blocks.", year: "April 2024", domain: "small", projectId: "memoryGame" }
];

function ProjectsCard({ cursorEnterProjectsCard, cursorLeaveProjectsCard }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
      let interval;

      if (!isHovered) {
          interval = setInterval(() => {
              setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
          }, 4000);
      }

      return () => clearInterval(interval);
  }, [isHovered]);
  

  return (
      <Link to={`/projects?domain=${projectsData[currentIndex].domain}&${projectsData[currentIndex].domain}Id=${projectsData[currentIndex].projectId}`} className="ProjectsCard">
          <motion.div
              onMouseEnter={() => {
                  cursorEnterProjectsCard();
                  setIsHovered(true);
              }}
              onMouseLeave={() => {
                  cursorLeaveProjectsCard();
                  setIsHovered(false);
              }}
              className="card colTwoContent"
          >
              <AnimatePresence mode="wait">
                  <motion.img
                      key={currentIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="projectsImages"
                      src={projectsData[currentIndex].image}
                      alt="Projects"
                  />
              </AnimatePresence>

              <motion.div className="projectDescription">
                  <h2>{projectsData[currentIndex].title}</h2>
                  <p>{projectsData[currentIndex].description}</p>
                  <span>{projectsData[currentIndex].year}</span>
              </motion.div>
          </motion.div>
      </Link>
  );
}


export default ProjectsCard;
