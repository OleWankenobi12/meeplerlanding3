"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Calendar, Users, Layers } from "lucide-react";

export function LandingContent() {
  const t = useTranslations("Landing");

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative isolate text-center space-y-6">
        <motion.div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-2xl"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 aspect-[1155/678] w-[60rem] -translate-x-1/2 bg-gradient-to-tr from-emerald-400 to-pink-300 opacity-20"
            style={{
              clipPath:
                "polygon(74% 44%, 100% 65%, 100% 100%, 66% 100%, 35% 89%, 0 100%, 0 0, 36% 0, 58% 21%)",
            }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl font-bold tracking-tight"
        >
          {t("headline")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl text-muted-foreground"
        >
          {t("subline")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="pt-4"
        >
          <Button size="lg" asChild>
            <Link href="/meetup">{t("meetup.cta")}</Link>
          </Button>
        </motion.div>
      </section>

      {/* Feature Bubbles */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <FeatureBubble icon={<Calendar className="w-8 h-8" />} title={t("future.scheduling")} />
        <FeatureBubble icon={<Layers className="w-8 h-8" />} title={t("future.collection")} />
        <FeatureBubble icon={<Sparkles className="w-8 h-8" />} title={t("future.voting")} />
        <FeatureBubble icon={<Users className="w-8 h-8" />} title={t("future.groups")} />
      </section>

      <Separator />

      <SectionBlock title={t("whatIsMeepler.title")} text={t("whatIsMeepler.text")} />
      <SectionBlock title={t("meetup.title")} text={t("meetup.text")}>
        <Button asChild>
          <Link href="/meetup">{t("meetup.cta")}</Link>
        </Button>
      </SectionBlock>
      <SectionBlock title={t("whyMeepler.title")} text={t("whyMeepler.text")} />

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        <h2 className="text-2xl font-semibold">{t("cta.text")}</h2>
        <Button variant="outline" asChild>
          <a href="mailto:hallo@meepler.app">{t("cta.button")}</a>
        </Button>
      </motion.section>
    </div>
  );
}

function FeatureBubble({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <motion.div
      className="bg-secondary rounded-xl p-6 shadow-sm hover:shadow-md transition"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center justify-center mb-3 text-primary">{icon}</div>
      <p className="text-muted-foreground text-sm font-medium">{title}</p>
    </motion.div>
  );
}

function SectionBlock({
  title,
  text,
  children,
}: {
  title: string;
  text: string;
  children?: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-muted-foreground">{text}</p>
      {children && <div>{children}</div>}
    </motion.section>
  );
}
