import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, Layers, RefreshCw, Target, ShoppingCart, ShieldCheck, 
  MessageSquare, IndianRupee, Calendar, Smartphone, Search, HeartHandshake,
  Check, ArrowRight, Star, ChevronLeft, ChevronRight, HelpCircle, ChevronDown, Plus, Minus,
  Mail, MessageCircle, Phone, ArrowUpRight
} from 'lucide-react';

import { 
  services, projects, processSteps, testimonials, faqs, Project
} from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';

export default function Home() {
  const location = useLocation();

  // Selected project for details modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Expanded Services State
  const [expandedServices, setExpandedServices] = useState<Record<string, boolean>>({});

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Testimonials Slider State
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTestimonialExpanded, setIsTestimonialExpanded] = useState(false);

  // Handle Hash Scroll on Mount/Route change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [location]);

  // Reset Testimonial expand state on slide change
  useEffect(() => {
    setIsTestimonialExpanded(false);
  }, [activeTestimonial]);

  // Testimonial Navigation
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Truncate Text helper
  const truncateText = (text: string, maxWords: number) => {
    const words = text.split(' ');
    if (words.length <= maxWords) return { text, shouldTruncate: false };
    return {
      text: words.slice(0, maxWords).join(' ') + '...',
      shouldTruncate: true
    };
  };

  // Toggle expanded service
  const toggleService = (id: string) => {
    setExpandedServices((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Resolve Service Icons
  const getServiceIcon = (iconName: string) => {
    const cls = "w-5 h-5 text-primary-600 dark:text-primary-400";
    switch (iconName) {
      case 'Globe': return <Globe className={cls} />;
      case 'Layers': return <Layers className={cls} />;
      case 'RefreshCw': return <RefreshCw className={cls} />;
      case 'Target': return <Target className={cls} />;
      case 'ShoppingCart': return <ShoppingCart className={cls} />;
      case 'ShieldCheck': return <ShieldCheck className={cls} />;
      default: return <Globe className={cls} />;
    }
  };

  // Resolve Why Work With Me Icons
  const getWhyIcon = (iconName: string) => {
    const cls = "w-5 h-5 text-primary-600 dark:text-primary-400";
    switch (iconName) {
      case 'communication': return <MessageSquare className={cls} />;
      case 'pricing': return <IndianRupee className={cls} />;
      case 'delivery': return <Calendar className={cls} />;
      case 'mobile': return <Smartphone className={cls} />;
      case 'seo': return <Search className={cls} />;
      case 'support': return <HeartHandshake className={cls} />;
      default: return <Check className={cls} />;
    }
  };

  const whyMePoints = [
    {
      title: 'Clear Communication',
      description: 'Daily Slack updates, weekly demo calls, and no confusing technical jargon. I explain choices based on your business outcomes.',
      icon: 'communication'
    },
    {
      title: 'Transparent Pricing',
      description: 'Zero hidden fees. You receive a detailed breakdown of costs and a fixed quote before work begins. No surprises.',
      icon: 'pricing'
    },
    {
      title: 'On-Time Delivery',
      description: 'Milestones are planned strictly, and deadlines are locked. I deploy updates incrementally so you see progress live.',
      icon: 'delivery'
    },
    {
      title: 'Mobile-First Approach',
      description: 'Over 60% of web traffic is mobile. I design and build layouts optimized for small screens, thumbs, and slow networks first.',
      icon: 'mobile'
    },
    {
      title: 'SEO-Conscious Dev',
      description: 'A beautiful site is useless if nobody can find it. I write semantic HTML code, set metadata, and configure page loads for Google rankings.',
      icon: 'seo'
    },
    {
      title: 'Long-Term Support',
      description: 'I do not launch and disappear. I provide ongoing technical support, speed optimization updates, and maintenance backups.',
      icon: 'support'
    }
  ];

  const headingWords = ["I", "build", "websites", "that", "help"];

  const handleConsultationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWorkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 md:space-y-28 bg-grid-glow relative overflow-hidden">
      
      {/* Embedded CSS Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in-word {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient-loop {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fade-in-subheading {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-ctas {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-trust {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes mesh-blob-1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes mesh-blob-2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-50px, 40px) scale(1.15); }
        }
        @keyframes mesh-blob-3 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          40% { transform: translate(40px, -20px) scale(0.9); }
          80% { transform: translate(-10px, -40px) scale(1.05); }
        }
        .animate-word {
          animation: fade-in-word 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-gradient-loop {
          background: linear-gradient(135deg, #3b66ff, #8b5cf6, #06b6d4, #3b66ff);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-loop 4s ease infinite;
        }
        .animate-subheading {
          animation: fade-in-subheading 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.8s forwards;
        }
        .animate-ctas {
          animation: fade-in-ctas 0.8s cubic-bezier(0.16, 1, 0.3, 1) 2.1s forwards;
        }
        .animate-trust {
          animation: fade-in-trust 1s ease 2.4s forwards;
        }
        .animate-blob-1 {
          animation: mesh-blob-1 9s ease-in-out infinite;
        }
        .animate-blob-2 {
          animation: mesh-blob-2 8s ease-in-out infinite;
        }
        .animate-blob-3 {
          animation: mesh-blob-3 10s ease-in-out infinite;
        }
        .bg-colorful-hero {
          background-color: #fafafa;
          background-image: 
            radial-gradient(at 0% 0%, rgba(59, 102, 255, 0.09) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(139, 92, 246, 0.09) 0px, transparent 50%),
            radial-gradient(at 50% 100%, rgba(6, 182, 212, 0.07) 0px, transparent 50%);
        }
        .dark .bg-colorful-hero {
          background-color: #07070a;
          background-image: 
            radial-gradient(at 0% 0%, rgba(59, 102, 255, 0.16) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(139, 92, 246, 0.16) 0px, transparent 50%),
            radial-gradient(at 50% 100%, rgba(6, 182, 212, 0.11) 0px, transparent 50%);
        }
      `}} />

      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-6 md:pt-40 md:pb-28 flex flex-col justify-center items-center overflow-hidden bg-colorful-hero w-full" style={{ minHeight: '100svh' }}>
        {/* Animated Mesh Gradient Overlay (Color Rich, Professional) */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Cyan Blob */}
          <div className="absolute top-[-10%] left-[5%] w-[400px] h-[400px] rounded-full bg-cyan-400/25 dark:bg-cyan-500/25 blur-[120px] animate-blob-1" />
          {/* Purple Blob */}
          <div className="absolute bottom-[-10%] right-[5%] w-[450px] h-[450px] rounded-full bg-purple-400/25 dark:bg-purple-500/25 blur-[130px] animate-blob-2" />
          {/* Blue Blob */}
          <div className="absolute top-[20%] right-[20%] w-[350px] h-[350px] rounded-full bg-blue-450/20 dark:bg-blue-500/20 blur-[100px] animate-blob-3" />
        </div>

        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 w-full flex-grow flex flex-col justify-center items-center text-center">
          <div className="space-y-4 md:space-y-6 w-full max-w-3xl mx-auto flex flex-col justify-center items-center my-auto">
            
            {/* Status indicator */}
            <div
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-primary-200/50 bg-primary-50/50 dark:border-primary-900/30 dark:bg-primary-950/20 text-primary-600 dark:text-primary-400 text-[10px] font-bold uppercase tracking-wider"
            >
              <span>Available for Q3/Q4 Projects</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            {/* Responsive Heading with stagger word-by-word fade-in */}
            <h1
              className="leading-[1.2] md:leading-[1.15] tracking-[-0.02em] font-bold font-display text-zinc-900 dark:text-white text-center w-full max-w-full mx-auto flex flex-wrap justify-center"
              style={{ fontSize: 'clamp(2.4rem, 8vw, 3.2rem)' }}
            >
              {headingWords.map((word, i) => (
                <span
                  key={i}
                  className="inline-block animate-word opacity-0"
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  {word}&nbsp;
                </span>
              ))}
              <span 
                className="inline-block animate-word opacity-0"
                style={{ animationDelay: `${headingWords.length * 0.3}s` }}
              >
                <span className="animate-gradient-loop inline-block">
                  businesses grow.
                </span>
              </span>
            </h1>

            {/* Responsive Subheading: fade-in on load (1.8s delay, 0.8s duration) */}
            <p
              className="text-[1rem] md:text-[1.125rem] text-[#666] dark:text-zinc-400 leading-[1.6] font-sans w-[90%] max-w-2xl mx-auto mt-4 opacity-0 animate-subheading"
            >
              Full Stack Developer helping startups and local businesses create fast, modern, and conversion-focused digital experiences.
            </p>

            {/* Responsive Actions: margin-top: 24px/32px */}
            <div
              className="flex flex-col md:flex-row items-center justify-center gap-3.5 mt-6 w-full opacity-0 animate-ctas mb-6"
            >
              <a
                href="#contact"
                onClick={handleConsultationClick}
                className="w-full md:w-auto h-[54px] inline-flex items-center justify-center bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 px-6 rounded-xl font-bold hover:bg-primary-600 dark:hover:bg-primary-500 dark:hover:text-white shadow-md transition-all duration-200 group cursor-pointer text-sm"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#portfolio"
                onClick={handleWorkClick}
                className="w-full md:w-auto h-[54px] inline-flex items-center justify-center border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 px-6 rounded-xl font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200 cursor-pointer text-sm"
              >
                View My Work
              </a>
            </div>

            {/* Trust indicators: 2x2 grid on mobile, 4-column row on desktop */}
            <div
              className="pt-6 md:pt-8 border-t border-zinc-200/50 dark:border-zinc-800/40 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto opacity-0 animate-trust w-full"
            >
              {[
                'Responsive Websites',
                'SEO Friendly',
                'Fast Performance',
                'Ongoing Support'
              ].map((indicator) => (
                <div key={indicator} className="flex items-center justify-center space-x-1.5 bg-white dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800/80 p-2.5 rounded-xl text-[10px] sm:text-xs font-semibold text-zinc-650 dark:text-zinc-400 shadow-sm">
                  <Check className="w-3.5 h-3.5 text-emerald-500 bg-emerald-500/10 rounded-full p-0.5 flex-shrink-0" />
                  <span className="truncate">{indicator}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section id="services" className="scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">Services & Solutions</h2>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-zinc-900 dark:text-white">
            Services Designed to Grow Your Business
          </p>
        </div>

        {/* Mobile View: Vertical Accordion */}
        <div className="md:hidden space-y-3 max-w-3xl mx-auto">
          {services.map((service) => {
            const isExpanded = !!expandedServices[service.id];
            return (
              <div 
                key={service.id} 
                className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 rounded-xl p-4 shadow-sm"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-primary-50 dark:bg-primary-950/30 flex items-center justify-center flex-shrink-0">
                      {getServiceIcon(service.icon)}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold font-display text-zinc-900 dark:text-white leading-tight truncate">
                        {service.title}
                      </h3>
                      {!isExpanded && (
                        <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-snug truncate mt-0.5 max-w-[200px] xs:max-w-[320px]">
                          {service.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => toggleService(service.id)}
                    className="text-xs font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 hover:underline flex items-center flex-shrink-0 cursor-pointer pl-2"
                  >
                    {isExpanded ? 'Hide' : 'Learn More'}
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3.5 mt-3.5 border-t border-zinc-100 dark:border-zinc-800/40 space-y-3">
                        <p className="text-xs text-zinc-650 dark:text-zinc-400 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="grid grid-cols-1 gap-1.5 pt-1">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-xs text-zinc-700 dark:text-zinc-300">
                              <Check className="w-3.5 h-3.5 text-emerald-500 mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Desktop View: Grid of Cards */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-950/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {getServiceIcon(service.icon)}
              </div>

              <h3 className="text-lg font-bold font-display text-zinc-900 dark:text-white mb-3">
                {service.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Bullet Features list */}
              <ul className="space-y-2.5 pt-4 border-t border-zinc-100 dark:border-zinc-800/40">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-xs text-zinc-700 dark:text-zinc-300">
                    <Check className="w-3.5 h-3.5 text-emerald-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED PROJECTS SECTION */}
      <section id="portfolio" className="scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">Success Stories</h2>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-zinc-900 dark:text-white">
            Client Results
          </p>
        </div>

        {/* Mobile/Tablet View: Swipeable Horizontal Cards Slider */}
        <div className="lg:hidden flex flex-nowrap overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 px-4 pb-4 -mx-4">
          {projects.map((project) => (
            <div key={project.id} className="w-[85vw] max-w-[290px] min-[360px]:max-w-[320px] flex-shrink-0 snap-center">
              <ProjectCard project={project} onViewDetails={setSelectedProject} />
            </div>
          ))}
        </div>

        {/* Desktop View: Grid of Cards */}
        <div className="hidden lg:grid grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onViewDetails={setSelectedProject} />
          ))}
        </div>
      </section>

      {/* 4. WHY WORK WITH ME SECTION */}
      <section id="why-work-with-me" className="scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900 text-white dark:bg-zinc-900/40 dark:border dark:border-zinc-800/80 rounded-[2.5rem] p-6 md:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,102,255,0.06),transparent_50%)] pointer-events-none" />
          
          <div className="text-center space-y-2 mb-8 relative z-10">
            <h2 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary-450">Why Partner With Me</h2>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-white">
              A Freelance Partner Who Speaks Business
            </p>
          </div>

          {/* Mobile/Tablet View: 2-column Compact Grid */}
          <div className="grid grid-cols-2 gap-3 md:hidden relative z-10 max-w-2xl mx-auto">
            {whyMePoints.map((point, index) => (
              <div 
                key={index} 
                className="flex flex-col justify-between h-[135px] bg-zinc-800/40 border border-zinc-700/20 p-3.5 rounded-xl hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                    {getWhyIcon(point.icon)}
                  </div>
                  <h3 className="text-xs font-bold font-display text-white truncate max-w-[85px] xs:max-w-none">
                    {point.title}
                  </h3>
                </div>
                <p className="text-[10px] text-zinc-400 leading-normal line-clamp-3">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop View: Grid of Cards (Original format) */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {whyMePoints.map((point, index) => (
              <div 
                key={index} 
                className="space-y-3 bg-zinc-800/40 border border-zinc-700/20 p-6 rounded-2xl hover:border-zinc-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                  {getWhyIcon(point.icon)}
                </div>
                <h3 className="text-lg font-bold font-display text-white">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DEVELOPMENT PROCESS SECTION */}
      <section id="process" className="scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">My Roadmap</h2>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-zinc-900 dark:text-white">
            Structured Development Process
          </p>
        </div>

        {/* Mobile View: Vertical Timeline Stepper */}
        <div className="md:hidden relative space-y-3.5 max-w-xl mx-auto">
          <div className="absolute left-[20px] top-4 bottom-4 w-0.5 bg-zinc-200 dark:bg-zinc-800 pointer-events-none" />
          {processSteps.map((step, idx) => (
            <div key={idx} className="relative flex items-start space-x-3.5">
              <div className="relative flex items-center justify-center flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center z-10 text-xs font-bold font-mono text-zinc-450 dark:text-zinc-500 shadow-sm">
                  {step.step}
                </div>
              </div>
              <div className="flex-grow bg-white dark:bg-zinc-900/30 p-3 rounded-xl border border-zinc-100 dark:border-zinc-800/40 flex items-start justify-between gap-3 shadow-sm">
                <div className="space-y-0.5">
                  <h3 className="text-xs font-bold font-display text-zinc-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
                <span className="text-[9px] font-mono font-bold bg-primary-500/10 text-primary-600 dark:text-primary-400 px-2 py-0.5 rounded-full flex-shrink-0">
                  {step.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Horizontal Timeline with cards and arrow indicators */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {processSteps.map((step, idx) => {
            const showArrow = idx !== 2 && idx !== 5; // Hide arrows on last items of 3-column grid
            return (
              <div key={idx} className="relative">
                <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black font-mono text-primary-600/20 dark:text-primary-400/20">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono font-bold bg-primary-500/10 text-primary-600 dark:text-primary-400 px-2 py-0.5 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold font-display text-zinc-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                {/* Arrow indicator between cards on desktop */}
                {showArrow && (
                  <div className="hidden lg:flex absolute -right-6 top-1/2 transform -translate-y-1/2 z-20 items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-primary-500/60 animate-pulse" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section id="testimonials" className="scroll-mt-20 bg-zinc-50 dark:bg-zinc-900/20 py-16 md:py-24 border-y border-zinc-100 dark:border-zinc-900/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-10">
            <h2 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">Client Reviews</h2>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-zinc-900 dark:text-white">
              What My Clients Say
            </p>
          </div>

          {/* Swipeable Single Card Testimonial Slider */}
          <div className="relative bg-white dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800/60 rounded-2xl md:rounded-3xl p-5 md:p-10 shadow-lg overflow-hidden">
            <div className="absolute top-2 left-2 text-6xl md:text-8xl font-serif text-primary-500/5 select-none pointer-events-none leading-none">
              “
            </div>

            <motion.div 
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -40) nextTestimonial();
                else if (info.offset.x > 40) prevTestimonial();
              }}
              className="relative min-h-[160px] flex flex-col justify-between space-y-6 cursor-grab active:cursor-grabbing"
            >
              {/* Rating stars */}
              <div className="flex space-x-1">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                ))}
              </div>

              {/* Feedback excerpt with expander */}
              <div>
                <p className="text-xs sm:text-base md:text-lg text-zinc-700 dark:text-zinc-300 italic leading-relaxed">
                  "{isTestimonialExpanded 
                    ? testimonials[activeTestimonial].feedback 
                    : truncateText(testimonials[activeTestimonial].feedback, 36).text}"
                </p>
                {truncateText(testimonials[activeTestimonial].feedback, 36).shouldTruncate && (
                  <button
                    onClick={() => setIsTestimonialExpanded(!isTestimonialExpanded)}
                    className="text-[10px] sm:text-xs font-bold text-primary-600 dark:text-primary-400 mt-1.5 block cursor-pointer hover:underline"
                  >
                    {isTestimonialExpanded ? 'Show Less' : 'Read Full Review'}
                  </button>
                )}
              </div>

              {/* Client Info footer */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800/40">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary-400 to-indigo-500 flex items-center justify-center font-bold text-white text-xs md:text-sm shadow-sm">
                    {testimonials[activeTestimonial].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-zinc-500">
                      {testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}
                    </p>
                  </div>
                </div>

                {/* Left/Right manual buttons */}
                <div className="flex space-x-1.5">
                  <button
                    onClick={prevTestimonial}
                    className="p-1.5 rounded-lg border border-zinc-150 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-850 text-zinc-650 cursor-pointer"
                    aria-label="Previous Review"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-1.5 rounded-lg border border-zinc-150 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-850 text-zinc-650 cursor-pointer"
                    aria-label="Next Review"
                  >
                    <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Pagination indicators */}
            <div className="flex justify-center space-x-1 mt-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                    activeTestimonial === idx 
                      ? 'bg-primary-500 w-3' 
                      : 'bg-zinc-250 dark:bg-zinc-700 hover:bg-zinc-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. ABOUT SECTION */}
      <section id="about" className="scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          
          {/* Biography content */}
          <div className="md:col-span-7 space-y-4">
            <h2 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">Meet Your Partner</h2>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-zinc-900 dark:text-white">
              Alex Rivera | Software Engineer & Digital Partner
            </h3>
            
            {/* Mobile/Tablet View */}
            <div className="md:hidden space-y-4">
              <p className="text-xs text-zinc-650 dark:text-zinc-400 leading-relaxed font-sans">
                I build high-performance web applications that bridge the gap between clean code and business growth. Many local businesses and startups struggle with slow websites or overly complex platforms. I handle the technical architecture, speed optimization, and secure databases, allowing you to focus on your operations. My focus is delivering reliable web systems that attract and convert customers.
              </p>
            </div>

            {/* Desktop View */}
            <div className="hidden md:block space-y-6">
              <p className="text-base text-zinc-700 dark:text-zinc-350 leading-relaxed font-sans">
                I started my freelance web consultancy to bridge the gap between complex software engineering and actual business growth. Too often, clients are left with slow, complicated dashboards or boilerplate templates that don't match their brand. 
              </p>
              <p className="text-base text-zinc-700 dark:text-zinc-350 leading-relaxed font-sans">
                My core mission is: <strong>"Helping businesses establish a strong digital presence through thoughtful technology solutions."</strong> I manage the technical architecture so you can focus on building relationships and executing operations.
              </p>
              <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-150 dark:border-zinc-800 text-sm font-semibold italic text-zinc-600 dark:text-zinc-400">
                "Technology should be an accelerator for your business, not a bottleneck. Every script, page, and server I set up is targeted to bring visitors closer to conversion."
              </div>
            </div>
          </div>

          {/* Categorized Skills Wrapping Chips */}
          <div className="md:col-span-5 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-5 rounded-2xl shadow-sm space-y-4">
            <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-zinc-400">Core Expertise Stack</h4>
            
            <div className="space-y-3 text-[10px] sm:text-xs font-semibold">
              <div className="space-y-1.5">
                <span className="text-zinc-500 uppercase text-[8px] sm:text-[9px] tracking-wider block">Frontend</span>
                <div className="flex flex-wrap gap-1">
                  {['React', 'JavaScript', 'TypeScript', 'Tailwind CSS'].map((s) => (
                    <span key={s} className="bg-primary-500/10 text-primary-600 dark:text-primary-400 px-2 py-1 rounded-md border border-primary-500/20">{s}</span>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="text-zinc-500 uppercase text-[8px] sm:text-[9px] tracking-wider block">Backend</span>
                <div className="flex flex-wrap gap-1">
                  {['Node.js', 'Express', 'REST APIs', 'GraphQL'].map((s) => (
                    <span key={s} className="bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded-md border border-indigo-500/20">{s}</span>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="text-zinc-500 uppercase text-[8px] sm:text-[9px] tracking-wider block">Databases</span>
                <div className="flex flex-wrap gap-1">
                  {['MongoDB', 'PostgreSQL', 'Redis'].map((s) => (
                    <span key={s} className="bg-teal-500/10 text-teal-600 dark:text-teal-400 px-2 py-1 rounded-md border border-teal-500/20">{s}</span>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="text-zinc-500 uppercase text-[8px] sm:text-[9px] tracking-wider block">DevOps & Tools</span>
                <div className="flex flex-wrap gap-1">
                  {['Git & GitHub', 'Vercel', 'AWS Cloud', 'Figma'].map((s) => (
                    <span key={s} className="bg-zinc-100 dark:bg-zinc-800 text-zinc-650 dark:text-zinc-350 px-2 py-1 rounded-md border border-zinc-200 dark:border-zinc-700">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">Common Concerns</h2>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-zinc-900 dark:text-white">
            Frequently Asked Questions
          </p>
        </div>

        {/* Expandable Single Active Accordion list */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-xs sm:text-sm md:text-base text-zinc-850 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none cursor-pointer"
                >
                  <span className="pr-4 leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-zinc-400 dark:text-zinc-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-primary-500 dark:text-primary-400' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans border-t border-zinc-100 dark:border-zinc-800/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. CONTACT SECTION */}
      <section id="contact" className="scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Quick contact / direct bookings (Left on Desktop, Top on Mobile) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2 text-center lg:text-left">
              <h2 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">Start Your Project</h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-zinc-900 dark:text-white leading-[1.15]">
                Let's discuss how to grow your business.
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                Schedule a call, chat directly on WhatsApp, or send a detailed proposal query below.
              </p>
            </div>

            {/* Mobile View: 2x2 Grid of Actions */}
            <div className="grid grid-cols-2 gap-3 lg:hidden">
              {/* WhatsApp */}
              <a
                href="https://wa.me/916362858534"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 bg-white dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800 rounded-xl hover:border-emerald-500 transition-colors shadow-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] font-bold text-zinc-900 dark:text-white truncate">WhatsApp</h4>
                  <p className="text-[9px] text-zinc-450 dark:text-zinc-500 truncate">+91 6362858534</p>
                </div>
                <ArrowUpRight className="w-3 h-3 text-zinc-400 ml-auto flex-shrink-0" />
              </a>

              {/* Dialer */}
              <a
                href="tel:+916362858534"
                className="flex items-center space-x-3 p-3 bg-white dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800 rounded-xl hover:border-blue-500 transition-colors shadow-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] font-bold text-zinc-900 dark:text-white truncate">Call Dialer</h4>
                  <p className="text-[9px] text-zinc-450 dark:text-zinc-500 truncate">Tap to call</p>
                </div>
                <ArrowUpRight className="w-3 h-3 text-zinc-400 ml-auto flex-shrink-0" />
              </a>

              {/* Calendly */}
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 bg-white dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800 rounded-xl hover:border-primary-500 transition-colors shadow-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] font-bold text-zinc-900 dark:text-white truncate">Intro Call</h4>
                  <p className="text-[9px] text-zinc-450 dark:text-zinc-500 truncate">Book slot</p>
                </div>
                <ArrowUpRight className="w-3 h-3 text-zinc-400 ml-auto flex-shrink-0" />
              </a>

              {/* Email */}
              <a
                href="mailto:alexriveradigital.co@gmail.com"
                className="flex items-center space-x-3 p-3 bg-white dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800 rounded-xl hover:border-indigo-500 transition-colors shadow-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950/40 text-indigo-650 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] font-bold text-zinc-900 dark:text-white truncate">Email</h4>
                  <p className="text-[9px] text-zinc-450 dark:text-zinc-500 truncate">alexriveradigital.co@gmail.com</p>
                </div>
                <ArrowUpRight className="w-3 h-3 text-zinc-400 ml-auto flex-shrink-0" />
              </a>
            </div>

            {/* Desktop View: Full Stacked Actions List */}
            <div className="hidden lg:flex flex-col space-y-4 pt-4">
              {/* Calendly */}
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 bg-white dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800 rounded-2xl hover:border-primary-500 transition-colors group shadow-sm"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400 flex items-center justify-center">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Schedule intro call</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Select a 30-minute slot on Calendly</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-primary-500 transition-colors" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/916362858534"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 bg-white dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800 rounded-2xl hover:border-emerald-500 transition-colors group shadow-sm"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Chat on WhatsApp</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Message directly at WhatsApp</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-emerald-500 transition-colors" />
              </a>

              {/* Call Directly */}
              <a
                href="tel:+916362858534"
                className="w-full flex items-center justify-between p-4 bg-white dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800 rounded-2xl hover:border-blue-500 transition-colors group shadow-sm"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Call Directly</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Open in contacts book / dialer</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-blue-500 transition-colors" />
              </a>

              {/* Email direct */}
              <a
                href="mailto:alexriveradigital.co@gmail.com"
                className="w-full flex items-center justify-between p-4 bg-white dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800 rounded-2xl hover:border-indigo-500 transition-colors group shadow-sm"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/40 text-indigo-650 dark:text-indigo-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Email inquiry directly</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">alexriveradigital.co@gmail.com</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-indigo-500 transition-colors" />
              </a>
            </div>
          </div>

          {/* Lead capture form (Right on Desktop, Bottom on Mobile) */}
          <div className="lg:col-span-7 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-850 p-4 sm:p-6 rounded-2xl shadow-md">
            <ContactForm />
          </div>

        </div>
      </section>

      {/* 10. PROJECT DETAILS MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            {/* Modal Body */}
            <motion.div
              initial={{ y: '100%', opacity: 0.5 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0.5 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="relative w-full sm:max-w-lg bg-white dark:bg-zinc-900 rounded-t-2xl sm:rounded-2xl border-t sm:border border-zinc-150 dark:border-zinc-800 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col z-10"
            >
              {/* Colored top header gradient bar */}
              <div className={`h-1.5 bg-gradient-to-r ${selectedProject.imageColor}`} />
              
              {/* Header */}
              <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-zinc-100 dark:border-zinc-800/60">
                <div>
                  <span className="text-[9px] font-bold text-primary-600 dark:text-primary-400 tracking-wider uppercase block">
                    {selectedProject.category}
                  </span>
                  <h4 className="text-base font-bold text-zinc-900 dark:text-white leading-snug">
                    {selectedProject.title}
                  </h4>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-5 space-y-5">
                
                {/* Client info box */}
                <div className="flex justify-between items-center text-xs p-3 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800/40 rounded-xl">
                  <span className="text-zinc-500">Client Partner:</span>
                  <span className="font-bold text-zinc-800 dark:text-zinc-200">{selectedProject.client}</span>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-1.5">
                  <h5 className="text-[10px] font-bold uppercase tracking-wider text-zinc-450 dark:text-zinc-500">
                    Challenge & Solution Overview
                  </h5>
                  <p className="text-xs sm:text-sm text-zinc-650 dark:text-zinc-350 leading-relaxed font-sans">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Business Impact / Results */}
                <div className="space-y-2">
                  <h5 className="text-[10px] font-bold uppercase tracking-wider text-zinc-450 dark:text-zinc-500">
                    Measurable Business Outcomes
                  </h5>
                  <ul className="space-y-2">
                    {selectedProject.results.map((result, idx) => (
                      <li key={idx} className="flex items-start text-xs text-zinc-700 dark:text-zinc-300 leading-normal">
                        <span className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0 mr-2 font-bold text-[9px] mt-0.5">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <h5 className="text-[10px] font-bold uppercase tracking-wider text-zinc-450 dark:text-zinc-500">
                    Technologies Utilized
                  </h5>
                  <div className="flex flex-wrap gap-1">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] font-semibold font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-755 dark:text-zinc-350 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Footer CTA */}
              <div className="p-4 bg-zinc-50 dark:bg-zinc-900/50 border-t border-zinc-150 dark:border-zinc-800/60 flex gap-2">
                {selectedProject.liveUrl && selectedProject.liveUrl !== '#' ? (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 text-xs font-bold py-2.5 px-4 rounded-xl hover:bg-primary-600 dark:hover:bg-primary-500 dark:hover:text-white transition-all text-center"
                  >
                    Launch Demo
                    <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                ) : null}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 inline-flex items-center justify-center border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold py-2.5 px-4 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all cursor-pointer"
                >
                  Close Details
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
