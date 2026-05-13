"use client";
import { useState } from "react";
import { BurgerContext } from "./BurgerContext";

export function BurgerProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <BurgerContext.Provider value={{ isOpen, toggle }}>
      {children}
    </BurgerContext.Provider>
  );
}
