export type ProjectTypes = {
  id: number;
  name: string;
  description: string | undefined;
  html_url: string;
  created_at: string;
  languages_url?: string;
  tools: ToolsType;
  topics: string[];
};

export type ToolsType = {
  TypeScript?: number;
  JavaScript?: number;
  HTML?: number;
  CSS?: number;
  SCSS?: number;
  PHP?: number;
};

export type SelectOptions = {
  value: string;
  label: string;
};

export type PortfolioData = {
  header: I18nHeaderTypes;
  home: I18nHomeTypes;
};

export type I18nHeaderTypes = {
  dark: string;
  light: string;

  home: string;
  projects: string;
  experiences: string;
  contact: string;
};

export type I18nHomeTypes = {
  "Hello World": string;
};
