"use client";

import React, {
  ReactNode,
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { usePathname } from "next/navigation";

import { ThemeProvider } from "styled-components";
import { darkMode, lightMode } from "@/theme/theme";

type ThemeTypes = "dark" | "light";

interface PortfolioProps {
  children: ReactNode;
}

interface PortfolioContextProps {
  theme: ThemeTypes;
  setTheme(theme: ThemeTypes): void;
  pathName: string;
}

export const PortfolioContext = createContext<PortfolioContextProps>(
  {} as PortfolioContextProps
);

export default function PortfolioProvider({ children }: PortfolioProps) {
  let getThemeFromStorage: ThemeTypes = "dark";
  if (typeof window !== "undefined") {
    getThemeFromStorage = (localStorage.getItem("theme") ??
      "dark") as ThemeTypes;
  }
  const [theme, setTheme] = useState<ThemeTypes>(getThemeFromStorage);
  const pathName = usePathname();

  function handleThemeChange(theme: ThemeTypes) {
    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }

  useEffect(() => {
    handleThemeChange(theme);
  }, [theme]);

  const values = useMemo(() => {
    return {
      theme,
      setTheme,
      pathName,
    };
  }, [theme]);

  return (
    <PortfolioContext.Provider value={values}>
      <ThemeProvider theme={theme === "dark" ? darkMode : lightMode}>
        {children}
      </ThemeProvider>
    </PortfolioContext.Provider>
  );
}
