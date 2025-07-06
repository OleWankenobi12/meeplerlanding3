// components/MeetupModule.tsx
"use client";

import { useTranslations } from "next-intl";

export function MeetupModule() {
  const t = useTranslations();

  return (
    <section id="meetup" className="bg-white py-20 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("meetup.title")}</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-6">
        {t("meetup.text")}
      </p>
      <p className="text-3xl font-bold text-[#047857]">Launching soon</p>
    </section>
  );
}
