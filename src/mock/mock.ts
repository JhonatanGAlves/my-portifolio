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
      getExperienceAndWidth(new Date(2023, 5, 1)).experience === 0
        ? { ...getExperienceAndWidth(new Date(2023, 5, 1)), experience: 1 }
        : getExperienceAndWidth(new Date(2023, 5, 1)), // 2023/06/01
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
    description:
      "I'm a Front-End Developer in a multinational company's Performance team, specializing in the O&G (Oil and Gas) industry. I create plugins and widgets to optimize processes, conduct code reviews, and write unit tests using JUnit and Jest, as well as E2E tests with Selenium.",
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
      "I created institutional websites and landing pages, from gathering requirements and designing prototypes in Figma to development using WordPress CMS after approval.",
  },
];

export const certifications = [
  {
    status: "Completed in 2021",
    educationName: "React | Certificate of Authority",
    institutionName: "DevMedia",
    credentialLink:
      "https://www.devmedia.com.br/certificado/tecnologia/react/jhonatan-91",
  },
  {
    status: "Completed in 2021",
    educationName: "React | Creating my First Routes",
    institutionName: "DevMedia",
    credentialLink: "http://www.devmedia.com.br/cert/?id=112081",
  },
  {
    status: "Completed in 2021",
    educationName: "React | State Hooks and onClick event",
    institutionName: "DevMedia",
    credentialLink: "http://www.devmedia.com.br/cert/?id=112024",
  },
  {
    status: "Completed in 2021",
    educationName: "React | Creating my First Components",
    institutionName: "DevMedia",
    credentialLink: "http://www.devmedia.com.br/cert/?id=111937",
  },
  {
    status: "Completed in 2021",
    educationName: "Front-end Programmer | Introduction",
    institutionName: "DevMedia",
    credentialLink: "https://www.devmedia.com.br/cursos/certificado/?id=111908",
  },
  {
    status: "Completed in 2021",
    educationName: "More Techniques and Good Practices",
    institutionName: "Alura",
    credentialLink:
      "https://www.devmedia.com.br/certificado/tecnologia/react/jhonatan-91",
  },
  {
    status: "Completed in 2021",
    educationName: "TypeScript | Advancing the Language",
    institutionName: "Alura",
    credentialLink:
      "https://cursos.alura.com.br/certificate/d047ed8d-9f7b-44af-9cdc-c053fcf1c60f",
  },
  {
    status: "Completed in 2021",
    educationName: "TypeScript | Evolving your JavaScript",
    institutionName: "Alura",
    credentialLink:
      "https://cursos.alura.com.br/certificate/167ceaee-295a-4fa5-95fc-cd53b1eff358",
  },
  {
    status: "Completed in 2021",
    educationName: "Introduction to Git and GitHub",
    institutionName: "DIO",
    credentialLink: "https://certificates.digitalinnovation.one/217CC25C",
  },
  {
    status: "Completed in 2021",
    educationName: "Essential Programming Logic",
    institutionName: "DIO",
    credentialLink: "https://certificates.digitalinnovation.one/F3C61B02",
  },
  {
    status: "Completed in 2021",
    educationName: "JavaScript",
    institutionName: "B7Web",
    credentialLink:
      "https://alunos.b7web.com.br/media/certificates/certificado_9988957.jpg",
  },
  {
    status: "Completed in 2020",
    educationName: "Git/GitHub",
    institutionName: "B7Web",
    credentialLink:
      "https://alunos.b7web.com.br/media/certificates/certificado_9665643.jpg",
  },
  {
    status: "Completed in 2020",
    educationName: "HTML5 & CSS3",
    institutionName: "B7Web",
    credentialLink:
      "https://alunos.b7web.com.br/media/certificates/certificado_2730535.jpg",
  },
  {
    status: "Completed in 2011",
    educationName: "Assembly and maintenance of computers and networks",
    institutionName: "Microlins",
  },
  {
    status: "Completed in 2011",
    educationName: "Computer Operator",
    institutionName: "Microlins",
  },
];

export const socialMedia = [
  {
    mediaName: "LinkedIn",
    href: "https://www.linkedin.com/in/jhonatan-alves-11b28015b/",
  },
  {
    mediaName: "GitHub",
    href: "https://github.com/JhonatanGAlves",
  },
  {
    mediaName: "Instagram",
    href: "https://www.instagram.com/jhonatangalves/",
  },
  {
    mediaName: "Mail",
    href: "mailto:jhonatagalves96@gmail.com",
  },
  {
    mediaName: "WhatsApp",
    href: "https://www.linkedin.com/in/jhonatan-alves-11b28015b/",
  },
];
