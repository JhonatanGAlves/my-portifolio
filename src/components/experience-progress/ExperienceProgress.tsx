"use client";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Image from "next/image";

interface ExperienceProgressProps {
  alt: string;
  src: any;
  size: number;
  howLong: number;
  width: number;
  index: number;
}

export default function ExperienceProgress({
  alt,
  src,
  size,
  howLong,
  width,
  index,
}: ExperienceProgressProps) {
  const [widthAfterTimeout, setWidthAfterTimeout] = useState(0);

  useEffect(() => {
    setTimeout(
      () => {
        setWidthAfterTimeout(width);
      },
      index === 0 ? 500 : index === 1 ? 700 : index === 2 ? 900 : 1100
    );
  }, []);

  return (
    <ProgressContainer>
      <Image alt={alt} src={src} width={size} />
      <ProgressBar width={widthAfterTimeout} />
      {widthAfterTimeout !== 0 && (
        <p>{`${howLong > 1 ? `+${howLong} years` : `-${howLong} year`}`}</p>
      )}
    </ProgressContainer>
  );
}

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ProgressBar = styled.div<{ width: number }>`
  min-width: ${({ width }) => width}rem;
  height: 1rem;
  border-radius: 10px;

  transition: 0.5s;

  background-color: var(--detail);
`;
