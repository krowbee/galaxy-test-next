import { PostContracts } from "@/requests/server/PostContracts";
import { ContractsContainer } from "./contracts/ContractsContainer";
import { FilterButtons } from "./contracts/FilterButtons";
import { ContractType } from "./contracts/types/contractType";

export async function ContractsSection() {
  let contracts: ContractType[] = [];
  const res = await PostContracts();
  if (res.success) {
    contracts = res.data;
  }
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
      {contracts.length > 0 ? (
        <ContractsContainer contracts={contracts} />
      ) : (
        <div className="w-full h-full justify-center items-center text-red-500">
          <p className="text-xl text-center">Something went wrong</p>
        </div>
      )}
    </section>
  );
}
