"use client";

import { ReactNode, useContext, useState } from "react";
import { PortfolioContext } from "@/context/PortfolioContext";
import { css, styled } from "styled-components";

interface BadgeProps {
  message: string;
  children: ReactNode;
}

export function Badge({ message, children }: BadgeProps) {
  const [showBadgeMessage, setShowBadgeMessage] = useState("");
  const { theme, pathName } = useContext(PortfolioContext);

  const convertedMessageToEnglish = convertToEnglish(message);

  const isActive =
    pathName.toLowerCase().includes(convertedMessageToEnglish) ||
    (pathName.toLowerCase() === `/${pathName.toLowerCase().split("/")[1]}` &&
      convertedMessageToEnglish === "home");
  const isHover = showBadgeMessage === convertedMessageToEnglish;

  function convertToEnglish(message: string): string {
    switch (message) {
      case "início":
        return "home";
      case "projetos":
        return "projects";
      case "experiências":
        return "experiences";
      case "contato":
        return "contact";
      default:
        return message;
    }
  }

  return (
    <BadgeContainer>
      <BadgeMessage
        $isActive={isActive}
        $isHover={isHover}
        $currentTheme={theme}
      >
        {message}
      </BadgeMessage>
      <ElementContent
        onMouseEnter={() => setShowBadgeMessage(convertedMessageToEnglish)}
        onMouseLeave={() => setShowBadgeMessage("")}
        $isActive={isActive}
        $currentTheme={theme}
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
  $isActive: boolean;
  $isHover: boolean;
  $currentTheme: string;
}>`
  ${({ $isActive, $isHover }) =>
    !$isActive &&
    !$isHover &&
    css`
      display: none;
    `}

  position: absolute;
  top: 8px;

  padding: 3px 8px;
  border-radius: 3px;

  text-transform: capitalize;

  color: ${({ $isActive, $currentTheme }) =>
    $isActive
      ? "var(--gray-800)"
      : $currentTheme === "dark"
      ? "#828187"
      : "#e1e1e1"};
  background-color: ${({ $isActive, $currentTheme }) =>
    $isActive
      ? "var(--detail)"
      : $currentTheme === "dark"
      ? "#1d1d1d"
      : "#828187"};
`;

const ElementContent = styled.div<{
  $isActive: boolean;
  $currentTheme: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.75rem;
  height: 3.75rem;

  border-radius: 50%;

  background-color: ${({ $isActive, $currentTheme }) =>
    $isActive
      ? "var(--detail)"
      : $currentTheme === "dark"
      ? "#1d1d1d"
      : "#828187"};

  svg {
    margin: auto;
    color: ${({ $isActive, $currentTheme }) =>
      $isActive
        ? "var(--gray-800)"
        : $currentTheme === "dark"
        ? "#828187"
        : "#e1e1e1"};
  }
`;
