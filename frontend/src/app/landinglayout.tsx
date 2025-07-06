// app/[locale]/LandingLayout.tsx
"use client";

import { PropsWithChildren } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLocale } from "next-intl";
//import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function LandingLayout({ children }: PropsWithChildren) {
  const locale = useLocale();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f9fafb] via-[#f3f4f6] to-[#e5e7eb]">
      {/* Dekorativer animierter Hintergrund-Nebel */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-200 via-white to-rose-100 opacity-20 blur-2xl"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur-sm bg-white/80 border-b border-muted shadow-sm">
        <nav className="mx-auto flex items-center justify-between max-w-5xl px-4 py-3">
          <Link href={`/${locale}`} className="text-xl font-semibold tracking-tight">
            Meepler
          </Link>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/${locale}/meetup`}>MeetUp</Link>
            </Button>
            <LanguageSwitcher />
          </div>
        </nav>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-5xl px-4 py-12">{children}</main>

      {/* Footer */}
      <footer className="border-t border-muted bg-white/60 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Meepler. Made with 🎲 in Europe.
      </footer>
    </div>
  );
}

function LanguageSwitcher() {
  const currentLocale = useLocale();
  const otherLocale = currentLocale === "de" ? "en" : "de";

  return (
    <Button variant="ghost" size="sm" asChild>
      <Link href={`/${otherLocale}`}>
        {otherLocale === "de" ? "Deutsch" : "English"}
      </Link>
    </Button>
  );
}
