import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 space-y-10">
      <SectionHeading title="Contact" />

      <div className="space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
        <div className="space-y-4">
          <p>
            Open to opportunities in frontend and full-stack development. Feel
            free to reach out for collaborations, consulting, or full-time
            roles.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="bg-transparent"
            >
              <a
                href={portfolioData.resumeUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <a
            href={`mailto:${portfolioData.email}`}
            className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/40 px-4 py-3 transition-colors hover:bg-muted/40"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Mail className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Email
              </p>
              <p className="text-sm font-medium text-foreground">
                {portfolioData.email}
              </p>
            </div>
          </a>

          <a
            href={`tel:${portfolioData.phone}`}
            className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/40 px-4 py-3 transition-colors hover:bg-muted/40"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Phone className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Phone
              </p>
              <p className="text-sm font-medium text-foreground">
                {portfolioData.phone}
              </p>
            </div>
          </a>

          <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/40 px-4 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <MapPin className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Location
              </p>
              <p className="text-sm font-medium text-foreground">
                {portfolioData.location}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="outline"
            size="icon"
            className="bg-transparent"
          >
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon"
            className="bg-transparent"
          >
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
