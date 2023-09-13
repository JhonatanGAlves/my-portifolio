import reactIcon from "../assets/icons/react-icon.svg";
import tsIcon from "../assets/icons/ts-icon.svg";
import jsIcon from "../assets/icons/js-icon.svg";
import nodeIcon from "../assets/icons/nodejs-icon.svg";
import { getExperienceAndWidth } from "@/utils/utils";

export const mainExperiences = [
  {
    alt: "React Icon",
    tool: "React",
    howLongAndWidth: getExperienceAndWidth(new Date(2021, 4, 1)), // 2021/05/01
    image: reactIcon,
  },
  {
    alt: "TypeScript Icon",
    tool: "TypeScript",
    howLongAndWidth: getExperienceAndWidth(new Date(2021, 4, 1)), // 2021/05/01
    image: tsIcon,
  },
  {
    alt: "JavaScript Icon",
    tool: "JavaScript",
    howLongAndWidth: getExperienceAndWidth(new Date(2020, 11, 1)), // 2020/10/01
    image: jsIcon,
  },
  {
    alt: "NodeJS Icon",
    tool: "NodeJS",
    howLongAndWidth:
      getExperienceAndWidth(new Date(2023, 1, 1)).experience === 0
        ? { ...getExperienceAndWidth(new Date(2023, 1, 1)), experience: 1 }
        : getExperienceAndWidth(new Date(2023, 1, 1)), // 2023/02/01
    image: nodeIcon,
  },
];

export const workExperiences = [
  {
    period: {
      start: "01-09-2021",
      end: null,
    },
    companyName: "Intelie by Viasat",
    position: "Software Developer",
    country: "Brazil",
    description: "Lorem Ipsum is Lorem Ipsum is Lorem Ipsum dwd saa red amet.",
  },
  {
    period: {
      start: "05-01-2021",
      end: "27-08-2021",
    },
    companyName: "Eleven Up",
    position: "Web Developer",
    country: "Brazil",
    description:
      "Ipsum is Lorem Ipsum dwd Lorem Ipsum is Lorem saa red amet. Ipsum is Lorem Ipsum dwd Lorem Ipsum is Lorem saa red amet. Ipsum is Lorem Ipsum dwd Lorem Ipsum is Lorem saa red amet.",
  },
  {
    period: {
      start: "01-02-2020",
      end: "20-08-2020",
    },
    companyName: "Another Company",
    position: "Other Position",
    country: "Brazil",
    description: "Lorem Ipsum is Lorem Ipsum is Lorem Ipsum dwd saa red amet.",
  },
];
