"use client";

import { useEffect, useRef } from "react";
import { ContractType } from "./types/contractType";
import { ContractCard } from "./ContractCard";

export function ContractsContainer({
  contracts,
}: {
  contracts: ContractType[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="w-full overflow-x-auto scrollbar-none" ref={scrollRef}>
      <div className="flex flex-row gap-5 min-w-max px-1 py-2">
        {contracts.map((contract) => (
          <ContractCard key={contract.id} contract={contract} />
        ))}
      </div>
    </div>
  );
}
