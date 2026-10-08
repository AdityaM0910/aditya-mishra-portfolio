import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "quick-commerce-analytics",
    title: "Quick Commerce Operations Analytics Platform",
    shortDescription: "End-to-end operational analytics for a simulated quick commerce platform.",
    category: "Data Analytics",
    technologies: ["PostgreSQL", "Python", "SQL", "Power BI"],
    problem: "Quick commerce companies struggle to maintain 10-minute delivery SLAs during peak hours while managing inventory accurately.",
    objective: "Analyze order, delivery, and inventory data to identify operational bottlenecks and improve SLA compliance.",
    dataset: "Simulated quick-commerce dataset representing orders, delivery riders, and dark-store inventory over 6 months.",
    approach: [
      "Generated realistic dataset using Python simulating high-frequency orders.",
      "Loaded data into PostgreSQL and performed data cleaning.",
      "Wrote complex SQL queries to calculate delivery times, SLA breaches, and peak hour volumes.",
      "Built a Power BI dashboard to visualize delivery performance and inventory stockouts."
    ],
    keyInsights: [
      "Identified that 85% of SLA breaches occur during evening peak hours (7 PM - 9 PM).",
      "Found a correlation between rain-delays and a 40% drop in active delivery riders.",
      "Highlighted top 3 dark stores with consistent inventory stockouts on weekends."
    ],
    outcome: "Created a comprehensive operational dashboard that provides visibility into delivery health and inventory status.",
    githubUrl: "https://github.com/AdityaM0910/quick-commerce-operations-analytics",
    featured: true,
    date: "2026-10",
    status: "Completed",
    whatILearned: [
      "How to work with time-series data and timezone handling in PostgreSQL.",
      "The importance of indexing for query performance on large datasets.",
      "Translating raw operational metrics into business-friendly KPIs in Power BI."
    ],
    whatIWouldImprove: [
      "Implement an automated data pipeline instead of manual bulk loads.",
      "Add predictive modeling for inventory demand."
    ]
  },
  {
    id: "zepto-sql-analysis",
    title: "Zepto Inventory SQL Analysis",
    shortDescription: "SQL-driven analysis of inventory turnover and stockouts.",
    category: "SQL",
    technologies: ["PostgreSQL", "SQL"],
    problem: "Need to understand which products are frequently out of stock and how it impacts revenue.",
    objective: "Use SQL to extract insights on inventory turnover rates and lost sales opportunities.",
    dataset: "Sample retail inventory database (Products, Categories, Orders, Stock levels).",
    approach: [
      "Exploratory Data Analysis using basic SQL aggregations.",
      "Utilized Window Functions to rank top-selling products per category.",
      "Calculated inventory turnover ratio using CTEs.",
      "Analyzed out-of-stock events against customer order attempts."
    ],
    keyInsights: [
      "Fast-moving consumer goods (FMCG) had the highest stockout rates on weekends.",
      "Lost sales due to stockouts amounted to approximately 5% of total potential weekly revenue."
    ],
    outcome: "Delivered a set of optimized SQL scripts and a summary report of inventory health.",
    githubUrl: "https://github.com/AdityaM0910/Zepto_Inventory_SQL_Analysis",
    featured: true,
    date: "2026-05",
    status: "Completed",
    whatILearned: [
      "Advanced usage of Window Functions (RANK, DENSE_RANK, LEAD, LAG).",
      "Structuring complex queries using Common Table Expressions (CTEs) for readability."
    ]
  },
  {
    id: "healthcare-analytics",
    title: "Healthcare Patient Appointment Analytics",
    shortDescription: "Exploratory analysis of patient no-shows and appointment trends.",
    category: "Python",
    technologies: ["Python", "SQL", "Pandas"],
    problem: "Patient no-shows cost clinics time and revenue, and disrupt schedules.",
    objective: "Identify patterns and demographic factors correlated with appointment no-shows.",
    dataset: "Public healthcare dataset containing 100k+ appointment records.",
    approach: [
      "Cleaned data using Pandas, handling missing values and standardizing dates.",
      "Engineered features such as 'days_between_scheduling_and_appointment'.",
      "Grouped and aggregated data to find no-show rates across different clinics and age groups."
    ],
    keyInsights: [
      "Longer wait times between scheduling and the actual appointment significantly increased the likelihood of a no-show.",
      "SMS reminders reduced the no-show rate by a noticeable margin."
    ],
    outcome: "Generated a detailed exploratory data analysis (EDA) report highlighting key drivers of no-shows.",
    githubUrl: "https://github.com/AdityaM0910/Healthcare-Patient-Appointment-Analytics",
    featured: false,
    date: "2026-06",
    status: "Completed"
  },
  {
    id: "ibm-hr-analytics",
    title: "IBM HR Analytics",
    shortDescription: "Analyzing employee attrition and performance data.",
    category: "BI",
    technologies: ["Excel", "PostgreSQL", "SQL", "CTEs"],
    problem: "High employee attrition rates are costly and impact team productivity.",
    objective: "Determine the primary factors contributing to employee turnover.",
    dataset: "IBM HR Analytics Attrition Dataset.",
    approach: [
      "Imported data into PostgreSQL for structured querying.",
      "Wrote analytical queries using CTEs and window functions to analyze attrition by department, salary slab, and tenure.",
      "Exported aggregated results to Excel for final formatting and pivot chart creation."
    ],
    keyInsights: [
      "Employees with less than 2 years of tenure and lower salary hikes had the highest attrition rate.",
      "Frequent business travel was correlated with slightly higher attrition in specific technical roles."
    ],
    outcome: "Created a comprehensive Excel dashboard powered by SQL backend aggregations.",
    githubUrl: "https://github.com/AdityaM0910/IBM-HR-Employee-Analytics",
    featured: false,
    date: "2026-07",
    status: "Completed"
  },
  {
    id: "orangehrm-testing",
    title: "OrangeHRM Manual Testing Project",
    shortDescription: "End-to-end manual testing documentation for an HR management system.",
    category: "Testing",
    technologies: ["Manual Testing", "Test Plan", "Test Cases", "Bug Reporting", "RTM"],
    problem: "Ensuring the core modules (Login, Leave Management, PIM) of an HRM system function correctly under various scenarios.",
    objective: "Create comprehensive testing documentation and execute test cases to identify defects.",
    dataset: "OrangeHRM Demo Application.",
    approach: [
      "Analyzed requirements and drafted a Test Plan.",
      "Designed Test Scenarios and over 50 detailed Test Cases.",
      "Executed test cases and documented results.",
      "Logged defects with clear reproducible steps.",
      "Created a Requirements Traceability Matrix (RTM) and final Test Summary Report."
    ],
    keyInsights: [
      "Found boundary value defects in the leave application date fields.",
      "Identified usability issues in error messaging during invalid login attempts."
    ],
    outcome: "Delivered a complete testing portfolio demonstrating structured QA methodologies.",
    githubUrl: "https://github.com/AdityaM0910/manual-testing-orangehrm",
    featured: false,
    date: "2023-12",
    status: "Completed",
    whatILearned: [
      "The importance of clear, reproducible bug reports.",
      "How to maintain an RTM to ensure full test coverage of requirements."
    ]
  },
  {
    id: "rapido-ride-analytics",
    title: "Rapido Ride Analytics",
    shortDescription: "Comprehensive analysis of ride-hailing data to optimize driver allocation and pricing.",
    category: "Data Analytics",
    technologies: ["Python", "SQL", "Tableau", "Pandas"],
    problem: "Optimizing driver availability during peak hours and identifying high-demand zones.",
    objective: "Analyze historical ride data to uncover demand patterns and improve match rates.",
    dataset: "Anonymized Rapido ride records including timestamps, pickup/drop-off locations, and fares.",
    approach: [
      "Cleaned and pre-processed geospatial ride data using Pandas.",
      "Wrote SQL queries to aggregate demand by time of day and region.",
      "Built visualizations to highlight supply-demand gaps and surge pricing impacts."
    ],
    keyInsights: [
      "Peak demand occurs consistently between 8:30 AM - 10:30 AM and 5:30 PM - 8:00 PM.",
      "Driver wait times are longest in suburban zones, indicating a need for better allocation strategies."
    ],
    outcome: "Created an interactive dashboard for operations teams to monitor real-time zone health.",
    githubUrl: "https://github.com/AdityaM0910/rapido-ride-analytics",
    featured: true,
    date: "2024-02",
    status: "Completed",
    whatILearned: [
      "Handling geospatial data and extracting actionable insights from large datasets.",
      "Visualizing complex time-series trends effectively."
    ]
  }
];
