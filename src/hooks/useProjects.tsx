"use-client";
import { useEffect, useState } from "react";

import { getTools, getRepos } from "@/api/api";
import { ProjectTypes } from "@/types/types";

export default function useProjects() {
  const [projects, setProjects] = useState<ProjectTypes[]>([]);

  async function getReposAndMountTheObject() {
    const repositories = await getRepos();

    const newRepos = await Promise.all(
      repositories.map(
        async ({
          id,
          name,
          description,
          html_url,
          created_at,
          languages_url,
          topics,
        }: ProjectTypes) => {
          const tools = await getTools(languages_url);

          return {
            id,
            name,
            description,
            html_url,
            created_at,
            tools,
            topics,
          };
        }
      )
    );

    setProjects(newRepos);
  }

  useEffect(() => {
    getReposAndMountTheObject();
  }, []);

  return { projects };
}
