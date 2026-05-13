"use client";
import { ArrowRightIcon, ClockIcon } from "lucide-react";
import { useEffect, useRef } from "react";

const contracts = [
  {
    company: "Meta",
    logo: "∞",
    title: "Contract: Annual Cybersecurity & Threat Monitoring",
    price: "$120,000 / Annual Contract",
    term: "12 Months | Renewable",
    tags: ["Annual Contract", "Verified"],
    description:
      "Looking for an IT security partner to manage firewalls, intrusion detection, and ongoing risk assessments for corporate infrastructure.",
  },
  {
    company: "Intel",
    logo: "intel",
    title: "Contract: Multi-Year Custom Software Development",
    price: "$400,000 / Year",
    term: "3 Years",
    tags: ["Long-Term"],
    description:
      "Searching for a reliable development partner for enterprise-grade software solutions. Collaboration includes design, development, and ongoing maintenance.",
  },
  {
    company: "Plaid",
    logo: "❖",
    title: "Contract: One-Time Supply of Laptops & Accessories",
    price: "$42,000 / One-Time Supply",
    term: "2 Months",
    tags: ["Bulk Order", "Verified"],
    description:
      "Looking for a supplier to deliver 150 laptops and docking stations for a corporate office setup. Delivery required within 60 days.",
  },
  {
    company: "MERCI",
    logo: "✤",
    title: "Contract: Cloud Infrastructure Support",
    price: "$9,000 / Month",
    term: "12 Months",
    tags: ["Recurring Service"],
    description:
      "Seeking a partner for secure and scalable enterprise app hosting with 99.9% uptime.",
  },
  {
    company: "Meta",
    logo: "∞",
    title: "Contract: Annual Cybersecurity & Threat Monitoring",
    price: "$120,000 / Annual Contract",
    term: "12 Months | Renewable",
    tags: ["Annual Contract", "Verified"],
    description:
      "Looking for an IT security partner to manage firewalls, intrusion detection, and ongoing risk assessments for corporate infrastructure.",
  },
  {
    company: "Intel",
    logo: "intel",
    title: "Contract: Multi-Year Custom Software Development",
    price: "$400,000 / Year",
    term: "3 Years",
    tags: ["Long-Term"],
    description:
      "Searching for a reliable development partner for enterprise-grade software solutions. Collaboration includes design, development, and ongoing maintenance.",
  },
  {
    company: "Plaid",
    logo: "❖",
    title: "Contract: One-Time Supply of Laptops & Accessories",
    price: "$42,000 / One-Time Supply",
    term: "2 Months",
    tags: ["Bulk Order", "Verified"],
    description:
      "Looking for a supplier to deliver 150 laptops and docking stations for a corporate office setup. Delivery required within 60 days.",
  },
  {
    company: "MERCI",
    logo: "✤",
    title: "Contract: Cloud Infrastructure Support",
    price: "$9,000 / Month",
    term: "12 Months",
    tags: ["Recurring Service"],
    description:
      "Seeking a partner for secure and scalable enterprise app hosting with 99.9% uptime.",
  },
];

export function ContractsContainer() {
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
        {contracts.map((contract, index) => (
          <article
            key={index}
            className="relative overflow-visible w-70 min-h-75 shrink-0 rounded-[22px] bg-[#f4f4f4] px-6 py-6"
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="text-xl font-bold text-blue-600">
                {contract.logo}
              </span>
              <span className="text-sm font-bold text-gray-800">
                {contract.company}
              </span>
            </div>

            <h3 className="mb-3 text-[15px] font-bold leading-snug text-gray-900">
              {contract.title}
            </h3>

            <p className="mb-3 text-sm font-bold text-gray-900">
              {contract.price}
            </p>

            <div className="mb-4 flex items-center gap-1 text-xs text-gray-400">
              <ClockIcon size={14} />
              <span>{contract.term}</span>
            </div>

            <div className="mb-4 flex flex-wrap gap-2">
              {contract.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`rounded-full border px-4 py-1 text-[10px] ${
                    tag === "Verified"
                      ? "border-emerald-400 text-emerald-500"
                      : "border-blue-500 text-blue-500"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="pr-6 text-[11px] leading-relaxed text-gray-400">
              {contract.description}
            </p>

            <div className="absolute bottom-0 right-0 h-14 w-14 rounded-tl-3xl bg-white">
              <button
                type="button"
                className="absolute bottom-0 right-1 flex size-10 items-center justify-center rounded-full bg-linear-to-br from-[#6C63FF] to-[#2F00FF] text-white shadow-lg"
              >
                <ArrowRightIcon size={20} strokeWidth={2} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
