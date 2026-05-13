import { HeroSearch } from "./HeroSearch";

export function HeroContent() {
  return (
    <div className="flex flex-col w-full items-center justify-center z-10 gap-2">
      <div className="flex flex-col font-montserrat text-white text-center gap-4">
        <h1 className="text-5xl font-medium">Run Your Business</h1>
        <p className="text-lg font-normal">
          Find better suppliers. Secure real contracts. Build lasting
          partnership
        </p>
      </div>
      <HeroSearch />
    </div>
  );
}
