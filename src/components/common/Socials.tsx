import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/FranciscoBaltodano",
    image: "/socials/github.png",
    description: "Mis proyectos y código fuente",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/FranciscoBaltodano",
    image: "/socials/linkedin.png",
    description: "Mi perfil profesional",
  },
]

export function Socials() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {socials.map((social) => (
        <HoverCard key={social.name}>
          <HoverCardTrigger>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
            >
              {social.name}

              <span className="text-xs opacity-0 transition-opacity group-hover:opacity-100">
                ↗
              </span>
            </a>
          </HoverCardTrigger>

          <HoverCardContent
            side="top"
            align="center"
            sideOffset={8}
            className="w-72 overflow-hidden rounded-xl border border-neutral-200 bg-white p-0 shadow-xl dark:border-neutral-800 dark:bg-neutral-950"
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden">
                <img
                  src={social.image}
                  alt={`Vista previa de ${social.name}`}
                  className="block w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
                  <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-neutral-900 opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                    Visitar perfil ↗
                  </span>
                </div>
              </div>

              <div className="p-3">
                <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                  {social.name}
                </p>

                <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                  {social.description}
                </p>
              </div>
            </a>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}
