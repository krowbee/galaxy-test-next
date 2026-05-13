"use client";
import { useContext } from "react";
import { BurgerContext } from "./BurgerContext";

export function MenuButton() {
  const context = useContext(BurgerContext);
  if (!context) return;
  return (
    <button
      onClick={() => context.toggle()}
      className="relative z-60 flex h-10 w-10 items-center justify-center"
      aria-label="Toggle menu"
    >
      <div className="relative h-5 w-7">
        <span
          className={`absolute left-0 top-0 h-0.5 w-7 rounded bg-black transition-all duration-300 ${
            context.isOpen ? "top-2 rotate-45 translate-y-1" : ""
          }`}
        />

        <span
          className={`absolute left-0 top-2 h-0.5 w-7 rounded bg-black transition-all duration-300 ${
            context.isOpen ? "opacity-0" : "opacity-100"
          }`}
        />

        <span
          className={`absolute left-0 top-4 h-0.5 w-7 rounded bg-black transition-all duration-300 ${
            context.isOpen ? "top-2 -rotate-45 -translate-y-1" : ""
          }`}
        />
      </div>
    </button>
  );
}
