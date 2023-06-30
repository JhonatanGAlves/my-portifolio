"use client";
import { styled } from "styled-components";
import Link from "next/link";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import ProjectCard from "@/components/card/ProjectCard";

export default function ProjectsPage() {
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
      <Sort>
        <SortBy active={true}>
          Date <FaLongArrowAltDown size={12} />
          {/* <FaLongArrowAltUp size={12} /> */}
        </SortBy>
        <SortBy active={false}>A-Z</SortBy>
      </Sort>
      <ProjectsContent>
        <ProjectCard
          projectName="Project 01"
          description="Blá blá blá"
          url=""
          image=""
        />
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

const Sort = styled.div`
  display: flex;
  gap: 8px;

  margin: 2.5rem 0;
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

  &:hover {
    opacity: 0.8;
  }

  svg {
    margin-top: 3px;
  }
`;

const ProjectsContent = styled.div`
  display: grid;
  grid-template-columns: 19.875rem 19.875rem 19.875rem;
  gap: 3rem;
`;
