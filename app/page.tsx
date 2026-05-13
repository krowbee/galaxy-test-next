import { ContractsSection } from "./components/ContractsSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { HowItWorks } from "./components/HowItWorksSection";
import { PartnerSection } from "./components/PartnerSection";
import { ReviewsSection } from "./components/ReviewsSection";

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="w-full h-full flex flex-col flex-1">
        <HeroSection />
        <PartnerSection />
        <ContractsSection />
        <HowItWorks />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
}
