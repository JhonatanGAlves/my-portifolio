import { Source_Code_Pro } from "next/font/google";

import StyledComponentsRegistry from "../../lib/styledComponentsRegistry";
import { GlobalStyles } from "@/styles/global";
import PortfolioProvider from "@/context/PortfolioContext";
import Main from "@/components/main/Main";
import { defaultLocale, i18n, Locale } from "../../../i18n.config";
import IntermediateHeader from "@/components/header/IntermediateHeader";
import IntermediateFooter from "@/components/footer/IntermediateFooter";

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
            <IntermediateHeader params={params} />
            <Main>{children}</Main>
            <IntermediateFooter params={params} />
          </PortfolioProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
