import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoadingScreen from './Components/LoadingScreen';
import { ThemeProvider } from './Components/ThemeProvider';
import { AnimatePresence } from 'framer-motion';
import HomePage from './Pages/Home';
import AboutMePage from './Pages/AboutMe';
import ProjectsPage from './Pages/Projects';
import ContactPage from './Pages/Contact';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      {isLoading ? (
        <LoadingScreen /> 
      ) : (
        <ThemeProvider>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutMePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </AnimatePresence>
        </ThemeProvider>
      )}
    </Router>
  );
}

export default App;
