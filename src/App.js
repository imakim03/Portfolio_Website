import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AnimatedRoutes from './components/AnimatedRoutes';
import LoadingScreen from './components/LoadingScreen';
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
        <AnimatedRoutes/>
      )}
    </Router>
  );
}

export default App;
