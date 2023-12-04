"server-only";

import { Locale } from "../../../i18n.config";

const dictionaries = {
  en: import("../../locales/en.json").then((module) => module.default),
  pt_br: import("../../locales/pt_br.json").then((module) => module.default),
};

export const getLocales = async (locale: Locale) => dictionaries[locale];
