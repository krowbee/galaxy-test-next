"use client";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function HeroSearch() {
  const [value, setValue] = useState<string | null>(null);
  const router = useRouter();
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;
    const query = value.trim();
    if (!query) return;
    router.push(`/search?query=${encodeURIComponent(query)}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex py-2 w-[95%] max-w-5xl items-center rounded-full border border-white/70 bg-white/20 px-5 backdrop-blur-md"
    >
      <SearchIcon className="text-white" />

      <input
        type="text"
        className="min-w-0 flex-1 bg-transparent text-white outline-none font-montserrat px-2"
        value={value ?? ""}
        onChange={(e) => setValue(e.currentTarget.value)}
      />

      <button
        type="submit"
        className="rounded-full bg-blue-600 px-8 py-3 text-sm font-medium text-white shadow-md transition cursor-pointer hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}
