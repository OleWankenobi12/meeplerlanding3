// page.tsx
import { HeroSection } from "@/app/_components/HeroSection";
import { BenefitGrid } from "@/app/_components/BenefitsGrid";
import { MeetupModule } from "@/app/_components/MeetUpModule";
import { CallToAction } from "@/app/_components/CallToAction";
import { Footer } from "@/app/_components/footer";

export default function Page() {
  return (
    <main className="bg-[#FAFAFA] text-gray-900">
      <HeroSection />
      <BenefitGrid />
      <MeetupModule />
      <CallToAction />
      <Footer />
    </main>
  );
}