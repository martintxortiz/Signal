"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Switch } from "@/components/ui/switch"

function DarkModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <span aria-hidden className="inline-block h-[16px] w-[32px]" />
  }

  const isDark = resolvedTheme === "dark"

  return (
    <Switch
      checked={isDark}
      onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      aria-label="Toggle dark mode"
    />
  )
}

export { DarkModeToggle }
