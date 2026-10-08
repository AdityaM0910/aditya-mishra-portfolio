import React from 'react';
import { Link } from 'react-router-dom';
import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';
import { Section } from '../components/Section';
import { ProjectCard } from '../components/ProjectCard';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

export const Home: React.FC = () => {
  const featuredProjects = projectsData.filter(p => p.featured);

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 -z-10 pointer-events-none" />
      <Section className="pt-20 md:pt-28 pb-32">
        <div className="max-w-4xl relative">
          <div className="absolute -left-6 top-2 bottom-6 w-1 bg-primary-100 rounded-full hidden sm:block"></div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            {profileData.name}
          </h1>
          <p className="text-xl sm:text-2xl md:text-[28px] font-medium text-gray-500 mb-6">
            {profileData.title}
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl">
            {profileData.shortIntro}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/projects" className="btn-primary">
              View Projects
            </Link>
            <a href={profileData.resumeUrl} target="_blank" rel="noreferrer" className="btn-secondary">
              <Download size={18} className="mr-2" />
              Download Resume
            </a>
          </div>
          
          <div className="mt-12 flex items-center space-x-6">
            <a href={profileData.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 flex items-center transition-colors">
              <GithubIcon size={20} className="mr-2" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 flex items-center transition-colors">
              <LinkedinIcon size={20} className="mr-2" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a href={`mailto:${profileData.email}`} className="text-gray-500 hover:text-gray-900 flex items-center transition-colors">
              <Mail size={20} className="mr-2" />
              <span className="text-sm font-medium">Email</span>
            </a>
          </div>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section className="bg-gray-50" title="Featured Work" subtitle="A selection of my best case studies and technical projects.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/projects" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-800">
            View all projects <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </Section>
    </div>
  );
};
