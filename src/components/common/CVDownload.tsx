import { IconDownload } from "@tabler/icons-react"
import { useEffect, useState } from "react"

export function CVDownload() {
  const [language, setLanguage] = useState<"es" | "en">("es")

  useEffect(() => {
    const updateLanguage = () => {
      setLanguage(document.documentElement.lang === "en" ? "en" : "es")
    }

    updateLanguage()

    const observer = new MutationObserver(updateLanguage)

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    })

    return () => observer.disconnect()
  }, [])

  const cvPath =
    language === "en"
      ? "/cv/Resume_FranciscoBaltodano.pdf"
      : "/cv/CV_FranciscoBaltodano.pdf"
  return (
    <a
      href={cvPath}
      download
      className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
    >
      <span>{language === "en" ? "Download CV" : "Descargar CV"}</span>
      <IconDownload className="h-4 w-4" />
    </a>
  )
}
