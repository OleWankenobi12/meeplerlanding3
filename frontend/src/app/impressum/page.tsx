import Link from "next/link";
import { useTranslations } from "next-intl";
import { Footer } from "@/app/_components/footer";

export default function ImpressumPage() {
  const t = useTranslations("legal");

  return (
    <>
      <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800 dark:text-gray-200">
        <h1 className="text-3xl font-bold mb-6">{t("imprintTitle")}</h1>

        <p className="mb-4">{t("responsible")}</p>

        <address className="not-italic mb-4">
          Jan-Ole Nietfeld<br />
          Quebecallee 23<br />
          49090 Osnabrück<br />
          Deutschland
        </address>

        <p>
          E-Mail: <a href="mailto:hello@meepler.app" className="underline">hello@meepler.app</a>
        </p>

        <div className="mt-10">
          <Link href="/" className="text-primary hover:underline">
            ← back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
