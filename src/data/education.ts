export interface EducationItem {
  institution: string
  degree: string
  degree_en: string
  location: string
  period: string
  period_en: string
  logo: string
  certificate?: string
}

export const educationData: EducationItem[] = [
  {
    institution: "Universidad Internacional de La Rioja",
    degree: "Maestría en Diseño y Gestión de Proyectos Tecnológicos",
    degree_en: "Master's in Technological Project Design and Management",
    location: "Ciudad de México, México",
    period: "Ago 2026 – Actualidad",
    period_en: "Aug 2026 – Present",
    logo: "/education/UNIR.webp",
  },
  {
    institution: "Oracle Next Education",
    degree: "Diplomado en Data Science",
    degree_en: "Diploma in Data Science",
    location: "Tegucigalpa, Honduras",
    period: "Ago 2025 – Ene 2026",
    period_en: "Aug 2025 – Jan 2026",
    logo: "/education/ONE.webp",
    certificate:
      "https://app.aluracursos.com/program/certificate/b510e6a8-4db1-4734-b039-07f219a683a0?lang",
  },
  {
    institution: "Universidad Nacional Autónoma de Honduras",
    degree: "Graduado con honores de la carrera de Ingeniería en Sistemas",
    degree_en: "Honors Graduate in Systems Engineering",
    location: "Tegucigalpa, Honduras",
    period: "Ene 2020 – Sep 2025",
    period_en: "Jan 2020 – Sep 2025",
    logo: "/education/UNAH.webp",
    certificate: "/education/Titulo_universitario.pdf",
  },
]
