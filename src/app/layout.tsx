import { Source_Code_Pro } from "next/font/google";
import Header from "../components/header/Header";
import StyledComponentsRegistry from "../lib/styledComponentsRegistry";
import ThemeProvider from "@/provider/ThemeProvider";
import { GlobalStyles } from "@/styles/global";
import PortfolioProvider from "@/context/PortfolioContext";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "Jhonatan Alves | Portifolio",
  description:
    "Jhonatan Alves is a Software Developer with 2 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sourceCodePro.className}>
        <StyledComponentsRegistry>
          <PortfolioProvider>
            <ThemeProvider>
              <GlobalStyles />
              <Header />
              {children}
            </ThemeProvider>
          </PortfolioProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
