"use client";

import { ReactNode, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { darkMode, lightMode } from "@/theme/theme";
import { PortfolioContext } from "@/context/PortfolioContext";

interface ProviderProps {
  children: ReactNode;
}

export default function Provider({ children }: ProviderProps) {
  const { theme } = useContext(PortfolioContext);

  return (
    <ThemeProvider theme={theme === "dark" ? darkMode : lightMode}>
      {children}
    </ThemeProvider>
  );
}
