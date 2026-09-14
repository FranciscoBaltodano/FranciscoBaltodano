export interface HobbyItem {
  name: string
  name_en: string
  description: string
  description_en: string
  img: string
}

export const hobbiesData: HobbyItem[] = [
  {
    name: "Ajedrez",
    name_en: "Chess",
    description:
      "Practico ajedrez como una forma de fortalecer el pensamiento estratégico, la concentración y el análisis de diferentes escenarios antes de tomar decisiones.",
    description_en:
      "I practice chess to strengthen strategic thinking, concentration, and the ability to analyze different scenarios before making decisions.",
    img: "/hobbies/CHESS.png",
  },
  {
    name: "Programación",
    name_en: "Programming",
    description:
      "Desarrollo proyectos personales para explorar nuevas tecnologías, resolver problemas y mantener una práctica constante de aprendizaje y experimentación.",
    description_en:
      "I build personal projects to explore new technologies, solve problems, and maintain a consistent practice of learning and experimentation.",
    img: "/hobbies/PROGRAMING.jpg",
  },
  {
    name: "Idiomas",
    name_en: "Languages",
    description:
      "Estudio idiomas de forma constante para ampliar mis habilidades de comunicación y mantener una mentalidad orientada al aprendizaje continuo.",
    description_en:
      "I study languages consistently to strengthen my communication skills and maintain a mindset focused on continuous learning.",
    img: "/hobbies/DUOLINGO.png",
  },
  {
    name: "Caminatas",
    name_en: "Walking",
    description:
      "Disfruto caminar para desconectarme de la rutina, explorar nuevos lugares y mantener un equilibrio entre concentración, actividad física y tiempo personal.",
    description_en:
      "I enjoy walking to disconnect from routine, explore new places, and maintain a balance between focus, physical activity, and personal time.",
    img: "/hobbies/WALKING.jpg",
  },
]
