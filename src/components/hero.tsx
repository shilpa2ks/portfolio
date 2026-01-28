import { Mail, Linkedin, Github, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { portfolioData } from "@/lib/portfolio-data"

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{portfolioData.location}</span>
            <span className="text-border">|</span>
            <span className="text-sm">{portfolioData.workRights}</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            {portfolioData.name}
          </h1>
          
          <p className="text-xl sm:text-2xl text-primary font-medium mb-2">
            {portfolioData.headline}
          </p>
          
          <p className="text-lg text-muted-foreground mb-6">
            {portfolioData.tagline}
          </p>
          
          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            {portfolioData.valueProp}
          </p>
          
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#contact">
                <Mail className="h-4 w-4 mr-2" />
                Get in Touch
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <a href={portfolioData.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
