import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { portfolioData } from "@/lib/portfolio-data"

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          Featured Work
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Selected projects showcasing frontend development, performance optimization, and tooling expertise.
        </p>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.projects.map((project, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2 text-xs">
                  {project.category}
                </Badge>
                <CardTitle className="text-lg text-foreground">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    Challenge
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    Approach
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.approach}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
                    Impact
                  </h4>
                  <p className="text-sm text-foreground leading-relaxed">
                    {project.impact}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
