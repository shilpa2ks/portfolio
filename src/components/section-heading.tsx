import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  title: string
  className?: string
}

export function SectionHeading({ title, className }: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
        {title}
      </h2>
      <div className="h-1 w-10 rounded-full bg-primary" />
    </div>
  )
}
