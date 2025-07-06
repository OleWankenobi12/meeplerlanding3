import { BrevoNewsletterEmbed } from "@/components/BrevoNewsletterEmbed";

export function CallToAction() {
  return (
    <section className="bg-[#F9FAFB] py-20 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-4 text-gray-900">
        Immer auf dem neuesten Stand bleiben
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-6">
        Erhalte Updates zu neuen Modulen, öffentlichen Events und dem offiziellen Start von Meepler.
      </p>

      <BrevoNewsletterEmbed />
    </section>
  );
}
