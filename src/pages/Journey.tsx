import React from 'react';
import { Section } from '../components/Section';
import { buildLogData } from '../data/misc';

export const Journey: React.FC = () => {
  return (
    <Section title="Build Log / Journey" subtitle="A lightweight log of what I am currently working on, learning, and improving.">
      <div className="max-w-4xl border-l-2 border-gray-100 pl-8 space-y-12">
        {buildLogData.map(log => (
          <div key={log.id} className="relative group">
            <span className="absolute -left-[2.1875rem] top-1 w-3 h-3 bg-white border-2 border-primary-400 rounded-full group-hover:border-primary-600 group-hover:bg-primary-50 transition-colors"></span>
            <div className="text-sm font-semibold text-gray-500 mb-2">{log.date}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{log.title}</h3>
            <p className="text-gray-600 mb-3">{log.description}</p>
            {log.link && (
              <a href={log.link} target="_blank" rel="noreferrer" className="text-primary-600 text-sm font-medium hover:underline">
                View related work &rarr;
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};
