import Image from "next/image";

interface ProjectImageProps {
  projectName: string;
  topics: string[];
}

export function ProjectImage({ projectName, topics }: ProjectImageProps) {
  return (
    topics.includes("done") && (
      <Image
        src={`/project-images/${projectName}.png`}
        alt={`Image from ${projectName} project`}
        width={318}
        height={284}
      />
    )
  );
}
