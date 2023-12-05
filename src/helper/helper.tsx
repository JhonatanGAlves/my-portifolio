import { ReactNode } from "react";

import { AiOutlineMessage } from "react-icons/ai";
import { FaGraduationCap, FaHome, FaLaptopCode } from "react-icons/fa";

export function getPageNavOptions(pathName: string): {
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
      pageName: "home",
      href: `/${pathName.split("/")[1]}`,
      icon: <FaHome size={30} />,
    },
    {
      pageName: "projects",
      href: `/${pathName.split("/")[1]}/projects`,
      icon: <FaLaptopCode size={30} />,
    },
    {
      pageName: "education",
      href: `/${pathName.split("/")[1]}/education`,
      icon: <FaGraduationCap size={30} />,
    },
    {
      pageName: "contact",
      href: `/${pathName.split("/")[1]}/contact`,
      icon: <AiOutlineMessage size={30} />,
    },
  ];

  return pageNavOptions;
}
