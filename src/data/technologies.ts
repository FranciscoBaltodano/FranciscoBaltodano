import {
  astro,
  bootstrap,
  clickup,
  cloudflare,
  excel,
  express,
  figma,
  github,
  javascript,
  jira,
  laravelicon,
  materialui,
  mongo,
  mysql,
  netlify,
  next,
  node,
  oracle,
  postgresql,
  powerbi,
  python,
  react,
  redux,
  slack,
  springboot,
  sqlserver,
  supabase,
  tableau,
  tailwind,
  tanstack,
  terraform,
  typescript,
  vercel,
  wordpress,
} from "../components/icons/technologies";

export const technologies = [
  // --- FRONTEND ---
  { category: "front", name: "Astro", icon: astro },
  { category: "front", name: "Javascript", icon: javascript },
  { category: "front", name: "Typescript", icon: typescript },
  { category: "front", name: "Next", icon: next },
  { category: "front", name: "React Native", icon: react },
  { category: "front", name: "Laravel", icon: laravelicon },
  { category: "front", name: "TanStack", icon: tanstack },
  { category: "front", name: "Redux", icon: redux },

  // --- UI / DISEÑO ---
  { category: "ui", name: "Bootstrap", icon: bootstrap },
  { category: "ui", name: "Figma", icon: figma },
  { category: "ui", name: "Material UI", icon: materialui },
  { category: "ui", name: "Tailwind", icon: tailwind },

  // --- BACKEND ---
  { category: "back", name: "Express", icon: express },
  { category: "back", name: "Node", icon: node },
  { category: "back", name: "Spring Boot", icon: springboot },
  { category: "back", name: "Python", icon: python },

  // --- BASE DE DATOS ---
  { category: "db", name: "MySQL", icon: mysql },
  { category: "db", name: "PostgreSQL", icon: postgresql },
  { category: "db", name: "SQL Server", icon: sqlserver },
  { category: "db", name: "Mongo", icon: mongo },
  { category: "db", name: "Supabase", icon: supabase },
  { category: "db", name: "Oracle", icon: oracle },

  // --- DATA / ANALÍTICA ---
  { category: "data", name: "Excel", icon: excel },
  { category: "data", name: "Power BI", icon: powerbi },
  { category: "data", name: "Tableau", icon: tableau },

  // --- DEVOPS / DEPLOY ---
  { category: "devops", name: "Terraform", icon: terraform },
  { category: "devops", name: "Cloudflare", icon: cloudflare },
  { category: "devops", name: "Netlify", icon: netlify },
  { category: "devops", name: "Vercel", icon: vercel },
  { category: "devops", name: "Github", icon: github },

  // --- PRODUCTIVIDAD / OTROS ---
  { category: "tools", name: "Click Up", icon: clickup },
  { category: "tools", name: "Jira", icon: jira },
  { category: "tools", name: "Slack", icon: slack },
  { category: "tools", name: "Wordpress", icon: wordpress },
];
