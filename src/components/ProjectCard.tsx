import { Link } from 'react-router-dom';
import { ExternalLink, Award, ArrowUpRight, Globe, Layers, ShoppingCart, ShieldCheck } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  // Resolve category icon as the media thumbnail
  const getCategoryIcon = (category: string) => {
    const cls = "w-5 h-5 text-white";
    if (category.includes('E-commerce')) return <ShoppingCart className={cls} />;
    if (category.includes('SaaS')) return <Layers className={cls} />;
    if (category.includes('Booking')) return <Globe className={cls} />;
    return <ShieldCheck className={cls} />;
  };

  const isRealUrl = project.liveUrl && project.liveUrl !== '#';

  return (
    <div className="group flex flex-col justify-between h-full bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-850 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="space-y-4">
        {/* Card Header (Category, Client, and Media Thumbnail on the right) */}
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1 min-w-0">
            <div className="flex items-center space-x-1.5 text-[10px] text-primary-600 dark:text-primary-400 font-bold tracking-wider uppercase">
              <span>{project.category}</span>
              <span className="text-zinc-300 dark:text-zinc-700">•</span>
              <span className="text-zinc-500 dark:text-zinc-455 normal-case font-medium truncate max-w-[110px] sm:max-w-none block">{project.client}</span>
            </div>
            
            <h3 className="text-base sm:text-lg font-bold font-display text-zinc-900 dark:text-white leading-snug group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              <a 
                href={project.liveUrl} 
                target={isRealUrl ? "_blank" : undefined}
                rel="noopener noreferrer" 
                className="hover:underline flex items-center gap-1 min-w-0"
              >
                <span className="truncate">{project.title}</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-primary-500 transition-colors flex-shrink-0" />
              </a>
            </h3>
          </div>

          {/* Compact visual category icon - no huge image */}
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.imageColor} flex items-center justify-center shadow-sm flex-shrink-0`}>
            {getCategoryIcon(project.category)}
          </div>
        </div>

        {/* Primary Impact Metric */}
        <div className="py-2.5 px-3 bg-emerald-500/5 border border-emerald-500/10 rounded-xl flex items-start space-x-2">
          <Award className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
          <div className="min-w-0">
            <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide block">Primary Impact</span>
            <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 leading-snug truncate">
              {project.results[0]}
            </p>
          </div>
        </div>
      </div>

      {/* Action triggers */}
      <div className="flex items-center gap-2 pt-2">
        <Link
          to={`/case-study/${project.id}`}
          className="flex-grow inline-flex items-center justify-center bg-zinc-900 dark:bg-zinc-850 hover:bg-primary-600 dark:hover:bg-primary-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all cursor-pointer text-center"
        >
          View Case Details
        </Link>

        <a
          href={project.liveUrl}
          target={isRealUrl ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="flex-grow inline-flex items-center justify-center border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold py-2.5 px-4 rounded-xl transition-all text-center"
        >
          Open Project
          <ExternalLink className="w-3.5 h-3.5 ml-1" />
        </a>
      </div>
    </div>
  );
}
