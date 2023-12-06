import { I18nHeaderTypes } from "@/types/i18n";
import { ReactNode } from "react";

import { AiOutlineMessage } from "react-icons/ai";
import { FaGraduationCap, FaHome, FaLaptopCode } from "react-icons/fa";

export function getPageNavOptions(
  pathName: string,
  i18nHeader: I18nHeaderTypes
): {
  pageName: string;
  href: string;
  icon: ReactNode;
}[] {
  const pageNavOptions: {
    pageName: string;
    href: string;
    icon: ReactNode;
  }[] = [
    {
      pageName: i18nHeader.nav.home,
      href: `/${pathName.split("/")[1]}`,
      icon: <FaHome size={30} />,
    },
    {
      pageName: i18nHeader.nav.projects,
      href: `/${pathName.split("/")[1]}/projects`,
      icon: <FaLaptopCode size={30} />,
    },
    {
      pageName: i18nHeader.nav.experiences,
      href: `/${pathName.split("/")[1]}/experiences`,
      icon: <FaGraduationCap size={30} />,
    },
    {
      pageName: i18nHeader.nav.contact,
      href: `/${pathName.split("/")[1]}/contact`,
      icon: <AiOutlineMessage size={30} />,
    },
  ];

  return pageNavOptions;
}

export function getActivePage(pathName: string, message: string) {
  return (
    pathName.toLowerCase().includes(message) ||
    (pathName.toLowerCase() === `/${pathName.toLowerCase().split("/")[1]}` &&
      message === "home")
  );
}

export function convertMessageToEnglish(message: string): string {
  switch (message) {
    case "início":
      return "home";
    case "projetos":
      return "projects";
    case "experiências":
      return "experiences";
    case "contato":
      return "contact";
    default:
      return message;
  }
}
