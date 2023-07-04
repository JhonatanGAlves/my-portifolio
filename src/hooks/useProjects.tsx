"use-client";
import { useEffect, useState } from "react";
import { getRepos } from "@/api/api";
import { ProjectTypes } from "@/types/types";

export default function useProjects() {
  const [projects, setProjects] = useState<ProjectTypes[]>([]);

  useEffect(() => {
    getRepos().then(setProjects);
  }, []);

  return { projects };
}
