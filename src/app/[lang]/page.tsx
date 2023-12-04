import { getLocales } from "./actions";
import { Locale } from "../../../i18n.config";
import HomePage from "@/components/home/HomePage";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { home } = await getLocales(lang);

  return <HomePage i18nHome={home} />;
}
