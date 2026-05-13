"use client";

import { usePathname } from "next/navigation";

export function useHomepage() {
  const pathname = usePathname();
  return pathname === "/";
}
