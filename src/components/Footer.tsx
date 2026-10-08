import React from 'react';
import { profileData } from '../data/profile';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start space-x-6 md:order-2">
            <a href={profileData.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900">
              <span className="sr-only">GitHub</span>
              <GithubIcon size={20} />
            </a>
            <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900">
              <span className="sr-only">LinkedIn</span>
              <LinkedinIcon size={20} />
            </a>
            <a href={`mailto:${profileData.email}`} className="text-gray-500 hover:text-gray-900">
              <span className="sr-only">Email</span>
              <Mail size={20} />
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center md:text-left text-base text-gray-500 font-medium">
              {profileData.name}
            </p>
            <p className="text-center md:text-left text-sm text-gray-400 mt-1">
              Computer Science Graduate | Data & Analytics
            </p>
            <p className="text-center md:text-left text-sm text-gray-400 mt-4">
              &copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
