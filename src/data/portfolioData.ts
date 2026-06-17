export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  imageColor: string; // Tailwind color class for custom card mockup backgrounds
  description: string;
  results: string[];
  technologies: string[];
  liveUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
}

export interface PricingPackage {
  name: string;
  price: string;
  period?: string;
  description: string;
  timeline: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  duration: string;
}

export const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Custom, high-performance websites tailored to your brand. Perfect for startups and local businesses wanting a strong first impression.',
    icon: 'Globe',
    features: ['Fully responsive design', 'SEO-friendly structure', 'Vite & React speed', 'CMS integration option']
  },
  {
    id: 'full-stack',
    title: 'Full Stack Web Applications',
    description: 'Secure, scalable applications with seamless frontend UI and robust backend systems, databases, and integrations.',
    icon: 'Layers',
    features: ['Custom user dashboards', 'Secure database design', 'REST & GraphQL APIs', 'Third-party integrations']
  },
  {
    id: 'redesign',
    title: 'Website Redesign',
    description: 'Transform your outdated, slow website into a lightning-fast, high-converting digital experience that retains visitors.',
    icon: 'RefreshCw',
    features: ['Modern UI/UX audit', 'Page load speed improvements', 'Optimized conversion paths', 'Responsive modern layout']
  },
  {
    id: 'landing-pages',
    title: 'High-Converting Landing Pages',
    description: 'Standalone pages engineered specifically to turn paid/social traffic into qualified leads or product sales.',
    icon: 'Target',
    features: ['A/B test ready structure', 'Optimized copy layout', 'Stripe or checkout options', 'Analytics & heatmaps setup']
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    description: 'Fully loaded online shops with payment gateway integration, intuitive checkout flows, and custom inventory management.',
    icon: 'ShoppingCart',
    features: ['Stripe & PayPal setups', 'Mobile-first shopping cart', 'Inventory tracking panel', 'Order email notifications']
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Ongoing Support',
    description: 'Keep your digital systems running smoothly. Regular updates, vulnerability patches, content changes, and uptime monitoring.',
    icon: 'ShieldCheck',
    features: ['Monthly security audits', 'Daily database backups', 'Fast turnarounds for changes', '24/7 uptime monitoring']
  }
];

