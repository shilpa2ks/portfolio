import { Calendar, Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";

export function ProfileCard() {
  const displayName = portfolioData.displayName ?? portfolioData.name;
  const contactItems = [
    {
      label: "Email",
      value: portfolioData.email,
      href: `mailto:${portfolioData.email}`,
      icon: Mail,
    },
    {
      label: "Phone",
      value: portfolioData.phone,
      href: `tel:${portfolioData.phone}`,
      icon: Phone,
    },
    {
      label: "Location",
      value: portfolioData.location,
      icon: MapPin,
    },
    {
      label: "Work Rights",
      value: portfolioData.workRights,
      icon: Calendar,
    },
  ].filter((item) => Boolean(item.value));
  const initials = displayName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <aside className="hidden lg:block lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)] lg:self-start">
      <div className="relative h-full rounded-3xl border border-border/60 bg-card/80 p-6 shadow-[0_18px_45px_-30px_rgba(0,0,0,0.6)]">
        <div className="flex flex-col items-center text-center">
          <div className="h-28 w-28 rounded-2xl bg-gradient-to-br from-primary/35 via-primary/10 to-transparent dark:from-primary/30 dark:via-primary/15 ring-1 ring-primary/30 flex items-center justify-center text-3xl font-semibold text-primary-foreground dark:text-foreground">
            {initials}
          </div>
          <h2 className="mt-4 text-xl font-semibold text-foreground">
            {displayName}
          </h2>
          <span className="mt-2 rounded-full bg-muted/60 px-0 py-1 text-xs font-medium text-muted-foreground">
            <div>{portfolioData.role}</div>
            <div>{portfolioData.roleExtended}</div>
          </span>
        </div>

        <div className="my-6 h-px bg-border/60" />

        <div className="space-y-4">
          {contactItems.map((item) => {
            const content = (
              <>
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {item.value}
                  </p>
                </div>
              </>
            );

            if (item.href) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/40 px-3 py-3 transition-colors hover:bg-muted/40"
                >
                  {content}
                </a>
              );
            }

            return (
              <div
                key={item.label}
                className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/40 px-3 py-3"
              >
                {content}
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          <Button asChild variant="ghost" size="icon-sm">
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon-sm">
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
    </aside>
  );
}
