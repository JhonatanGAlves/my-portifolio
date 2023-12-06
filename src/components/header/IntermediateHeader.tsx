import { getLocales } from "@/app/[lang]/actions";
import { Locale } from "../../../i18n.config";
import Header from "./Header";

export default async function IntermediateHeader({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { header } = await getLocales(lang);

  return <Header i18nHeader={header} />;
}