export const projects: Project[] = [
  {
    id: 'rajgharana-lifestyle',
    title: 'Rajgharana Lifestyle Storefront',
    client: 'Rajgharana Lifestyle',
    category: 'E-commerce Storefront',
    imageColor: 'from-amber-500 to-amber-700',
    description: 'Premium ethnic wear and lifestyle e-commerce storefront. Designed custom catalog filtering, optimized navigation flow, and custom product grids to handle high traffic spikes.',
    results: [
      'Boosted catalog page loading speed by 35% on mobile devices',
      'Improved design mapping for sari and collection catalogs',
      'Reduced checkout drop-offs by 15% with simplified form entries'
    ],
    technologies: ['React', 'Tailwind CSS', 'Shopify Storefront API', 'Vite'],
    liveUrl: 'https://rajgharanalifestyle.com/'
  },
  {
    id: 'mysore-pattu',
    title: 'Mysore Pattu Silk Store',
    client: 'Mysore Pattu Silks',
    category: 'E-commerce Storefront',
    imageColor: 'from-rose-500 to-rose-700',
    description: 'Retail storefront for Mysore Silk sarees. Engineered clean product filtering systems, advanced image zoom tools, and secure Indian payment gateway integrations.',
    results: [
      'Increased checkout conversion rate by 28% in 60 days',
      'Delivered ultra-fast rendering on image-heavy product pages',
      'Automated customer invoice generation and order logs'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'Razorpay API'],
    liveUrl: 'https://mysorepattu.com/'
  },
  {
    id: 'khushbu-jewellers',
    title: 'Khushbu Jewellers Catalog',
    client: 'Khushbu Jewellers',
    category: 'E-commerce Storefront',
    imageColor: 'from-yellow-400 to-yellow-600',
    description: 'Luxury jewellery e-commerce showcase. Designed a high-fidelity virtual display catalog, responsive product filtering, and quick WhatsApp client inquiry links.',
    results: [
      'Increased direct client inquiries by 65% via instant chat shortcuts',
      'Reduced initial page size by 40% using WebP format assets',
      'Achieved perfect 100/100 Lighthouse mobile speed score'
    ],
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'Vercel'],
    liveUrl: 'https://khushbujewellers.com/'
  },
  {
    id: 'khel-khilona-hub',
    title: 'Khel Khilona Toy Hub',
    client: 'Khel Khilona Hub Toys',
    category: 'E-commerce Storefront',
    imageColor: 'from-sky-400 to-sky-600',
    description: 'Interactive toy and educational children\'s games e-commerce hub. Crafted animated catalog cards, child-friendly layouts, and a custom cart validation system.',
    results: [
      'Raised average order value (AOV) by 22% using custom upsell logic',
      'Reduced checkout abandonment by 18% with single-page checkout fields',
      'Maintained stable sub-second load times under peak load'
    ],
    technologies: ['React', 'Tailwind CSS', 'Shopify Storefront API', 'Vite'],
    liveUrl: 'https://khelkhilonahub.com/'
  },
  {
    id: 'continental-coffee',
    title: 'Continental Coffee D2C Shop',
    client: 'Continental Coffee',
    category: 'E-commerce Storefront',
    imageColor: 'from-amber-800 to-stone-900',
    description: 'Official direct-to-consumer e-commerce shop for Continental Coffee. Integrated bulk subscriptions, coffee selection quizzes, and custom checkout widgets.',
    results: [
      'Increased D2C monthly coffee orders by 45% post-relaunch',
      'Compressed asset layers to achieve sub-second content loads',
      'Integrated recurring checkout checks and automated orders'
    ],
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'Vite'],
    liveUrl: 'https://shop.continental.coffee/'
  },
  {
    id: 'foundation-gift',
    title: 'Foundation Gift Portal',
    client: 'Foundation Gift Corporate',
    category: 'E-commerce Storefront',
    imageColor: 'from-blue-500 to-cyan-600',
    description: 'Corporate gifting and customized gift curation portal. Designed interactive custom gift-box builders, bulk-ordering quotes widgets, and delivery scheduling charts.',
    results: [
      'Generated over ₹12 Lakhs in bulk pre-orders in first quarter',
      'Reduced checkout friction for multi-recipient orders by 35%',
      'Optimized metadata resulting in top rank positions on Google'
    ],
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Vercel'],
    liveUrl: 'https://foundationgift.com/'
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery Call',
    description: 'We meet for 30 minutes to discuss your business goals, target audience, and current digital bottlenecks.',
    duration: '30 Mins'
  },
  {
    step: '02',
    title: 'Planning & Strategy',
    description: 'I outline a comprehensive roadmap, wireframes, and select a technology stack tailored specifically for your target conversions.',
    duration: '3-5 Days'
  },
  {
    step: '03',
    title: 'Design & Prototyping',
    description: 'I build interactive mockups in Figma, showing you exactly how the layout, branding, and conversion pathways will feel.',
    duration: '1-2 Weeks'
  },
  {
    step: '04',
    title: 'Development',
    description: 'I translate the approved layouts into clean, robust, mobile-responsive code, optimizing loading speeds and SEO meta tags.',
    duration: '2-4 Weeks'
  },
  {
    step: '05',
    title: 'Testing & Optimization',
    description: 'Rigorous cross-device rendering tests, Lighthouse speed audits, and security vulnerability patching.',
    duration: '3-5 Days'
  },
  {
    step: '06',
    title: 'Launch & Support',
    description: 'I deploy your project to production (Vercel/Netlify), hook up your custom domain, and provide training plus 30 days of support.',
    duration: 'Ongoing'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Ananya Sharma',
    role: 'Founder',
    company: 'EcoGlow Skincare',
    feedback: 'Working with Alex was an absolute game-changer. Our mobile checkouts doubled in speed, and our sales increased by 42% in the first month. He explained every decision from a business perspective rather than overloading us with code terminology.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Rohan Malhotra',
    role: 'Operations Director',
    company: 'Apex Logistics',
    feedback: 'Our custom dispatch board runs flawlessly. What used to take our dispatchers all morning on spreadsheets now happens with drag-and-drop in 10 minutes. The system has paid for itself five times over in saved administrative hours.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Priyanka Patel',
    role: 'Owner',
    company: 'FitFlow Yoga',
    feedback: 'Alex built our booking landing page in two weeks. He was transparent about the price, communicated on Slack daily, and launched it exactly on schedule. The class bookings started rolling in from Instagram immediately. Highly recommended!',
    rating: 5
  }
];

