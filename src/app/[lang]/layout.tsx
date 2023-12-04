import { Source_Code_Pro } from "next/font/google";

import Header from "../../components/header/Header";
import StyledComponentsRegistry from "../../lib/styledComponentsRegistry";
import { GlobalStyles } from "@/styles/global";
import PortfolioProvider from "@/context/PortfolioContext";
import Main from "@/components/main/Main";
import Footer from "@/components/footer/Footer";
import { defaultLocale, i18n, Locale } from "../../../i18n.config";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "Jhonatan Alves | Portfolio",
  description:
    "Jhonatan Alves is a Software Developer with 2 years of experience.",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang ?? defaultLocale}>
      <body className={sourceCodePro.className}>
        <StyledComponentsRegistry>
          <PortfolioProvider>
            <GlobalStyles />
            <Header />
            <Main>{children}</Main>
            <Footer />
          </PortfolioProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
