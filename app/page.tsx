import { ContractsSection } from "./components/ContractsSection";
import { HowItWorks } from "./components/HowItWorksSection";
import { PartnerSection } from "./components/PartnerSection";
import { ReviewsSection } from "./components/ReviewsSection";

export default function Homepage() {
  return (
    <>
      <PartnerSection />
      <ContractsSection />
      <HowItWorks />
      <ReviewsSection />
    </>
  );
}
