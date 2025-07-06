// components/BenefitGrid.tsx
"use client";

import { useTranslations } from "next-intl";
import { Calendar, Sparkles, Users } from "lucide-react";

export function BenefitGrid() {
  const t = useTranslations();
  const features = [
    {
      icon: <Calendar className="w-6 h-6 text-primary" />,
      title: t("benefit.1"),
    },
    {
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      title: t("benefit.2"),
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: t("benefit.3"),
    },
  ];

  return (
    <section className="bg-[#F0FDF4] py-16 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition"
          >
            <div className="mb-3 flex justify-center">{feature.icon}</div>
            <h3 className="text-gray-800 font-medium text-base">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}