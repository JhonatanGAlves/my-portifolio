import { useEffect, useState } from "react";

import usaDarkFlag from "../assets/icons/flags/usa-dark-flag.svg";
import usaLightFlag from "../assets/icons/flags/usa-light-flag.svg";
import brazilDarkFlag from "../assets/icons/flags/brazil-dark-flag.svg";
import brazilLightFlag from "../assets/icons/flags/brazil-light-flag.svg";

interface UseFlagProps {
  flag: any;
}

export default function useFlag(
  pathName: string,
  theme: "dark" | "light"
): UseFlagProps {
  const [flag, setFlag] = useState<any>();

  useEffect(() => {
    if (pathName.includes("/en")) {
      if (theme === "dark") {
        setFlag(usaDarkFlag);
      } else {
        setFlag(usaLightFlag);
      }
    } else {
      if (theme === "dark") {
        setFlag(brazilDarkFlag);
      } else {
        setFlag(brazilLightFlag);
      }
    }
  }, [theme]);

  return { flag };
}
