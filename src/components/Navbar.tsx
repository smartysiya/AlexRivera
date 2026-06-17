import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Detect scroll to style sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Services', id: 'services' },
    { name: 'Work', id: 'portfolio' },
    { name: 'Why Me', id: 'why-work-with-me' },
    { name: 'Process', id: 'process' },
    { name: 'About', id: 'about' },
  ];

  const handleNavLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'glass-light dark:glass-dark py-3.5 shadow-md border-b border-zinc-200/20 dark:border-zinc-800/30'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between h-11 md:h-12">
          
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={() => {
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center space-x-2 text-zinc-900 dark:text-white group h-11"
          >
            {/* Embedded Logo Icon */}
            <div className="text-primary-500 transform group-hover:scale-110 transition-transform duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 12 12 17 22 12" />
                <polyline points="2 17 12 22 22 17" />
              </svg>
            </div>
            <span className="font-bold text-lg tracking-tight font-display">
              Alex<span className="text-primary-500">Rivera</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`/#${link.id}`}
                onClick={(e) => handleNavLinkClick(e, link.id)}
                className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Navigation CTAs (Right-side) */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <a
              href="#contact"
              onClick={(e) => handleNavLinkClick(e, 'contact')}
              className="inline-flex items-center justify-center text-xs font-bold text-white bg-zinc-900 dark:bg-white dark:text-zinc-950 px-4 py-2.5 rounded-full hover:bg-primary-600 dark:hover:bg-primary-500 dark:hover:text-white transition-all duration-200 shadow-md"
            >
              Get a Proposal
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>

          {/* Mobile Navigation controls */}
          <div className="flex items-center space-x-2 md:hidden h-11">
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Overlay Sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-30 md:hidden border-b border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden glass-light dark:glass-dark"
          >
            <div className="px-5 pt-4 pb-6 space-y-4 flex flex-col items-stretch">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`/#${link.id}`}
                  onClick={(e) => handleNavLinkClick(e, link.id)}
                  className="text-base font-bold text-zinc-700 dark:text-zinc-300 hover:text-primary-600 dark:hover:text-primary-400 py-2 border-b border-zinc-100 dark:border-zinc-800/40 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              <a
                href="#contact"
                onClick={(e) => handleNavLinkClick(e, 'contact')}
                className="w-full flex items-center justify-center space-x-2 text-sm font-bold text-white bg-primary-600 py-3 rounded-xl shadow-lg hover:bg-primary-700 transition-colors duration-200"
              >
                <span>Get a Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
