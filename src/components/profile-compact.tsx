"use client";

import { useState } from "react";
import {
  Calendar,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
} from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";

export function ProfileCompact() {
  const [isOpen, setIsOpen] = useState(false);
  const displayName = portfolioData.displayName ?? portfolioData.name;
  const initials = displayName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="lg:hidden rounded-3xl border border-border/60 bg-card/80 p-4 sm:p-6 shadow-[0_18px_45px_-30px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/35 via-primary/10 to-transparent dark:from-primary/30 dark:via-primary/15 ring-1 ring-primary/30 flex items-center justify-center text-xl font-semibold text-primary-foreground dark:text-foreground">
          {initials}
        </div>
        <div className="flex-1">
          <p className="text-lg font-semibold text-foreground">{displayName}</p>
          <span className="mt-1 inline-flex rounded-full bg-muted/60 px-0 py-1 text-xs font-medium text-muted-foreground">
            <div>{portfolioData.role}</div>
            <div>{portfolioData.roleExtended}</div>
          </span>
        </div>
        <div className="hidden sm:flex items-center">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="bg-transparent"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? "Hide Contacts" : "Show Contacts"}
          </Button>
        </div>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="profile-compact-contacts"
          onClick={() => setIsOpen((prev) => !prev)}
          className="sm:hidden ml-1 flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-background/60 text-primary transition-transform"
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <div
          id="profile-compact-contacts"
          className="mt-6 space-y-6 border-t border-border/60 pt-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
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
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
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
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Calendar className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  Work Rights
                </p>
                <p className="text-sm font-medium text-foreground">
                  {portfolioData.workRights}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
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
            <Button asChild variant="ghost" size="icon">
              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
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
      )}
    </div>
  );
}
