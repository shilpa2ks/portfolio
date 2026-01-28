import { Briefcase, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { portfolioData } from "@/lib/portfolio-data"

export function Experience() {
  // Show only the 2 most recent roles with condensed highlights
  const recentExperience = portfolioData.experienceHighlights

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Experience Highlights
          </h2>
          <Button asChild>
            <a href={portfolioData.resumeUrl} download>
              <Download className="mr-2 h-4 w-4" />
              Download Full Resume
            </a>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {recentExperience.map((exp, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-primary">
                    <Briefcase className="h-4 w-4" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground text-right shrink-0">
                  <div>{exp.period}</div>
                  <div>{exp.location}</div>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, highlightIndex) => (
                  <li
                    key={highlightIndex}
                    className="text-muted-foreground text-sm leading-relaxed flex gap-2"
                  >
                    <span className="text-primary mt-1.5 shrink-0">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            14+ years of experience across enterprise software development and test automation
          </p>
        </div>
      </div>
    </section>
  )
}
