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

export type ThemeTypes = "dark" | "light";
