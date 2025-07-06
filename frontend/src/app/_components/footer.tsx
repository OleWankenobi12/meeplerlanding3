"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Instagram } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
        
        {/* Links: Logo */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/logo.svg"
            alt="Meepler Logo"
            className="w-32 hover:scale-105 transition-transform dark:invert"
          />
        </div>

        {/* Mitte: Rechtliches vertikal zentriert */}
        <div className="flex flex-col items-center gap-1">
          <Link href="/impressum" className="hover:underline transition">{t("legal.imprint")}</Link>
          <Link href="/datenschutz" className="hover:underline transition">{t("legal.privacy")}</Link>
        </div>

        {/* Rechts: Instagram Icon */}
        <div className="flex justify-center md:justify-end">
          <a
            href="https://instagram.com/meepler.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#E1306C] dark:hover:text-white transition"
            aria-label="Instagram"
          >
            <Instagram className="w-10 h-10" />
          </a>
        </div>
      </div>

      {/* Copyright-Zeile */}
      <div className="border-t border-gray-100 dark:border-gray-800 py-4 text-center text-xs text-gray-400 dark:text-gray-600">
        © {new Date().getFullYear()} Meepler. {t("copyright")}
      </div>
    </footer>
  );
}
