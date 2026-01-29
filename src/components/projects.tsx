"use client";

import { useMemo, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProjectCard = {
  title: string;
  group: "featured" | "personal";
  category: string;
  description: string;
  problem?: string;
  approach?: string;
  impact?: string;
  techStack?: string[];
  githubUrl?: string;
  liveUrl?: string;
};

const projectCards: ProjectCard[] = [
  ...portfolioData.projects.map((project) => ({
    title: project.title,
    group: "featured" as const,
    category: project.category,
    description: project.impact,
    problem: project.problem,
    approach: project.approach,
    impact: project.impact,
  })),
  ...portfolioData.hobbyProjects.map((project) => ({
    title: project.title,
    group: "personal" as const,
    category: "Personal Projects",
    description: project.description,
    techStack: project.techStack,
    githubUrl: project.githubUrl,
    liveUrl: project.liveUrl,
  })),
];

const filterTabs = [
  { label: "All", value: "all" },
  { label: "Featured Work", value: "featured" },
  { label: "Personal Projects", value: "personal" },
] as const;

type ProjectTab = (typeof filterTabs)[number]["value"];

export function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectTab>("all");

  const visibleProjects = useMemo(() => {
    if (activeTab === "all") {
      return projectCards;
    }
    return projectCards.filter((project) => project.group === activeTab);
  }, [activeTab]);

  const featuredProjects = useMemo(
    () => projectCards.filter((project) => project.group === "featured"),
    [],
  );
  const personalProjects = useMemo(
    () => projectCards.filter((project) => project.group === "personal"),
    [],
  );

  return (
    <section id="projects" className="scroll-mt-24 space-y-8">
      <SectionHeading title="Projects" />

      <div className="flex flex-wrap gap-3 text-sm">
        {filterTabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => setActiveTab(tab.value)}
            className={cn(
              "rounded-full px-3 py-1.5 font-medium transition-colors",
              activeTab === tab.value
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab !== "personal" && (
        <div className="grid gap-6 md:grid-cols-2">
          {(activeTab === "all" ? featuredProjects : visibleProjects).map(
            (project, index) => (
              <article
                key={`${project.title}-${index}`}
                className="group rounded-2xl border border-border/60 bg-background/40 p-6 transition-colors hover:border-primary/60"
              >
                <div className="space-y-4">
                  <span className="inline-flex w-fit rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium text-foreground">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  {project.problem && (
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Challenge
                      </p>
                      <p className="text-[13px] text-muted-foreground leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                  )}
                  {project.approach && (
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Approach
                      </p>
                      <p className="text-[13px] text-muted-foreground leading-relaxed">
                        {project.approach}
                      </p>
                    </div>
                  )}
                  {project.impact && (
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                        Impact
                      </p>
                      <p className="text-[13px] font-medium text-foreground leading-relaxed">
                        {project.impact}
                      </p>
                    </div>
                  )}
                </div>
              </article>
            ),
          )}
        </div>
      )}

      {activeTab !== "featured" && (
        <div className="space-y-5">
          {activeTab === "all" && (
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Personal Projects
            </p>
          )}
          <div className="grid gap-6 md:grid-cols-2">
            {(activeTab === "all" ? personalProjects : visibleProjects).map(
              (project, index) => (
                <article
                  key={`${project.title}-${index}`}
                  className="group rounded-2xl border border-border/60 bg-background/40 p-5 transition-colors hover:border-primary/60"
                >
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-[13px] text-muted-foreground leading-snug">
                      {project.description}
                    </p>
                  </div>

                  {project.techStack && project.techStack.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-medium text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {(project.githubUrl || project.liveUrl) && (
                    <div className="mt-4 flex gap-3">
                      {project.githubUrl && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="flex-1 bg-transparent"
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button asChild size="sm" className="flex-1">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </article>
              ),
            )}
          </div>
        </div>
      )}
    </section>
  );
}
