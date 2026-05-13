"use client";
import { useContext } from "react";
import { BurgerContext } from "./BurgerContext";

export function BurgerMenuContent() {
  const context = useContext(BurgerContext);
  if (!context) return;
  return (
    <div
      className={`fixed inset-0 z-50 bg-white/50 w-full h-screen transition-transform duration-200 ${context.isOpen ? "translate-y-0" : "-translate-y-full pointer-events-none"}`}
    >
      <nav className="flex flex-col w-full pt-16 px-12 items-center text-start font-montserrat gap-2 text-3xl">
        <a href="#" className="text-blue-500 active w-full">
          Home
        </a>
        <a href="#" className="w-full">
          How It Works
        </a>
        <a href="#" className="w-full">
          Latest Contracts Post
        </a>
      </nav>
    </div>
  );
}
