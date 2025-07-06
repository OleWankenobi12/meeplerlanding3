import Link from "next/link";
import { useTranslations } from "next-intl";
import { Footer } from "@/app/_components/footer";

export default function DatenschutzPage() {
  const t = useTranslations("legal");

  return (
    <>
      <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800 dark:text-gray-200 space-y-6">
        <h1 className="text-3xl font-bold">{t("privacyTitle")}</h1>
        <p>{t("intro")}</p>
        <p>{t("accessData")}</p>
        <p>{t("contact")}</p>
        <p>{t("rights")}</p>
        <p>{t("hosting")}</p>

        <div className="pt-10">
          <Link href="/" className="text-primary hover:underline">
            ← Zurück zur Startseite
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
