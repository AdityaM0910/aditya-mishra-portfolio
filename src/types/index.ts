export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  category: 'Data Analytics' | 'SQL' | 'Python' | 'BI' | 'Testing' | 'Other';
  technologies: string[];
  problem: string;
  objective: string;
  dataset: string;
  approach: string[];
  keyInsights: string[];
  outcome: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  image?: string;
  date: string;
  status: 'Completed' | 'In Progress';
  whatILearned?: string[];
  whatIWouldImprove?: string[];
}

export interface SkillGroup {
  name: string;
  skills: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  type: 'Work' | 'Education' | 'Certification';
}

export interface BuildLogEntry {
  id: string;
  date: string;
  title: string;
  description: string;
  link?: string;
}

export interface Profile {
  name: string;
  title: string;
  shortIntro: string;
  about: {
    howIWork: string;
    whatILikeBuilding: string;
    whatImLearning: string[];
    whatImLookingFor: string;
  };
  howIThink: string[];
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
}