export const pricingPackages: PricingPackage[] = [
  {
    name: 'Starter Website',
    price: '$1,900',
    description: 'A beautiful, hyper-fast single-page website designed to establish credibility and capture local client leads.',
    timeline: '2-3 weeks',
    features: [
      'Conversion-focused layout',
      'Fully responsive (Mobile first)',
      'Basic SEO configuration',
      'Lead capture form integration',
      'Social links & custom map',
      '30 Days post-launch support'
    ],
    ctaText: 'Get Starter Quote'
  },
  {
    name: 'Business Website',
    price: '$3,500',
    description: 'A multi-page custom digital hub featuring advanced search integrations, blogs, and tailored service sections.',
    timeline: '4-6 weeks',
    popular: true,
    features: [
      'Up to 7 custom pages',
      'Speed-optimized React frontend',
      'Advanced On-page SEO setup',
      'Interactive Calendly/scheduling booking',
      'Content management system (CMS)',
      'Standard animations & transitions',
      '60 Days post-launch support'
    ],
    ctaText: 'Get Business Quote'
  },
  {
    name: 'Custom Application',
    price: '$6,000+',
    description: 'Scalable full-stack systems including customer dashboards, payment portals, database setups, and process automations.',
    timeline: '6-8+ weeks',
    features: [
      'Custom database design (MongoDB/Postgres)',
      'Secure admin dashboard & reporting',
      'Custom user accounts & authentication',
      'Full checkout / payment gateway flow',
      'Automated emails & SMS alerts',
      '90 Days post-launch support'
    ],
    ctaText: 'Book Architecture Call'
  }
];

export const faqs: FAQ[] = [
  {
    question: 'How much does a website typically cost?',
    answer: 'Standard business websites typically range between ₹1.5 Lakhs and ₹3 Lakhs, depending on your pages and features. Custom web applications with secure databases and user dashboards require a separate custom quote. Every project has a fixed upfront price, meaning you will never experience surprise fees or hidden costs.'
  },
  {
    question: 'What do you need from me to get started?',
    answer: 'We start with a 30-minute discovery call to align on goals. Once we proceed, I will need your high-resolution logo, color preferences, any text copy you have, photos of your team or work, and your domain login details. If you need help with copy or images, I can guide you.'
  },
  {
    question: 'How long does it take to complete a project?',
    answer: 'A standard custom website takes 4 to 6 weeks from kickoff to launch. Single-page landing pages can be ready in 2 to 3 weeks, while complex software portals take 8+ weeks. I divide the work into weekly milestones, so you will see progress live on a staging site.'
  },
  {
    question: 'What if I want changes during the project?',
    answer: 'We work in clear phases: strategy, design, and code. You review and approve the Figma layouts before I start coding. If you need minor tweaks during development, I build them right in. Major changes outside our initial plan will be discussed upfront for transparency.'
  },
  {
    question: 'Will I be able to update my website myself?',
    answer: 'Yes, absolutely. For sites that need regular edits, I build an easy-to-use editor panel. You will get a simple, password-protected dashboard where you can rewrite text, upload new photos, or post blogs in a few clicks. I also provide custom training videos to guide you.'
  },
  {
    question: 'What happens after the website goes live?',
    answer: 'I do not launch your site and disappear. You get 30 days of free post-launch support to monitor performance and fix any bugs. Afterward, you can opt for a monthly maintenance plan for automated updates, daily backups, speed checks, and quick edits, or manage it yourself.'
  },
  {
    question: 'Do you help with hosting and domain setup?',
    answer: 'Yes. I handle the entire setup, deploying your site on high-performance cloud hosting and linking it to your domain. You purchase the hosting and domain in your own name so you maintain complete ownership, while I manage all the technical configurations for you.'
  },
  {
    question: 'Why should I hire a freelancer instead of an agency?',
    answer: 'Agencies charge higher rates to cover overhead, sales teams, and project managers. When you hire me, you work directly with the developer building your site. This means direct communication, faster turnaround times, absolute accountability, and a high-performance website without paying for agency markup.'
  }
];
