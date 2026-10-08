import React from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../types';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={`flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-primary-200 group ${project.featured ? 'border-t-4 border-t-primary-500 shadow-sm' : 'border-t-2 border-t-gray-100'}`}>
      <div className="p-6 flex-grow relative">
        <div className="flex justify-between items-start mb-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide bg-primary-50 text-primary-700 border border-primary-100">
            {project.category}
          </span>
          <div className="flex space-x-2">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900" aria-label="GitHub Repository">
                <GithubIcon size={18} />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900" aria-label="Live Demo">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
        
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-sm sm:text-base font-medium text-gray-500 mb-3">{project.problem}</p>
        <p className="text-gray-600 text-sm sm:text-base mb-6 flex-grow">{project.outcome}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="inline-flex items-center px-2 py-1 rounded text-xs sm:text-[13px] font-medium bg-gray-100 text-gray-700">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="inline-flex items-center px-2 py-1 rounded text-xs sm:text-[13px] font-medium bg-gray-50 text-gray-500">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>
      
      <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50 group-hover:bg-primary-50/30 transition-colors">
        <Link to={`/projects/${project.id}`} className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-800 transition-colors">
          View Case Study
          <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
