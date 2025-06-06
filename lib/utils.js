import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { useContext, createContext } from "react"


export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Create MouseEnterContext
export const MouseEnterContext = createContext(undefined);

// Create a hook to use the context
export function useMouseEnter() {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
}