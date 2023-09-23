import Link from "next/link";
import { useState } from "react";
import styled, { css } from "styled-components";

interface EducationCardProps {
  status: string;
  educationName: string;
  institutionName: string;
  type?: "primary" | "secondary";
  credentialLink?: string | undefined;
}

export function EducationCard({
  status,
  educationName,
  institutionName,
  type = "primary",
  credentialLink,
}: EducationCardProps) {
  const [isMouseHover, setIsMouseHover] = useState(false);

  return (
    <EducationCardContainer
      type={type}
      onMouseEnter={() => setIsMouseHover(true)}
      onMouseLeave={() => setIsMouseHover(false)}
    >
      <span className="status">{status}</span>
      <span className="education-name">{educationName}</span>
      <div className="institution-and-credential-btn">
        <span className="institution-name">by {institutionName}</span>
        {isMouseHover && credentialLink && (
          <Link href={credentialLink} target="_blank">
            Show credential
          </Link>
        )}
      </div>
    </EducationCardContainer>
  );
}

const EducationCardContainer = styled.div<{ type: "primary" | "secondary" }>`
  ${({ type }) =>
    type === "secondary"
      ? css`
          border: 2px solid var(--gray-800);
          background-color: transparent;

          max-width: 18.75rem;

          &:hover {
            border: 2px solid var(--detail);
          }
        `
      : css`
          border: 1px solid var(--bg-linear-1);
          background-color: var(--bg-linear-1);

          &:hover {
            border: 1px solid var(--detail);
          }
        `}

  display: flex;
  flex-direction: column;
  padding: 1rem;

  border-radius: 4px;

  &:hover {
    transition: all 0.1s ease-in-out;
  }

  .education-name {
    font-size: 1.5rem;
    font-weight: 700;

    margin: 0.5rem 0 3rem;
    flex: 1;
  }

  .institution-and-credential-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2rem;

    a {
      padding: 0.5rem;
      border-radius: 4px;

      text-decoration: none;
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--gray-800);

      background-color: var(--detail);

      transition: all 0.1s ease-in-out;

      &:hover {
        opacity: 0.6;
      }
    }
  }
`;
