import { GraduationCap } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"

export function Education() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
          Education
        </h2>
        
        <div className="space-y-6">
          {portfolioData.education.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 bg-card border border-border rounded-lg"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {edu.degree}
                </h3>
                <p className="text-muted-foreground">
                  {edu.institution}
                </p>
                <p className="text-sm text-muted-foreground">
                  {edu.university}
                </p>
              </div>
              <div className="text-sm text-muted-foreground sm:text-right">
                {edu.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
