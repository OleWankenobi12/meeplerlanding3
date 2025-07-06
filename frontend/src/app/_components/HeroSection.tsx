// components/HeroSection.tsx
"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export function HeroSection() {
  const t = useTranslations();

  return (
    <section className="text-center py-20 px-4 bg-white">
      <div className="mb-6 flex justify-center">
        <Image src="/logo.svg" alt="Meepler Logo" width={320} height={120} />
      </div>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        {t("hero.text")}
      </p>
    </section>
  );
}