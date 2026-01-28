import { Badge } from "@/components/ui/badge"
import { portfolioData } from "@/lib/portfolio-data"

const skillGroups = [
  { label: "Frontend", key: "frontend" as const },
  { label: "APIs & Data", key: "apisData" as const },
  { label: "Backend", key: "backend" as const },
  { label: "Ways of Working", key: "waysOfWorking" as const },
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
          Core Skills
        </h2>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.key}>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills[group.key].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
