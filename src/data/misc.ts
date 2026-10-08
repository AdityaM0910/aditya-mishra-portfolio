import type { SkillGroup, Experience, BuildLogEntry } from '../types';

export const skillsData: SkillGroup[] = [
  {
    name: "DATA & ANALYTICS",
    skills: ["SQL", "PostgreSQL", "Python", "Pandas", "NumPy", "Excel", "Power BI"]
  },
  {
    name: "PROGRAMMING",
    skills: ["Python", "C++"]
  },
  {
    name: "TESTING",
    skills: ["Manual Testing", "Test Cases", "Bug Reporting", "RTM", "Test Documentation"]
  },
  {
    name: "TOOLS",
    skills: ["Git", "GitHub", "VS Code", "Jupyter", "Google Colab", "Jira"]
  }
];

export const experienceData: Experience[] = [
  {
    id: "edu-1",
    role: "Bachelor of Technology in Computer Science",
    company: "ABES Institute of Technology, Ghaziabad",
    duration: "2022 - 2026",
    description: [
      "graduated with academic excellence, achieving a CGPA of 8.07/10.",
      "Graduated with a strong foundation in computer science principles with a focus on data analytics .",
      "Completed coursework in database management systems, artificial intelligence, machine learning, and data analytics.",
          ],
    type: "Education"
  }
];

export const buildLogData: BuildLogEntry[] = [
  {
    id: "log-1",
    date: "2026-10-10",
    title: "Completed OrangeHRM Testing",
    description: "Finished drafting the RTM and Test Summary Report for the manual testing project."
  },
  {
    id: "log-2",
    date: "2026-10-05",
    title: "Added SLA analysis to Quick Commerce project",
    description: "Expanded the SQL queries to accurately calculate 10-minute SLA breaches based on timestamps."
  },
  {
    id: "log-3",
    date: "2026-09-15",
    title: "Learning Power BI",
    description: "Started building interactive dashboards and learning DAX to support my SQL backend work."
  }
];
