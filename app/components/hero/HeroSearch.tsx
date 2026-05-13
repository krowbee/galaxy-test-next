import { SearchIcon } from "lucide-react";

export function HeroSearch() {
  return (
    <form className="mx-auto flex py-2 w-[95%] max-w-5xl items-center rounded-full border border-white/70 bg-white/20 px-5 backdrop-blur-md">
      <SearchIcon className="text-white" />

      <input
        type="text"
        className="min-w-0 flex-1 bg-transparent text-white outline-none font-montserrat px-2"
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
