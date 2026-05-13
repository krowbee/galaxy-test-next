"use client";
import { createContext } from "react";

type BurgerContext = {
  isOpen: boolean;
  toggle: () => void;
};

export const BurgerContext = createContext<BurgerContext | null>(null);
