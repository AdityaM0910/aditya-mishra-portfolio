import React, { useState } from 'react';
import { Section } from '../components/Section';
import { ProjectCard } from '../components/ProjectCard';
import { projectsData } from '../data/projects';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  
  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(projectsData.map(p => p.category)))];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <Section title="Projects" subtitle="Detailed case studies of my technical work, highlighting problem-solving and methodology.">
      
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === cat 
                ? 'bg-gray-900 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500">No projects found for this category.</p>
        </div>
      )}
    </Section>
  );
};
