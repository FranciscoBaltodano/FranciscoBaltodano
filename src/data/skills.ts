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
} from "@/components/icons/skills"

export interface Skill {
  name: string
  icon: any
}

export interface SkillCategory {
  category: string
  category_en: string
  skills: Skill[]
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    category_en: "Frontend",
    skills: [
      { name: "Astro", icon: astro },
      { name: "JavaScript", icon: javascript },
      { name: "TypeScript", icon: typescript },
      { name: "Next.js", icon: next },
      { name: "React Native", icon: react },
      { name: "Laravel", icon: laravelicon },
      { name: "TanStack", icon: tanstack },
      { name: "Redux", icon: redux },
    ],
  },

  {
    category: "UI / Diseño",
    category_en: "UI / Design",
    skills: [
      { name: "Bootstrap", icon: bootstrap },
      { name: "Figma", icon: figma },
      { name: "Material UI", icon: materialui },
      { name: "Tailwind", icon: tailwind },
    ],
  },

  {
    category: "Backend",
    category_en: "Backend",
    skills: [
      { name: "Express", icon: express },
      { name: "Node.js", icon: node },
      { name: "Spring Boot", icon: springboot },
      { name: "Python", icon: python },
    ],
  },

  {
    category: "Bases de Datos",
    category_en: "Databases",
    skills: [
      { name: "MySQL", icon: mysql },
      { name: "PostgreSQL", icon: postgresql },
      { name: "SQL Server", icon: sqlserver },
      { name: "MongoDB", icon: mongo },
      { name: "Supabase", icon: supabase },
      { name: "Oracle", icon: oracle },
    ],
  },

  {
    category: "Data / Analítica",
    category_en: "Data / Analytics",
    skills: [
      { name: "Excel", icon: excel },
      { name: "Power BI", icon: powerbi },
      { name: "Tableau", icon: tableau },
    ],
  },

  {
    category: "DevOps / Deploy",
    category_en: "DevOps / Deployment",
    skills: [
      { name: "Terraform", icon: terraform },
      { name: "Cloudflare", icon: cloudflare },
      { name: "Netlify", icon: netlify },
      { name: "Vercel", icon: vercel },
      { name: "GitHub", icon: github },
    ],
  },

  {
    category: "Productividad / Otros",
    category_en: "Productivity / Other",
    skills: [
      { name: "ClickUp", icon: clickup },
      { name: "Jira", icon: jira },
      { name: "Slack", icon: slack },
      { name: "WordPress", icon: wordpress },
    ],
  },
]
