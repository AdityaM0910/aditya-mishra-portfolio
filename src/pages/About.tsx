import React from 'react';
import { Section } from '../components/Section';
import { profileData } from '../data/profile';
import { TimelineItem } from '../components/TimelineItem';
import { experienceData } from '../data/misc';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div>
      <Section title="Beyond the Resume" subtitle="Understanding the person and working style behind the projects.">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary-400 font-mono text-sm font-bold tracking-wider">01</span>
                <h3 className="text-2xl font-bold text-gray-900">How I Work</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">{profileData.about.howIWork}</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary-400 font-mono text-sm font-bold tracking-wider">02</span>
                <h3 className="text-2xl font-bold text-gray-900">What I Like Building</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">{profileData.about.whatILikeBuilding}</p>
            </div>
            
            <div className="bg-primary-50 p-6 sm:p-8 rounded-2xl border border-primary-100 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10 group-hover:opacity-70 transition-opacity"></div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-primary-500 font-mono text-sm font-bold tracking-wider">03</span>
                <h3 className="text-xl font-bold text-gray-900">My Problem-Solving Approach</h3>
              </div>
              <ol className="space-y-4">
                {profileData.howIThink.map((step, idx) => (
                  <li key={idx} className="flex items-start group/item">
                    <CheckCircle2 className="text-primary-400 mt-1 mr-3 flex-shrink-0 group-hover/item:text-primary-600 transition-colors" size={20} />
                    <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors">{step.substring(3)}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary-400 font-mono text-sm font-bold tracking-wider">04</span>
                <h3 className="text-2xl font-bold text-gray-900">What I'm Looking For</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">{profileData.about.whatImLookingFor}</p>
            </div>

          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-4">Currently Learning</h4>
              <ul className="space-y-3">
                {profileData.about.whatImLearning.map((item, idx) => (
                  <li key={idx} className="text-gray-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </Section>

      <Section className="bg-gray-50 border-t border-gray-200" title="Experience & Education">
        <div className="max-w-4xl">
          {experienceData.map(exp => (
            <TimelineItem key={exp.id} experience={exp} />
          ))}
        </div>
      </Section>
    </div>
  );
};
