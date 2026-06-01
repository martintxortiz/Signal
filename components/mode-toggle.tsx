"use client"

import { IconMoon, IconSun } from "@tabler/icons-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      type="button"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <IconSun data-icon="inline-start" className="hidden dark:block" />
      <IconMoon data-icon="inline-start" className="dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export { ModeToggle }
