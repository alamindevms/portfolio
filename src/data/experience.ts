export type Job = {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  achievements: string[];
};

export type Metric = {
  value: string;
  label: string;
  context: string;
};

export const experience: Job[] = [
  {
    company: "Tyro Solutions",
    role: "Software Engineer",
    period: "Sep 2023 — Present",
    location: "Dhaka, Bangladesh",
    current: true,
    achievements: [
      "Developed enterprise ERP features using React and TypeScript across complex business workflows.",
      "Built complex dashboard interfaces and reusable components, reducing development effort by 30%.",
      "Integrated REST APIs and managed data-driven workflows in collaboration with backend engineers.",
      "Improved frontend performance and usability across enterprise workflows.",
    ],
  },
  {
    company: "Sysable Technology",
    role: "Frontend Developer",
    period: "Apr 2022 — Aug 2023",
    location: "Dhaka, Bangladesh",
    achievements: [
      "Developed frontend features for ERP, e-commerce, LMS, and distribution management applications.",
      "Built reusable dashboard components and optimized page performance, improving usability and reducing load time.",
      "Worked with QA and UX teams to refine features from user feedback, increasing usability test scores by 25%.",
      "Developed responsive interfaces across desktop, tablet, and mobile devices.",
    ],
  },
  {
    company: "Mistri Solutions",
    role: "Frontend Developer",
    period: "Feb 2021 — Mar 2022",
    location: "Dhaka, Bangladesh",
    achievements: [
      "Developed responsive web applications and e-commerce features using HTML5, CSS3, and JavaScript.",
      "Collaborated with a 5-member team to deliver e-commerce features on schedule.",
      "Implemented mobile-first and cross-browser responsive designs, contributing to 40% organic traffic growth.",
    ],
  },
];

export const metrics: Metric[] = [
  {
    value: "30%",
    label: "less development effort through reusable component systems",
    context: "Tyro Solutions",
  },
  {
    value: "25%",
    label: "higher usability test scores from QA & UX iteration",
    context: "Sysable Technology",
  },
  {
    value: "40%",
    label: "organic traffic growth from mobile-first responsive builds",
    context: "Mistri Solutions",
  },
];
