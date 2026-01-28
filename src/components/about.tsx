import { portfolioData } from "@/lib/portfolio-data"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
          About Me
        </h2>
        
        <div className="max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {portfolioData.about}
          </p>
        </div>
      </div>
    </section>
  )
}
