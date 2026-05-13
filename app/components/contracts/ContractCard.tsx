import { ArrowRightIcon, ClockIcon } from "lucide-react";
import { ContractType } from "./types/contractType";

export function ContractCard({ contract }: { contract: ContractType }) {
  return (
    <article
      key={contract.id}
      className="relative overflow-visible w-90 lg:w-100 min-h-110 shrink-0 rounded-[22px] bg-[#f4f4f4] px-6 py-6"
    >
      <div className="mb-4 flex items-center">
        <span className="text-2xl font-bold text-blue-600">
          {contract.logo}
        </span>
        <span className="text-md font-bold text-gray-800">
          {contract.company}
        </span>
      </div>

      <h3 className="mb-3 text-md font-bold leading-snug text-gray-900">
        {contract.title}
      </h3>

      <p className="mb-3 text-sm font-bold text-gray-900">{contract.price}</p>

      <div className="mb-4 flex items-center gap-1 text-xs text-gray-400">
        <ClockIcon size={14} />
        <span>{contract.term}</span>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {contract.tags.map((tag, index) => (
          <span
            key={index}
            className={`rounded-full border px-4 py-1 text-md ${
              tag === "Verified"
                ? "border-emerald-400 text-emerald-500"
                : "border-blue-500 text-blue-500"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="pr-6 text-md leading-relaxed text-gray-400">
        {contract.description}
      </p>

      <div className="absolute bottom-0 right-0 h-14 w-14 rounded-tl-3xl bg-white">
        <button
          type="button"
          className="absolute bottom-0 right-1 cursor-pointer flex size-10 items-center justify-center rounded-full bg-linear-to-br from-[#6C63FF] to-[#2F00FF] text-white shadow-lg"
        >
          <ArrowRightIcon size={20} strokeWidth={2} />
        </button>
      </div>
    </article>
  );
}
