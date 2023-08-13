import { ToolsType } from "@/types/types";

export function getExperienceAndWidth(initialDate: Date): {
  experience: number;
  width: number;
} {
  const currentDate = new Date();
  const differenceInMilliseconds =
    currentDate.getTime() - initialDate.getTime();
  const oneYearInMilliseconds = 1000 * 60 * 60 * 24 * 365.25; // 1000 * 60 = 1 min * 60 = 1 hour * 24 = 1 day *  365.25 = 1 year, considering leap year

  const yearsOfExperience = (
    differenceInMilliseconds / oneYearInMilliseconds
  ).toFixed(2);

  // Handle with the width
  const pixelsPerIncrement = 75;

  const width = Math.floor(Number(yearsOfExperience) * 2) * pixelsPerIncrement; // Each 0.5 years of experience, width will be 75px, therefore 1 year of experience, width will be 150px

  const experienceAndWidth = {
    experience: Math.floor(Number(yearsOfExperience)),
    width: (width === 0 ? 75 : width) / 16, // 1rem equals 16px
  };

  return experienceAndWidth;
}

export function handleToolStatus(
  allTools: string[],
  tools: ToolsType,
  tool: string
): { tool: string; color: string; percentage: string } {
  let sum = 0;

  for (let i = 0; i < allTools.length; i++) {
    sum += tools[allTools[i]];
  }

  let toolStatus = { tool: "", color: "white", percentage: "" };

  if (allTools.length > 0) {
    const percentage = ((tools[tool] / sum) * 100).toFixed(1);

    switch (tool) {
      case "TypeScript":
        toolStatus = {
          tool: "TypeScript",
          color: "#007acc",
          percentage: percentage,
        };
        break;
      case "JavaScript":
        toolStatus = {
          tool: "JavaScript",
          color: "#f1e05a",
          percentage: percentage,
        };
        break;
      case "HTML":
        toolStatus = {
          tool: "HTML",
          color: "#e34c26",
          percentage: percentage,
        };
        break;
      case "CSS":
        toolStatus = {
          tool: "CSS",
          color: "#563D7C",
          percentage: percentage,
        };
        break;
      case "SCSS":
        toolStatus = {
          tool: "SCSS",
          color: "#C6538C",
          percentage: percentage,
        };
        break;
      case "PHP":
        toolStatus = {
          tool: "PHP",
          color: "#4F5D95",
          percentage: percentage,
        };
        break;
      default:
        break;
    }
  }

  return toolStatus;
}
