import { searchContracts } from "@/requests/server/SearchContracts";
import { ContractType } from "../components/contracts/types/contractType";
import { ContractCard } from "../components/contracts/ContractCard";
import { InfoMessage } from "../components/InfoMessage";

type SearchParams = {
  searchParams: Promise<{ query?: string }>;
};
export default async function SearchContracts({ searchParams }: SearchParams) {
  const { query = "" } = await searchParams;
  let contracts: ContractType[] = [];
  const res = await searchContracts(query);
  if (res) {
    contracts = res.data;
  }

  return (
    <section className="w-full flex flex-col font-montserrat gap-4 px-0 py-6 lg:px-10 lg:py-8 ">
      <h1 className="text-5xl font-bold text-center">Search Result</h1>
      <div className="w-full h-full flex flex-wrap shrink-0 gap-4 mx-auto justify-center overflow-auto scrollbar-none">
        {contracts.length > 0 ? (
          contracts.map((contract) => (
            <ContractCard key={contract.id} contract={contract} />
          ))
        ) : res.error ? (
          <InfoMessage text="Something went wrong" error={true} />
        ) : (
          <InfoMessage text="Nothing was found" />
        )}
      </div>
    </section>
  );
}
