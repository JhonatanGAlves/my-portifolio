"use client";

import { ReactNode, useState } from "react";
import { css, styled } from "styled-components";

interface BadgeProps {
  message: string;
  activeBadge: string;
  children: ReactNode;
}

export function Badge({ message, activeBadge, children }: BadgeProps) {
  const [showBadgeMessage, setShowBadgeMessage] = useState("home");

  const isActive = activeBadge === message;
  const isHover = showBadgeMessage === message;

  return (
    <BadgeContainer>
      <BadgeMessage isActive={isActive} isHover={isHover}>
        {message}
      </BadgeMessage>
      <ElementContent
        onMouseEnter={() => setShowBadgeMessage(message)}
        onMouseLeave={() => setShowBadgeMessage("")}
        isActive={isActive}
      >
        {children}
      </ElementContent>
    </BadgeContainer>
  );
}

const BadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const BadgeMessage = styled.div<{ isActive: boolean; isHover: boolean }>`
  ${({ isActive, isHover }) =>
    !isActive &&
    !isHover &&
    css`
      display: none;
    `}

  position: absolute;
  top: 8px;

  padding: 3px 8px;
  border-radius: 3px;

  text-transform: capitalize;

  color: ${({ isActive }) => (isActive ? "var(--gray-800)" : "#828187")};
  background-color: ${({ isActive }) =>
    isActive ? "var(--detail)" : "#1d1d1d"};
`;

const ElementContent = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.75rem;
  height: 3.75rem;

  border-radius: 50%;

  background-color: ${({ isActive }) =>
    isActive ? "var(--detail)" : "#1d1d1d"};

  svg {
    margin: auto;
    color: ${({ isActive }) => (isActive ? "var(--gray-800)" : "#828187")};
  }
`;
