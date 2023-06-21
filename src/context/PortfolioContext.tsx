"use client";

import React, { ReactNode, createContext, useEffect, useState } from "react";

interface PortfolioProps {
  children: ReactNode;
}

interface PortfolioContextProps {
  theme: string;
  setTheme(theme: string): void;
}

export const PortfolioContext = createContext<PortfolioContextProps>(
  {} as PortfolioContextProps
);

export default function PortfolioProvider({ children }: PortfolioProps) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <PortfolioContext.Provider value={{ theme, setTheme }}>
      {children}
    </PortfolioContext.Provider>
  );
}
