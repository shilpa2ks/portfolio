import { NavTabs } from "@/components/nav-tabs";
import { ProfileCard } from "@/components/profile-card";
import { ProfileCompact } from "@/components/profile-compact";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen app-shell text-foreground">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)] items-start">
          <ProfileCard />

          <div className="space-y-6">
            <ProfileCompact />

            <main className="relative min-h-[calc(100vh-3rem)] rounded-3xl border border-border/60 bg-card/80 shadow-[0_30px_60px_-45px_rgba(0,0,0,0.65)]">
              <NavTabs className="absolute right-6 top-6 hidden md:flex" />

              <div className="space-y-14 px-6 pb-10 pt-14 sm:px-10 md:pt-10">
                {children}
              </div>
            </main>

          </div>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-4 z-40 flex justify-center md:hidden">
        <NavTabs compact showThemeToggle />
      </div>
    </div>
  );
}
