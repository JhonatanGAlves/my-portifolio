export type PortfolioData = {
  header: I18nHeaderTypes;
  pages: I18nPagesTypes;
  footer: I18nFooterTypes;
};

export type I18nHeaderTypes = {
  theme: {
    dark: string;
    light: string;
  };
  nav: {
    home: string;
    projects: string;
    experiences: string;
    contact: string;
  };
};

export type I18nPagesTypes = {
  home: I18nHomeTypes;
};

export type I18nHomeTypes = {
  hi: string;
  softwareDeveloper: string;
  mainExperiences: string;
  year: string;
  years: string;
  download: string;
};

export type I18nFooterTypes = {
  copyright: string;
};
