import React from 'react';
import type { Experience } from '../types';

interface TimelineItemProps {
  experience: Experience;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ experience }) => {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      {/* Timeline line */}
      <div className="absolute left-2 sm:left-[7.5rem] top-0 bottom-0 w-px bg-gray-200 group-last:bottom-auto group-last:h-full group-hover:bg-primary-200 transition-colors"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 sm:left-[7.125rem] top-8 w-4 h-4 rounded-full border-2 border-primary-400 bg-white group-hover:border-primary-600 group-hover:bg-primary-50 transition-colors"></div>
      
      <div className="flex flex-col sm:flex-row sm:items-baseline mb-1 sm:space-x-4">
        <span className="sm:absolute sm:left-0 sm:w-24 sm:text-right text-sm font-semibold text-gray-500 mb-2 sm:mb-0">
          {experience.duration}
        </span>
        <h3 className="text-lg font-bold text-gray-900">{experience.role}</h3>
      </div>
      
      <div className="mb-4">
        <span className="text-md font-medium text-primary-600">{experience.company}</span>
        <span className="mx-2 text-gray-300">•</span>
        <span className="text-sm text-gray-500">{experience.type}</span>
      </div>
      
      <ul className="space-y-2 text-gray-600">
        {experience.description.map((desc, idx) => (
          <li key={idx} className="relative pl-4">
            <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
};
