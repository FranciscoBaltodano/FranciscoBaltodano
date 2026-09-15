import { IconDownload } from "@tabler/icons-react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"

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
    <Button
      variant="outline"
      size="icon"
      render={<a href={cvPath} target="_blank" rel="noopener noreferrer" />}
    >
      <IconDownload className="h-[1.2rem] w-[1.2rem]" />

      <span className="sr-only">
        {language === "en" ? "Download CV" : "Descargar CV"}
      </span>
    </Button>
  )
}
