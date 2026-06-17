import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Award, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';

export default function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-5 py-20">
        <h2 className="text-2xl font-bold font-display text-zinc-900 dark:text-white mb-4">
          Case Study Not Found
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-md mb-8">
          The project case study you are looking for does not exist or has been updated.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center bg-primary-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-primary-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>
    );
  }

  const isRealUrl = project.liveUrl && project.liveUrl !== '#';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 pt-28 pb-16 space-y-8"
    >
      {/* Back navigation link */}
      <div>
        <Link
          to="/"
          className="inline-flex items-center text-xs font-bold text-zinc-500 hover:text-primary-600 dark:text-zinc-400 dark:hover:text-primary-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          Back to Portfolio
        </Link>
      </div>

      {/* Case Study Header Card */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 rounded-2xl overflow-hidden shadow-sm">
        {/* Banner Gradient */}
        <div className={`h-4 bg-gradient-to-r ${project.imageColor}`} />
        
        <div className="p-6 md:p-10 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-primary-600 dark:text-primary-400 tracking-wider uppercase block">
              {project.category}
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold font-display text-zinc-900 dark:text-white leading-tight">
              {project.title}
            </h1>
          </div>

          {/* Client box */}
          <div className="flex justify-between items-center text-xs sm:text-sm p-4 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800/40 rounded-xl">
            <span className="text-zinc-500">Client Partner:</span>
            <span className="font-bold text-zinc-800 dark:text-zinc-200">{project.client}</span>
          </div>

          {/* Challenge & Solution */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Project Overview
            </h3>
            <p className="text-sm sm:text-base text-zinc-650 dark:text-zinc-350 leading-relaxed font-sans">
              {project.description}
            </p>
          </div>

          {/* Business Outcomes */}
          <div className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/40">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Measurable Business Outcomes
              </h3>
            </div>
            <ul className="grid gap-3 sm:grid-cols-1">
              {project.results.map((result, idx) => (
                <li key={idx} className="flex items-start text-sm text-zinc-700 dark:text-zinc-300 leading-normal">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0 mr-3 font-bold text-xs mt-0.5">✓</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3 pt-4 border-t border-zinc-100 dark:border-zinc-800/40">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Technologies Utilized
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-semibold font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800/40 flex flex-col sm:flex-row gap-4">
            {isRealUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold py-3.5 px-6 rounded-xl hover:bg-primary-600 dark:hover:bg-primary-500 dark:hover:text-white transition-all text-center text-sm shadow-md"
              >
                Launch Live Storefront
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            )}
            <Link
              to="/"
              className="flex-1 inline-flex items-center justify-center border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold py-3.5 px-6 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all text-center text-sm"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
