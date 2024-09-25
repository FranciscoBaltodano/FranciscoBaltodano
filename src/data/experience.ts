import type { Props as ExperienceProp } from "../components/experience/props";

export const EXPERIENCE: ExperienceProp[] = [
  {
    id:1,
    path: "/experience/1",
    dates: "Junio 2024 - Agosto 2024",
    title: "Sistema Universitario",
    url: "https://github.com/FranciscoBaltodano/Proyecto_Ingenieria_Del_Software_Frontend",
    description:
      "Sistema para la gestion de docentes, estudiantes, matricula y admisiones que incluye sistema de mensajeria en tiempo real. Este sistema tambien cubre la gestion de solicitudes academicas, cambios de clave, creacion de empleados, e impartición de actividades.",
    technologies: [
      "React JS",
      "Express",
      "Material UI",
      "Tailwind CSS",
      "CommetChat",
      "Node JS",
      "Supabase",
    ],
    logo: "/logos/sistemaUniversitario.webp",
  },
  {
    id:2,
    path: "/experience/2",
    dates: "Julio 2023 — Agosto 2023",
    title: "Joy Delivery",
    url: "https://github.com/FranciscoBaltodano/JOYdeliveyFrontend",
    description:
      "Sistema de delivery que incluye gestion de motoristas, creación de productos, carrito de compras, costo de envios basado en coordenadas geograficas, y sistema de pagos.",
    technologies: [
      "Laravel",
      "Spring Boot",
      "Swagger",
      "Bootstrap",
    ],
    logo: "/logos/joy.jpg",
  },
  {
    id:3,
    path: "/experience/3",
    dates: "Febrero 2024 — Abril 2024",
    title: "FCCMalcotal",
    url: "https://fccmalcotal.org/",
    description:
      "Sitio web para dar a conocer la fundación Cerro de Cáscaras Malcotal (FCCMalcotal) y sus proyectos. El sitio incluye un blog, galería de fotos, y un sistema de donaciones.",
    technologies: ["Wordpress"],
    logo: "/logos/fccmalcotal.webp",
  },
 
];
