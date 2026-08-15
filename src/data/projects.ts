export type Project = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: string;
  overview: string;
  challenge: string;
  approach: string;
  contributions: string[];
  stat?: { value: string; label: string };
  tags: string[];
  visual: "dashboard" | "marketplace";
};

export const projects: Project[] = [
  {
    id: "firewood",
    index: "01",
    title: "Firewood",
    subtitle: "Enterprise LPG management platform",
    category: "Enterprise Software",
    overview:
      "A full-scale enterprise LPG management system covering role-based access, customer data, real-time operations, production, finance, and HR processes across the business.",
    challenge:
      "Role-based access across operations, production, finance, and HR modules — every interface had to respect what each user was allowed to see and do, without slowing teams down.",
    approach:
      "Permission-aware React components and reusable, data-heavy screen patterns built with TypeScript — shared consistently across business modules.",
    contributions: [
      "Developed complex dashboard interfaces with React and TypeScript for enterprise users.",
      "Built data-heavy screens and reusable components, improving development efficiency by 30%.",
      "Solved role-based access challenges with permission-aware interfaces across multiple business modules.",
    ],
    stat: {
      value: "+30%",
      label: "development efficiency through the reusable component system",
    },
    tags: ["React", "TypeScript", "Enterprise Dashboards", "RBAC", "REST API"],
    visual: "dashboard",
  },
  {
    id: "jamanabd",
    index: "02",
    title: "Jamanabd",
    subtitle: "Multi-vendor e-commerce marketplace",
    category: "E-Commerce Marketplace",
    overview:
      "An online marketplace connecting local vendors with customers across multiple product categories — products, vendors, and orders flowing through one platform.",
    challenge:
      "A marketplace that never sits still — products, vendors, and categories change constantly, and the experience had to stay consistent across every device.",
    approach:
      "API-driven React interfaces designed around real marketplace workflows, with responsive layouts that adapt from desktop to mobile.",
    contributions: [
      "Developed responsive React interfaces for marketplace, product, and vendor features.",
      "Integrated API-driven data across marketplace workflows.",
      "Built interfaces for consistent UX across dynamic workflows and multiple devices.",
    ],
    tags: ["React", "JavaScript", "REST API", "Responsive UI"],
    visual: "marketplace",
  },
];
