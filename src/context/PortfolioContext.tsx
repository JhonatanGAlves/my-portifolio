"use client";

interface PortfolioProps {
  children: ReactNode;
}

interface PortfolioContextProps {
export const PortfolioContext = createContext<PortfolioContextProps>(
  {} as PortfolioContextProps
);
export default function PortfolioProvider({ children }: PortfolioProps) {
  return (
    <PortfolioContext.Provider value={{ theme, setTheme }}>
      {children}
    </PortfolioContext.Provider>
  );
}
