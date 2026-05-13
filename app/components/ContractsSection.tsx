import { ContractsContainer } from "./contracts/ContractsContainer";
import { FilterButtons } from "./contracts/FilterButtons";

export function ContractsSection() {
  return (
    <section className="w-full flex flex-col gap-8 font-montserrat px-8 py-4">
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold text-center">
          Latest Contracts Post
        </h2>
        <p className="text-gray-500 text-lg text-center">
          Search and connect with the right companies faster
        </p>
      </div>
      <FilterButtons />
      <ContractsContainer />
    </section>
  );
}
