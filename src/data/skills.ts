export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "Vue.js", "Nuxt.js", "Redux Toolkit", "Pinia", "Tailwind CSS"],
  },
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    label: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    label: "Tools & Workflow",
    items: ["Git", "GitHub", "Docker", "Figma", "Jira"],
  },
  {
    label: "Testing",
    items: ["Playwright", "Cypress"],
  },
];
