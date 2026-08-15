export type Capability = {
  id: string;
  title: string;
  description: string;
};

export const capabilities: Capability[] = [
  {
    id: "complex-apps",
    title: "Complex Frontend Applications",
    description:
      "Structured, maintainable interfaces for enterprise workflows — ERP modules, dashboards, and data-heavy screens that businesses rely on daily.",
  },
  {
    id: "component-architecture",
    title: "Component Architecture & State",
    description:
      "Reusable component systems with predictable state via Redux Toolkit and Pinia — less duplication, faster feature delivery.",
  },
  {
    id: "api-integration",
    title: "API & Data Integration",
    description:
      "Connecting frontends to REST APIs and shaping dynamic, data-driven workflows end to end with backend teams.",
  },
  {
    id: "performance",
    title: "Performance Optimization",
    description:
      "Faster loads and smoother interactions — measurable improvements in usability and load time across products.",
  },
  {
    id: "access-control",
    title: "Access Control & RBAC",
    description:
      "Permission-aware interfaces that keep enterprise data safe without getting in the way of the people using them.",
  },
  {
    id: "responsive",
    title: "Responsive Engineering",
    description:
      "Consistent, deliberate experiences across desktop, tablet, and mobile — designed for each device, not stretched to fit.",
  },
];
