import React from 'react';
import type { SkillGroup as SkillGroupType } from '../types';

interface SkillGroupProps {
  group: SkillGroupType;
}

export const SkillGroup: React.FC<SkillGroupProps> = ({ group }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-4">{group.name}</h3>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span 
            key={skill} 
            className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-50 text-gray-700 border border-gray-100"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
