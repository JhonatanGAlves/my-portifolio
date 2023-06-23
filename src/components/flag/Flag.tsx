import usaDarkFlag from "../../assets/icons/flags/usa-dark-flag.svg";
import usaLightFlag from "../../assets/icons/flags/usa-light-flag.svg";
import Image from "next/image";

interface FlagProps {
  currentTheme: string;
  width: number;
}

export default function Flag({ currentTheme, width }: FlagProps) {
  return (
    <>
      {currentTheme === "dark" ? (
        <Image alt="dark icon" src={usaDarkFlag} width={30} />
      ) : (
        <Image alt="light icon" src={usaLightFlag} width={30} />
      )}
    </>
  );
}
