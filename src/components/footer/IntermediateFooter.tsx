import { getLocales } from "@/app/[lang]/actions";
import { Locale } from "../../../i18n.config";
import Footer from "./Footer";

export default async function IntermediateFooter({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { footer } = await getLocales(lang);

  return <Footer i18nFooter={footer} />;
}
