import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Quiz from './pages/Quiz';
import Footer from './components/Footer';

function App() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`transition-opacity duration-[1500ms]  ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
