import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import CarsPage from './pages/CarsPage';

// Sare la secțiunea din link (ex: /#preturi) sau sus, la schimbarea paginii
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView();
      }, 0);
      return () => clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollManager />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/galerie" element={<CarsPage />} />
            {/* orice link vechi (/pricing, /contact etc.) duce la prima pagină */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;
