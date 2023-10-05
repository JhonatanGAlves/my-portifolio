import { useState } from "react";

import Link from "next/link";
import { styled } from "styled-components";
import moment from "moment";
import { FaLongArrowAltUp, FaCalendarAlt } from "react-icons/fa";

import ToolsStatus from "./tools-component/ToolsStatus";
import { ToolsType } from "@/types/types";
import { ProjectImage } from "../project-image/ProjectImage";

interface ProjectCardProps {
  projectName: string;
  description: string | undefined;
  url: string;
  createdAt: string;
  tools: ToolsType;
  topics: string[];
}

export default function ProjectCard({
  projectName,
  description,
  url,
  createdAt,
  tools,
  topics,
}: ProjectCardProps) {
  const [isMouseHover, setIsMouseHover] = useState(false);

  function removeDashFromProjectName(projectName: string): string {
    if (!projectName) return "";

    return projectName.split("-").join(" ").toLowerCase();
  }

  return (
    <Card>
      <ImageCard
        onMouseEnter={() => setIsMouseHover(true)}
        onMouseLeave={() => setIsMouseHover(false)}
      >
        <ProjectImage projectName={projectName} topics={topics} />
        {isMouseHover && (
          <BorderOnHoverContainer>
            <BorderOnHover>
              <Link href={url} target="_blank">
                <FaLongArrowAltUp size={20} />
              </Link>
            </BorderOnHover>
          </BorderOnHoverContainer>
        )}
      </ImageCard>
      <DescriptionCard>
        <p title={description}>{description}</p>
        <h2>{removeDashFromProjectName(projectName)}</h2>
        <ToolsContainer>
          <ToolsStatus tools={tools} />
        </ToolsContainer>
        <CreationDate>
          <FaCalendarAlt />
          <span>{moment(createdAt).format("LL")}</span>
        </CreationDate>
      </DescriptionCard>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  img {
    border-radius: 8px;
  }

  p {
    font-size: 0.75rem;
    line-height: 1.2rem;
    margin-top: 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media screen and (max-width: 420) {
    border-radius: 8px;
    background-color: var(--gray-800);
  }
`;

const ImageCard = styled.div`
  position: relative;
  border-radius: 8px;
`;

const DescriptionCard = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;

  h2 {
    text-transform: capitalize;
  }

  @media screen and (max-width: 420px) {
    padding: 0 1rem 1rem;
  }
`;

const BorderOnHoverContainer = styled.div`
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;
  padding: 1.5rem;
`;

const BorderOnHover = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  height: 100%;

  padding: 1rem;

  border-radius: 8px;
  border: 2px solid var(--detail);

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 3rem;
    height: 3rem;

    border-radius: 50%;

    background-color: var(--gray-800);

    svg {
      transform: rotate(45deg);
      color: var(--detail);
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;

const ToolsContainer = styled.div`
  display: flex;
  align-items: end;
  flex: 1;
`;

const CreationDate = styled.div`
  display: flex;
  gap: 8px;

  svg {
    margin-bottom: 2px;
  }
`;
