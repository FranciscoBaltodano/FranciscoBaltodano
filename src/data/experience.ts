export interface ExperienceItem {
  institution: string
  position: string
  position_en: string
  tasks: string[]
  tasks_en: string[]
  period: string
  period_en: string
  logo: string
}

export const experiencenData: ExperienceItem[] = [
  {
    institution: "Grupo Ficohsa",
    position: "Oficial de desarrollo ETL",
    position_en: "ETL Development Officer",
    tasks: [
      "Desarrollé y optimicé procesos ETL con Oracle Data Integrator (ODI) para integrar y transformar datos provenientes de múltiples fuentes.",
      "Implementé procedimientos almacenados en SQL Server para automatizar procesos operativos y reducir tareas manuales.",
      "Desarrollé reportes de Business Intelligence en SAP BusinessObjects (SAP BO) y colaboré con usuarios de negocio en el diseño de soluciones.",
    ],
    tasks_en: [
      "Developed and optimized ETL processes with Oracle Data Integrator (ODI) to integrate and transform data from multiple sources.",
      "Implemented stored procedures in SQL Server to automate operational processes and reduce manual tasks.",
      "Developed Business Intelligence reports in SAP BusinessObjects (SAP BO) and collaborated with business users in solution design.",
    ],
    period: "Mar 2026 – Actualidad",
    period_en: "Mar 2026 – Present",
    logo: "/experience/FICOHSA.webp",
  },

  {
    institution: "Ingeniería Digital",
    position: "Analista de aseguramiento de la calidad",
    position_en: "Quality Assurance Analyst",
    tasks: [
      "Diseñé y ejecuté pruebas automatizadas E2E con Playwright, cubriendo escenarios críticos, positivos, negativos y de regresión.",
      "Realicé pruebas de APIs REST con Postman, validando endpoints, códigos de respuesta y calidad en la data.",
      "Ejecuté pruebas de regresión previas a despliegues y colaboré con desarrolladores en la identificación y validación de correcciones.",
    ],
    tasks_en: [
      "Designed and executed automated E2E tests with Playwright, covering critical, positive, negative, and regression scenarios.",
      "Performed REST API testing with Postman, validating endpoints, response codes, and data quality.",
      "Executed pre-deployment regression testing and collaborated with developers to identify and validate fixes.",
    ],
    period: "Jul 2025 – Mar 2026",
    period_en: "Jul 2025 – Mar 2026",
    logo: "/experience/INGENIERIA_DIGITAL.webp",
  },

  {
    institution: "Red Medicatel",
    position: "Desarrollador Full Stack",
    position_en: "Full Stack Developer",
    tasks: [
      "Implementé la integración de la pasarela de pagos Pixel Pay, aplicando buenas prácticas de seguridad para el manejo de transacciones.",
      "Desarrollé funcionalidades para la gestión de pólizas médicas y resolví incidencias críticas en frontend y backend.",
      "Optimicé y refactoricé consultas SQL, reduciendo deuda técnica y facilitando la evolución de la aplicación.",
    ],
    tasks_en: [
      "Implemented the Pixel Pay payment gateway integration, applying security best practices for transaction handling.",
      "Developed features for medical insurance policy management and resolved critical frontend and backend issues.",
      "Optimized and refactored SQL queries, reducing technical debt and facilitating application evolution.",
    ],
    period: "Jul 2025 – Nov 2025",
    period_en: "Jul 2025 – Nov 2025",
    logo: "/experience/MEDICATEL.webp",
  },

  {
    institution: "GuabaBIT",
    position: "Desarrollador Junior",
    position_en: "Junior Developer",
    tasks: [
      "Desarrollé una aplicación multiplataforma con React Native para Android e iOS.",
      "Diseñé el prototipo funcional en Figma y colaboré con el equipo de desarrollo bajo metodología Scrum.",
    ],
    tasks_en: [
      "Developed a cross-platform application with React Native for Android and iOS.",
      "Designed the functional prototype in Figma and collaborated with the development team following the Scrum methodology.",
    ],
    period: "Ene 2025 – May 2025",
    period_en: "Jan 2025 – May 2025",
    logo: "/experience/GUABABIT.webp",
  },
]
