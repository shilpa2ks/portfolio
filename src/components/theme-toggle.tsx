"use client"

import { useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ThemeToggleProps = {
  className?: string
  size?: "icon" | "icon-xs" | "icon-sm" | "icon-lg"
}

export function ThemeToggle({ className, size = "icon-sm" }: ThemeToggleProps) {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const shouldBeDark = savedTheme ? savedTheme === "dark" : true

    document.documentElement.classList.toggle("dark", shouldBeDark)
  }, [])

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark")
    const nextIsDark = !isDark
    document.documentElement.classList.toggle("dark", nextIsDark)
    localStorage.setItem("theme", nextIsDark ? "dark" : "light")
  }

  return (
    <Button
      variant="ghost"
      size={size}
      onClick={toggleTheme}
      className={cn(
        "text-muted-foreground hover:text-foreground hover:bg-muted/40",
        className
      )}
      aria-label="Toggle theme"
    >
      <Sun className="hidden h-4 w-4 dark:block" />
      <Moon className="h-4 w-4 dark:hidden" />
    </Button>
  )
}
