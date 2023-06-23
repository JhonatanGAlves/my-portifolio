import darkIcon from "../../assets/icons/dark-icon.svg";
import lightIcon from "../../assets/icons/light-icon.svg";
import Image from "next/image";

interface ThemeIconProps {
  currentTheme: string;
  width: number;
}

export default function ThemeIcon({ currentTheme, width }: ThemeIconProps) {
  return (
    <>
      {currentTheme === "dark" ? (
        <Image alt="dark icon" src={darkIcon} width={40} />
      ) : (
        <Image alt="light icon" src={lightIcon} width={40} />
      )}
    </>
  );
}
