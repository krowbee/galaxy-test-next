import { CardsContainer } from "./how-it-works/CardsContainer";

export function HowItWorks() {
  return (
    <section className="w-full h-full flex flex-col px-8 py-4 gap-4 font-montserrat justify-center items-center">
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold text-center">How It Works</h2>
        <p className="text-gray-500 text-lg text-center">
          Applying for an agreement/contract
        </p>
      </div>
      <CardsContainer />
    </section>
  );
}
