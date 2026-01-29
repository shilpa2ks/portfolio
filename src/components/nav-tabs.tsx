"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { portfolioData } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

type NavTabsProps = {
  className?: string
  showThemeToggle?: boolean
  compact?: boolean
}

export function NavTabs({
  className,
  showThemeToggle = true,
  compact = false,
}: NavTabsProps) {
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        "flex items-center gap-4 rounded-full border border-border/60 bg-card/80 px-5 py-2 shadow-[0_12px_30px_-22px_rgba(0,0,0,0.8)] backdrop-blur",
        compact && "gap-3 px-3 py-1.5",
        className
      )}
    >
      {portfolioData.navLinks.map((link) => {
        const isActive = pathname === link.href

        return (
          <Link
          key={link.href}
          href={link.href}
          aria-current={isActive ? "page" : undefined}
          className={cn(
            "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
            compact && "text-xs",
            isActive && "text-primary"
          )}
        >
          {link.label}
        </Link>
        )
      })}
      {showThemeToggle && <ThemeToggle className="ml-1" size={compact ? "icon-xs" : "icon-sm"} />}
    </nav>
  )
}
