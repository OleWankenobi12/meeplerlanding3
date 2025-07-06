// components/QuoteBlock.tsx
"use client";

import { useTranslations } from "next-intl";

export function QuoteBlock() {
  const t = useTranslations();

  return (
    <section className="bg-white py-20 px-4 text-center">
      <blockquote className="text-xl italic text-gray-700 max-w-2xl mx-auto">
        {t("quote.text")}
      </blockquote>
      <div className="mt-4 text-sm text-gray-500">– Spielgruppe Rhein-Mitte</div>
    </section>
  );
}
