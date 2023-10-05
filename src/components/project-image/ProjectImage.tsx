import Image from "next/image";
import { useEffect, useState } from "react";

interface ProjectImageProps {
  projectName: string;
  topics: string[];
}

export function ProjectImage({ projectName, topics }: ProjectImageProps) {
  const [imageWidth, setImageWidth] = useState(318);

  function handleResize() {
    if (window.innerWidth < 769) {
      setImageWidth(481);
    } else {
      setImageWidth(318);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    topics.includes("done") && (
      <Image
        src={`/project-images/${projectName}.png`}
        alt={`Image from ${projectName} project`}
        width={imageWidth}
        height={imageWidth === 318 ? 284 : 447}
      />
    )
  );
}
