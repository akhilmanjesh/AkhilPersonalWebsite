import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import React, { useEffect } from 'react';
import AboutMe from './pages/AboutMe.js';


const FallbackRoute = () => {
  let navigate = useNavigate();
  
  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutMe/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
