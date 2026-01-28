import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { portfolioData } from "@/lib/portfolio-data"

export function Footer() {
  return (
    <footer id="contact" className="py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            {"Let's Connect"}
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            {"Open to opportunities in frontend and full-stack development. Feel free to reach out!"}
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <a href={`mailto:${portfolioData.email}`}>
                <Mail className="h-4 w-4 mr-2" />
                {portfolioData.email}
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <a href={`tel:${portfolioData.phone}`}>
                <Phone className="h-4 w-4 mr-2" />
                {portfolioData.phone}
              </a>
            </Button>
          </div>
          
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="icon">
              <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a href={portfolioData.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{portfolioData.location}</span>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
