import { ReactNode, useState } from "react";
import styled from "styled-components";
import Link from "next/link";

import { FaArrowRight } from "react-icons/fa";

interface MediaCardProps {
  mediaName: string;
  icon: ReactNode;
  href: string;
}

export function MediaCard({ mediaName, icon, href }: MediaCardProps) {
  const [isMouseHover, setIsMouseHover] = useState(false);

  return (
    <MediaCardContainer
      onMouseEnter={() => setIsMouseHover(true)}
      onMouseLeave={() => setIsMouseHover(false)}
      isMouseHover={isMouseHover}
    >
      {icon}
      <div className="dividor" />
      <span>{mediaName}</span>
      <Link href={href} target="_blank">
        {<FaArrowRight size={16} />}
      </Link>
    </MediaCardContainer>
  );
}

const MediaCardContainer = styled.div<{ isMouseHover: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0.5rem;

  overflow: hidden;

  width: 12.5rem;

  border-radius: 4px;
  cursor: default;

  background-color: var(--gray-800);

  &:hover {
    background-color: var(--gray-600);
  }

  .dividor {
    width: 1px;
    height: 100%;

    border-radius: 1px;

    background-color: var(--detail);
  }

  a {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 2.5rem;

    transition: all 0.2s ease-in-out;

    background-color: ${({ isMouseHover }) =>
      isMouseHover ? "var(--detail)" : "transparent"};

    svg {
      color: ${({ isMouseHover }) =>
        isMouseHover ? "var(--gray-800)" : "var(--detail)"};
    }
  }
`;
