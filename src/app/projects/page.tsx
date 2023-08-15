"use client";
import { useEffect, useState } from "react";

import Link from "next/link";
import { styled } from "styled-components";
import moment from "moment";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";

import ProjectCard from "@/components/card/ProjectCard";
import useProjects from "@/hooks/useProjects";
import joystickImage from "../../assets/joystick.png";
import { ProjectTypes } from "@/types/types";
import { ToolFilter } from "./tool-filter/ToolFilter";

export default function ProjectsPage() {
  const [alteredProjects, setAlteredProjects] = useState<ProjectTypes[]>([]);
  const [sortBy, setSortBy] = useState("name");
  const [activeSort, setActiveSort] = useState("name");
  const [sortDirection, setSortDirection] = useState("desc");

  const { projects } = useProjects();

  const applySort = (sortByValue: string) => {
    if (!sortDirection) {
      setSortDirection("asc");
    }

    if (sortBy === sortByValue) {
      setSortDirection((prevState) => (prevState === "asc" ? "desc" : "asc"));
      setActiveSort(sortByValue);
    }

    setSortBy(sortByValue);

    const sortedProjects = [...alteredProjects];

    if (sortBy === "date") {
      sortedProjects.sort(compareByDate);
    } else if (sortBy === "name") {
      sortedProjects.sort(compareByName);
    }

    if (sortDirection === "desc") {
      sortedProjects.reverse();
    }

    setAlteredProjects(sortedProjects);
  };

  const compareByDate = (a: ProjectTypes, b: ProjectTypes) => {
    const dateA = moment(a.created_at).unix();
    const dateB = moment(b.created_at).unix();

    if (dateA < dateB) {
      return -1;
    } else if (dateA > dateB) {
      return 1;
    } else {
      return 0;
    }
  };

  const compareByName = (a: ProjectTypes, b: ProjectTypes) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    return nameA.localeCompare(nameB);
  };

  useEffect(() => {
    setAlteredProjects([...projects]);
  }, [projects]);

  return (
    <ProjectsContainer>
      <TitleAndParagraph>
        <h1>My Projects</h1>
        <p>
          All the projects bellow are Open Source and you can find the code for
          each project on my{" "}
          <Link href="https://github.com/JhonatanGAlves" target="_blank">
            GitHub profile
          </Link>
          .
        </p>
      </TitleAndParagraph>

      <SortAndFilter>
        <Sort>
          <SortBy
            active={activeSort === "name"}
            onMouseEnter={() => setSortBy("name")}
            onMouseLeave={() => setSortBy("")}
            onClick={() => applySort("name")}
          >
            Name
            {sortDirection &&
              activeSort === "name" &&
              (sortDirection === "asc" ? (
                <FaLongArrowAltUp size={12} />
              ) : (
                <FaLongArrowAltDown size={12} />
              ))}
          </SortBy>
          <SortBy
            active={activeSort === "date"}
            onMouseEnter={() => setSortBy("date")}
            onMouseLeave={() => setSortBy("")}
            onClick={() => applySort("date")}
          >
            Date{" "}
            {sortDirection &&
              activeSort === "date" &&
              (sortDirection === "asc" ? (
                <FaLongArrowAltDown size={12} />
              ) : (
                <FaLongArrowAltUp size={12} />
              ))}
          </SortBy>
        </Sort>
        <Divisor />
        <ToolFilter
          projects={projects}
          setAlteredProjects={setAlteredProjects}
        />
      </SortAndFilter>
      <ProjectsContent>
        {alteredProjects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              projectName={project.name}
              description={project.description}
              url={project.html_url}
              image={joystickImage}
              createdAt={project.created_at}
              tools={project.tools}
            />
          );
        })}
      </ProjectsContent>
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 4rem 0;
  height: fit-content;
`;

const TitleAndParagraph = styled.div`
  width: 34.375rem;
  text-align: center;

  h1 {
    font-size: 3rem;
  }

  p {
    margin-top: 8px;
    line-height: 1.5rem;

    a {
      font-weight: 700;
      text-decoration: none;

      color: var(--gray-100);

      transition: 0.1s;

      &:hover {
        opacity: 0.6;
        text-decoration: underline;
      }
    }
  }
`;

const SortAndFilter = styled.div`
  display: flex;
  align-items: center;
  margin: 2.5rem 0;
`;

const Sort = styled.div`
  display: flex;
  padding: 1rem 0;
  gap: 8px;
`;

const SortBy = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 0.3rem 1rem;

  font-weight: 700;

  border: ${({ active }) =>
    active ? "2px solid var(--detail)" : "2px solid var(--gray-500)"};
  border-radius: 8px;

  cursor: pointer;

  color: ${({ active }) => (active ? "var(--detail)" : "var(--gray-500)")};

  user-select: none;

  &:hover {
    opacity: 0.8;
  }

  svg {
    margin-top: 3px;
  }
`;

const Divisor = styled.div`
  width: 2px;
  height: 2.5rem;
  border-radius: 2px;
  background-color: var(--gray-500);

  margin: 0 1rem;
`;

const ProjectsContent = styled.div`
  display: grid;
  grid-template-columns: 19.875rem 19.875rem 19.875rem;
  gap: 3rem;
`;
