import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Twitter, Globe, ArrowUp } from 'lucide-react';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${id}`);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-900 text-white dark:bg-zinc-950 border-t border-zinc-800 pt-16 pb-8 relative overflow-hidden">
      {/* Visual top border glow */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Footer Top Call to Action */}
        <div className="grid md:grid-cols-12 gap-8 items-center border-b border-zinc-800 pb-12">
          <div className="md:col-span-8 space-y-3">
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Ready to bring your ideas to life?
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-xl">
              Let's build a high-performance, conversion-focused website that turns visits into paying clients.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-start md:justify-end">
            <a
              href="#contact"
              onClick={(e) => handleNavLinkClick(e, 'contact')}
              className="inline-flex items-center space-x-2 bg-white text-zinc-950 hover:bg-primary-500 hover:text-white font-bold py-3 px-6 rounded-full transition-all shadow-md group cursor-pointer text-sm"
            >
              <span>Book Discovery Call</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo & Slogan */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-primary-500 font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 12 12 17 22 12" />
                  <polyline points="2 17 12 22 22 17" />
                </svg>
              </div>
              <span className="font-bold text-lg font-display">
                Alex<span className="text-primary-500">Rivera</span>
              </span>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-xs leading-relaxed">
              Full Stack Developer specializing in high-converting, blazing-fast web assets for small businesses and startups.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { name: 'Services', id: 'services' },
                { name: 'Portfolio', id: 'portfolio' },
                { name: 'About Partner', id: 'about' }
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`/#${link.id}`}
                    onClick={(e) => handleNavLinkClick(e, link.id)}
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Actions */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">Get in Touch</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              <li>
                <a href="mailto:alexriveradigital.co@gmail.com" className="hover:text-white transition-colors">
                  alexriveradigital.co@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/916362858534" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp Support
                </a>
              </li>
              <li>
                <a href="tel:+916362858534" className="hover:text-white transition-colors">
                  Direct Dialer Call
                </a>
              </li>
              <li>
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Schedule Booking
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom copyright & Socials */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-zinc-800 pt-8 gap-4">
          <p className="text-[11px] text-zinc-500 text-center sm:text-left">
            © {new Date().getFullYear()} Alex Rivera. All rights reserved. Designed to help small businesses scale.
          </p>

          <div className="flex items-center space-x-5 text-zinc-400">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors" 
              aria-label="GitHub Profile Link"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors" 
              aria-label="LinkedIn Profile Link"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors" 
              aria-label="Twitter Profile Link"
            >
              <Twitter className="w-4.5 h-4.5" />
            </a>
            
            {/* Scroll back to top button */}
            <button
              onClick={handleScrollToTop}
              className="p-1.5 rounded bg-zinc-850 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
