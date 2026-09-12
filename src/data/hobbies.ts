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
      "Me gusta jugar ajedrez para desarrollar el pensamiento estratégico, la concentración y la capacidad de resolver problemas.",
    description_en:
      "I enjoy playing chess to develop strategic thinking, concentration, and problem-solving skills.",
    img: "/hobbies/CHESS.png",
  },
  {
    name: "Programación",
    name_en: "Programming",
    description:
      "Disfruto crear proyectos personales, experimentar con nuevas tecnologías y seguir aprendiendo sobre desarrollo de software.",
    description_en:
      "I enjoy building personal projects, experimenting with new technologies, and continuously learning about software development.",
    img: "/hobbies/PROGRAMING.jpg",
  },
  {
    name: "Duolingo",
    name_en: "Duolingo",
    description:
      "Utilizo Duolingo para practicar idiomas y mantener el hábito de aprendizaje de forma constante.",
    description_en:
      "I use Duolingo to practice languages and maintain a consistent learning habit.",
    img: "/hobbies/DUOLINGO.png",
  },
  {
    name: "Caminatas",
    name_en: "Walking",
    description:
      "Disfruto salir a caminar para despejar la mente, conocer nuevos lugares y mantenerme activo.",
    description_en:
      "I enjoy going for walks to clear my mind, explore new places, and stay active.",
    img: "/hobbies/WALKING.jpg",
  },
  {
    name: "Videojuegos",
    name_en: "VideoGames",
    description:
      "Me gusta jugar videojuegos y combinarlo con mi pasion por la programación",
    description_en:
      "I enjoy playing videogames and combining it with programing",
    img: "/hobbies/VIDEOGAMES.avif",
  },
]
