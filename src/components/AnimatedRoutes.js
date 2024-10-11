import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HomePage from '../Pages/Home';
import AboutMePage from '../Pages/AboutMe';
import ProjectsPage from '../Pages/Projects';
import LoadingPages from '../components/LoadingPages';
import '../App.css';

function AnimatedRoutes() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [pageName, setPageName] = useState('');

  const getPageName = (pathname) => {

    switch (pathname) {
      case '/':
        return 'Home';
      case '/about':
        return 'About Me';
      case '/about/':
        return 'About Me';
      case '/projects':
        return 'Projects';
      case '/projects/':
        return 'Projects';
      default:
        return 'Page';
    }
  };

  useEffect(() => {
    setLoading(true);
    setPageName(getPageName(location.pathname));

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && (
        <LoadingPages 
          key={pageName}
          pageName={pageName} 
        />
      )}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}

export default AnimatedRoutes;
