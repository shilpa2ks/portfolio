import { Code2, Database, Layers, Workflow } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/section-heading";

const skillGroups = [
  { label: "Frontend", key: "frontend" as const, icon: Code2 },
  { label: "APIs & Data", key: "apisData" as const, icon: Database },
  { label: "Backend", key: "backend" as const, icon: Layers },
  { label: "Ways of Working", key: "waysOfWorking" as const, icon: Workflow },
];

export function HomeSection() {
  return (
    <section id="home" className="scroll-mt-24 space-y-10">
      <div className="space-y-6">
        <SectionHeading title="Home" />
        <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
          <p>{portfolioData.about}</p>
          <p>{portfolioData.valueProp}</p>
        </div>
      </div>

      <div className="space-y-6">
        <SectionHeading title="Skills" />
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.key}
              className="rounded-2xl border border-border/60 bg-background/40 p-5 shadow-[0_18px_45px_-30px_rgba(0,0,0,0.6)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <group.icon className="h-4 w-4" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {group.label}
                </h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {portfolioData.skills[group.key].join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
