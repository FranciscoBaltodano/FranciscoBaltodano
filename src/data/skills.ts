import {
  cloudflare,
  github,
  jira,
  mysql,
  oracle,
  postgresql,
  powerbi,
  slack,
  sqlserver,
  tableau,
  terraform,
  vercel,
} from "@/components/icons/skills"
import Azure from "@/components/icons/skills/azure.svg"
import Claude from "@/components/icons/skills/claude.svg"
import Cucumber from "@/components/icons/skills/cucumber.svg"
import Fabric from "@/components/icons/skills/fabric.svg"
import Jmeter from "@/components/icons/skills/jmeter.svg"
import N8N from "@/components/icons/skills/n8n.svg"
import Playwright from "@/components/icons/skills/playwright.svg"
import Postman from "@/components/icons/skills/postman.svg"
import Scrum from "@/components/icons/skills/scrum.svg"
import Selenium from "@/components/icons/skills/selenium.svg"
import Sonarqube from "@/components/icons/skills/sonarqube.svg"

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
  // {
  //   category: "Frontend",
  //   category_en: "Frontend",
  //   skills: [
  //     // { name: "Astro", icon: astro },
  //     // { name: "JavaScript", icon: javascript },
  //     { name: "TypeScript", icon: typescript },
  //     { name: "Next.js", icon: next },
  //     { name: "React Native", icon: react },
  //     // { name: "Laravel", icon: laravelicon },
  //     { name: "TanStack", icon: tanstack },
  //     // { name: "Redux", icon: redux },
  //   ],
  // },

  // {
  //   category: "UI / Diseño",
  //   category_en: "UI / Design",
  //   skills: [
  //     { name: "Bootstrap", icon: bootstrap },
  //     { name: "Figma", icon: figma },
  //     { name: "Material UI", icon: materialui },
  //     { name: "Tailwind", icon: tailwind },
  //   ],
  // },

  // {
  //   category: "Backend",
  //   category_en: "Backend",
  //   skills: [
  //     { name: "Express", icon: express },
  //     { name: "Node.js", icon: node },
  //     { name: "Spring Boot", icon: springboot },
  //     { name: "Python", icon: python },
  //   ],
  // },

  {
    category: "QA / Testing",
    category_en: "QA / Testing",
    skills: [
      { name: "Playwright", icon: Playwright },
      { name: "Selenium", icon: Selenium },
      { name: "JMeter", icon: Jmeter },
      { name: "Cucumber", icon: Cucumber },
    ],
  },
  {
    category: "Automatización / Calidad",
    category_en: "Automation / Quality",
    skills: [
      { name: "n8n", icon: N8N },
      { name: "Postman", icon: Postman },
      { name: "SonarQube", icon: Sonarqube },
      { name: "Claude Code", icon: Claude },
    ],
  },
  {
    category: "Bases de Datos",
    category_en: "Databases",
    skills: [
      { name: "MySQL", icon: mysql },
      { name: "PostgreSQL", icon: postgresql },
      { name: "SQL Server", icon: sqlserver },
      // { name: "MongoDB", icon: mongo },
      // { name: "Supabase", icon: supabase },
      { name: "Oracle", icon: oracle },
    ],
  },

  {
    category: "Data / Analítica",
    category_en: "Data / Analytics",
    skills: [
      // { name: "Excel", icon: excel },
      { name: "Azure Synapse", icon: Azure },
      { name: "Power BI", icon: powerbi },
      { name: "Tableau", icon: tableau },
      { name: "Fabric", icon: Fabric },
    ],
  },

  {
    category: "DevOps / Deploy",
    category_en: "DevOps / Deployment",
    skills: [
      { name: "Terraform", icon: terraform },
      { name: "Cloudflare", icon: cloudflare },
      // { name: "Netlify", icon: netlify },
      { name: "Vercel", icon: vercel },
      { name: "GitHub", icon: github },
    ],
  },

  {
    category: "Productividad",
    category_en: "Productivity",
    skills: [
      // { name: "ClickUp", icon: clickup },
      { name: "Jira", icon: jira },
      { name: "Slack", icon: slack },
      { name: "Azure Devops", icon: Azure },
      { name: "Scrum", icon: Scrum },
      // { name: "WordPress", icon: wordpress },
    ],
  },
]
