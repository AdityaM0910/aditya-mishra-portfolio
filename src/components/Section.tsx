import React, { type ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ title, subtitle, children, className }) => {
  return (
    <section className={cn('py-10 md:py-16', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-8 md:mb-12">
            {title && (
              <div className="flex items-center gap-4">
                <span className="w-8 h-px bg-primary-300"></span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">{title}</h2>
              </div>
            )}
            {subtitle && <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-4xl ml-12">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
