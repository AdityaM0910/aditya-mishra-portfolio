import React from 'react';
import { Section } from '../components/Section';
import { SkillGroup } from '../components/SkillGroup';
import { skillsData } from '../data/misc';

export const Skills: React.FC = () => {
  return (
    <Section title="Technical Skills" subtitle="Technologies and methodologies I use to solve problems.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((group, idx) => (
          <SkillGroup key={idx} group={group} />
        ))}
      </div>
    </Section>
  );
};
