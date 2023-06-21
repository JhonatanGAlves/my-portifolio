"use client";

import { styled } from "styled-components";
import Image from "next/image";
import usaDarkFlag from "../../assets/icons/flags/usa-dark-flag.svg";
import darkIcon from "../../assets/icons/dark-icon.svg";
import { FaGraduationCap, FaHome, FaLaptopCode } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import Link from "next/link";
import { useContext, useState } from "react";
import { PortfolioContext } from "@/context/PortfolioContext";
import { Badge } from "../badge/Badge";

export default function Header() {
  const { theme, setTheme } = useContext(PortfolioContext);
  const [activeBadge, setActiveBadge] = useState("home");

  return (
    <HeaderContainer>
      <HeaderContent>
        <Languages isDarkTheme={theme === "dark"}>
          <Image alt="The flag of USA" src={usaDarkFlag} width={30} />
          <div className="labels">
            <button>EN</button> / <button>PT</button>
          </div>
        </Languages>
        <Nav>
          <ul>
            <Badge message="home" activeBadge={activeBadge}>
              <Link href="/" onClick={() => setActiveBadge("home")}>
                <li>
                  <FaHome size={30} />
                </li>
              </Link>
            </Badge>
            <Badge message="projects" activeBadge={activeBadge}>
              <Link href="/projects" onClick={() => setActiveBadge("projects")}>
                <li>
                  <FaLaptopCode size={30} />
                </li>
              </Link>
            </Badge>
            <Badge message="education" activeBadge={activeBadge}>
              <Link
                href="/education"
                onClick={() => setActiveBadge("education")}
              >
                <li>
                  <FaGraduationCap size={30} />
                </li>
              </Link>
            </Badge>
            <Badge message="contact" activeBadge={activeBadge}>
              <Link href="/contact" onClick={() => setActiveBadge("contact")}>
                <li>
                  <AiOutlineMessage size={30} />
                </li>
              </Link>
            </Badge>
          </ul>
        </Nav>
        <SwitchTheme isDarkTheme={theme === "dark"}>
          <div className="labels">
            <button className="dark-button" onClick={() => setTheme("dark")}>
              Dark
            </button>{" "}
            /{" "}
            <button className="light-button" onClick={() => setTheme("light")}>
              Light
            </button>
          </div>
          <Image alt="dark icon" src={darkIcon} width={40} />
        </SwitchTheme>
      </HeaderContent>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  padding: 0.5rem 12rem;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  padding: 2.25rem 0;

  ul {
    display: flex;
    gap: 50px;
    list-style: none;

    padding: 0;
  }
`;

const Languages = styled.div<{ isDarkTheme: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;

  button {
    border: none;
    cursor: pointer;
    font-family: inherit;
    outline: none;

    background-color: transparent;

    &:hover {
      opacity: 0.6;
    }
  }
`;

const SwitchTheme = styled.div<{ isDarkTheme: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;

  button {
    border: none;
    cursor: pointer;
    font-family: inherit;
    outline: none;

    background-color: transparent;

    &:hover {
      opacity: 0.6;
    }
  }

  .dark-button {
    color: ${({ isDarkTheme }) =>
      isDarkTheme ? "var(--detail)" : "var(--gray-100)"};
  }
  .light-button {
    color: ${({ isDarkTheme }) =>
      !isDarkTheme ? "var(--detail)" : "var(--gray-100)"};
  }
`;
