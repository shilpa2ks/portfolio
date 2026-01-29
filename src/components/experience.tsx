import { Briefcase, GraduationCap } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/section-heading";

export function Experience() {
  const recentExperience = portfolioData.experienceHighlights;

  return (
    <section id="experience" className="scroll-mt-24 space-y-10">
      <SectionHeading title="Experience" />

      <div className="space-y-8">
        <div className="rounded-2xl border border-border/60 bg-background/40 p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Briefcase className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              Experience
            </h3>
          </div>
          <ol className="relative space-y-6 border-border/60 pl-6">
            {recentExperience.map((exp, index) => (
              <li key={index} className="relative">
                {/* <span className="absolute -left-[34px] top-1.5 h-3 w-3 rounded-full bg-primary" /> */}
                <p className="text-sm font-medium text-primary">{exp.period}</p>
                <h4 className="text-base font-semibold text-foreground">
                  {exp.role}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {exp.company} - {exp.location}
                </p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {exp.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex gap-2">
                      <span className="text-primary">-</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-2xl border border-border/60 bg-background/40 p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Education</h3>
          </div>
          <ol className="relative space-y-6 border-border/60 pl-6">
            {portfolioData.education.map((edu, index) => (
              <li key={index} className="relative">
                {/* <span className="absolute -left-[34px] top-1.5 h-3 w-3 rounded-full bg-primary" /> */}
                <p className="text-sm font-medium text-primary">{edu.period}</p>
                <h4 className="text-base font-semibold text-foreground">
                  {edu.institution}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {edu.university}
                </p>
                <p className="text-sm text-muted-foreground">{edu.degree}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
