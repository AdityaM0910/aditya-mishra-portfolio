import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { Section } from '../components/Section';
import { ArrowLeft, ExternalLink, Calendar, Tag } from 'lucide-react';
import { GithubIcon } from '../components/Icons';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <Section className="text-center py-32">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <Link to="/projects" className="text-primary-600 hover:underline">Return to projects</Link>
      </Section>
    );
  }

  return (
    <article className="pb-20">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/projects" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Link>
          
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">{project.title}</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl">{project.shortDescription}</p>
          
          <div className="flex flex-wrap gap-6 items-center text-sm text-gray-500 mb-8">
            <div className="flex items-center">
              <Calendar size={16} className="mr-2 text-primary-500" />
              {project.date}
            </div>
            <div className="flex items-center">
              <Tag size={16} className="mr-2 text-primary-500" />
              {project.category}
            </div>
            <div className="flex items-center">
              <span className={`inline-block w-2 h-2 rounded-full mr-2 ${project.status === 'Completed' ? 'bg-primary-500' : 'bg-yellow-500'}`}></span>
              {project.status}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary">
                <GithubIcon size={18} className="mr-2" /> View Source
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary">
                <ExternalLink size={18} className="mr-2" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-16">
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Problem & Objective</h2>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">The Problem</h3>
              <p className="text-gray-700 mb-6">{project.problem}</p>
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">The Objective</h3>
              <p className="text-gray-700">{project.objective}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Data & Technologies</h2>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Dataset</h3>
              <p className="text-gray-700">{project.dataset}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-md text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Approach & Implementation</h2>
            <ul className="space-y-4">
              {project.approach.map((step, idx) => (
                <li key={idx} className="flex">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-800 font-bold text-sm mr-4">
                    {idx + 1}
                  </span>
                  <p className="text-gray-700 mt-1">{step}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Key Insights & Findings</h2>
            <div className="bg-primary-50 border border-primary-100 rounded-xl p-6 sm:p-8">
              <ul className="space-y-4">
                {project.keyInsights.map((insight, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span className="text-gray-800 font-medium">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Outcome</h2>
            <p className="text-gray-700 text-lg leading-relaxed">{project.outcome}</p>
          </section>

          {(project.whatILearned || project.whatIWouldImprove) && (
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-200 pt-16">
              {project.whatILearned && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">What I Learned</h2>
                  <ul className="space-y-2">
                    {project.whatILearned.map((item, idx) => (
                      <li key={idx} className="text-gray-600 flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {project.whatIWouldImprove && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">v2.0 Improvements</h2>
                  <ul className="space-y-2">
                    {project.whatIWouldImprove.map((item, idx) => (
                      <li key={idx} className="text-gray-600 flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          )}

      </div>
    </article>
  );
};
