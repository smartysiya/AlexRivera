import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CaseStudyDetail from './pages/CaseStudyDetail';

export default function App() {
  // Theme state: default to system preference if not stored
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Keep HTML class in sync with dark mode state
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen transition-colors duration-300 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 selection:bg-primary-500 selection:text-white">
        
        {/* Sticky Header Navbar */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Page Main Content Routing */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-study/:id" element={<CaseStudyDetail />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
        
      </div>
    </Router>
  );
}
