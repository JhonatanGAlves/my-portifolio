import { useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { FaLongArrowAltUp, FaCalendarAlt } from "react-icons/fa";
import { styled } from "styled-components";
import moment from "moment";

interface ProjectCardProps {
  projectName: string;
  description: string;
  url: string;
  image: StaticImageData;
  createdAt: string;
}

export default function ProjectCard({
  projectName,
  description,
  url,
  image,
  createdAt,
}: ProjectCardProps) {
  const [isMouseHover, setIsMouseHover] = useState(false);

  function removeDashFromProjectName(projectName: string): string {
    if (!projectName) return "";

    return projectName.split("-").join(" ").toLowerCase();
  }

  return (
    <Card
      onMouseEnter={() => setIsMouseHover(true)}
      onMouseLeave={() => setIsMouseHover(false)}
    >
      <ImageCard>
        <Image alt="Image project" src={image} width={318} />
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

    :hover {
      opacity: 0.8;
    }
  }
`;

const CreationDate = styled.div`
  display: flex;
  align-items: end;
  flex: 1;
  gap: 8px;

  svg {
    margin-bottom: 2px;
  }
`;
