import { HeroBackground } from "./hero/HeroBackground";
import { HeroContent } from "./hero/HeroContent";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen justify-center items-center flex flex-col overflow-hidden">
      <HeroBackground />
      <HeroContent />
    </section>
  );
}
