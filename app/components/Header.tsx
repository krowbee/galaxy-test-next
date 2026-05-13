"use client";
import { useMobile } from "../hooks/useMobile";
import { BurgerMenu } from "./burger-menu/BurgerMenu";
import { Logo } from "./logo";

export function Header() {
  const isMobile = useMobile();
  return (
    <div className="absolute z-20 w-full px-3 pt-3 md:px-8 lg:px-12">
      <header className="flex flex-roww-full bg-linear-to-r justify-between items-center from-white/35 to-white/30  px-6 py-4 z-20 rounded-full">
        <Logo />
        <nav className="hidden md:flex md:flex-row  font-montserrat gap-10">
          <a href="#" className="text-blue-600 active">
            Home
          </a>
          <a href="#" className="hover:text-white">
            How It Works
          </a>
          <a href="#" className="hover:text-white">
            Latest Contracts Post
          </a>
        </nav>
        <div className="hidden md:flex md:flex-row justify-center items-center gap-6 font-montserrat">
          <a href="#" className="text-lg hover:text-white">
            Login
          </a>
          <a href="#">
            <button className="py-2 px-4 rounded-3xl border cursor-pointer border-blue-600 text-blue-600 text-lg">
              Sign up
            </button>
          </a>
        </div>
        {isMobile && <BurgerMenu />}
      </header>
    </div>
  );
}
