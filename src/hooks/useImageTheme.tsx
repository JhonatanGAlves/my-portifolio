"use client";
import { useEffect, useState } from "react";

import imageDarkMode from "../assets/icons/dark-icon.svg";
import imageLightMode from "../assets/icons/light-icon.svg";

interface UseImageThemeProps {
  imageTheme: any;
}

export default function useImageTheme(
  theme: "dark" | "light"
): UseImageThemeProps {
  const [imageTheme, setImageTheme] = useState<any>();

  useEffect(() => {
    if (theme === "dark") {
      setImageTheme(imageDarkMode);
    } else {
      setImageTheme(imageLightMode);
    }
  }, [theme]);

  return { imageTheme };
}
