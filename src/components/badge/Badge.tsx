"use client";

import { ReactNode, useContext, useState } from "react";
import { PortfolioContext } from "@/context/PortfolioContext";
import { css, styled } from "styled-components";

interface BadgeProps {
  message: string;
  activeBadge: string;
  children: ReactNode;
}

export function Badge({ message, activeBadge, children }: BadgeProps) {
  const [showBadgeMessage, setShowBadgeMessage] = useState("home");
  const { theme } = useContext(PortfolioContext);

  const isActive = activeBadge === message;
  const isHover = showBadgeMessage === message;

  return (
    <BadgeContainer>
      <BadgeMessage isActive={isActive} isHover={isHover} currentTheme={theme}>
        {message}
      </BadgeMessage>
      <ElementContent
        onMouseEnter={() => setShowBadgeMessage(message)}
        onMouseLeave={() => setShowBadgeMessage("")}
        isActive={isActive}
        currentTheme={theme}
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

const BadgeMessage = styled.div<{
  isActive: boolean;
  isHover: boolean;
  currentTheme: string;
}>`
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

  color: ${({ isActive, currentTheme }) =>
    isActive
      ? "var(--gray-800)"
      : currentTheme === "dark"
      ? "#828187"
      : "#e1e1e1"};
  background-color: ${({ isActive, currentTheme }) =>
    isActive
      ? "var(--detail)"
      : currentTheme === "dark"
      ? "#1d1d1d"
      : "#828187"};
`;

const ElementContent = styled.div<{ isActive: boolean; currentTheme: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.75rem;
  height: 3.75rem;

  border-radius: 50%;

  background-color: ${({ isActive, currentTheme }) =>
    isActive
      ? "var(--detail)"
      : currentTheme === "dark"
      ? "#1d1d1d"
      : "#828187"};

  svg {
    margin: auto;
    color: ${({ isActive, currentTheme }) =>
      isActive
        ? "var(--gray-800)"
        : currentTheme === "dark"
        ? "#828187"
        : "#e1e1e1"};
  }
`;
