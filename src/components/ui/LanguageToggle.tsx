import * as React from "react"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { updateLanguageDOM } from "@/lib/lenguage"

export function LanguageToggle() {
  const [isEnglish, setIsEnglish] = React.useState(false)

  React.useEffect(() => {
    const isEng = localStorage.getItem('isEnglish') === 'true'
    setIsEnglish(isEng)
    updateLanguageDOM()
  }, [])

  const handleLanguageChange = (isEng: boolean) => {
    setIsEnglish(isEng)
    localStorage.setItem('isEnglish', isEng.toString())
    updateLanguageDOM()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Cambiar idioma</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLanguageChange(false)}>
          Español
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange(true)}>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
