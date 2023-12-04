"use client";

import { css, styled } from "styled-components";
import { FaGraduationCap, FaHome, FaLaptopCode } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineMessage } from "react-icons/ai";
import Link from "next/link";
import { useContext, useState } from "react";
import { PortfolioContext } from "@/context/PortfolioContext";
import { Badge } from "../badge/Badge";
import ThemeIcon from "../theme-icon/ThemeIcon";
import SwitchLanguage from "../switches/language/SwitchLanguage";

export default function Header() {
  const { theme, setTheme, pathName } = useContext(PortfolioContext);
  const [activeBadge, setActiveBadge] = useState("home");
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  const isCellPhoneScreen = window.innerWidth < 421;

  return isCellPhoneScreen ? (
    <CellPhoneHeaderContainer isDropdownMenuOpen={showDropdownMenu}>
      <AiOutlineMenu
        size={24}
        onClick={() => setShowDropdownMenu((prevState) => !prevState)}
      />
      <DropdownMenu show={showDropdownMenu}>
        <ul>
          <>
            <Link href={"/"} onClick={() => setShowDropdownMenu(false)}>
              <li>Home</li>
            </Link>
            <Link href={"/projects"} onClick={() => setShowDropdownMenu(false)}>
              <li>Projects</li>
            </Link>
            <Link
              href={"/education"}
              onClick={() => setShowDropdownMenu(false)}
            >
              <li>Education</li>
            </Link>
            <Link href={"/contact"} onClick={() => setShowDropdownMenu(false)}>
              <li>Contact</li>
            </Link>
          </>
        </ul>
        <div className="divisor" />
        <LanguageAndTheme>
          <SwitchLanguage theme={theme} />
          <SwitchTheme isDarkTheme={theme === "dark"}>
            <div className="labels">
              <button className="dark-button" onClick={() => setTheme("dark")}>
                Dark
              </button>{" "}
              |{" "}
              <button
                className="light-button"
                onClick={() => setTheme("light")}
              >
                Light
              </button>
            </div>
            <ThemeIcon currentTheme={theme} width={30} />
          </SwitchTheme>
        </LanguageAndTheme>
      </DropdownMenu>
    </CellPhoneHeaderContainer>
  ) : (
    <HeaderContainer>
      <HeaderContent>
        <SwitchLanguage theme={theme} />
        <Nav>
          <ul>
            <Badge message="home" activeBadge={activeBadge}>
              <Link href={pathName} onClick={() => setActiveBadge("home")}>
                <li>
                  <FaHome size={30} />
                </li>
              </Link>
            </Badge>
            <Badge message="projects" activeBadge={activeBadge}>
              <Link
                href={`${pathName}/projects`}
                onClick={() => setActiveBadge("projects")}
              >
                <li>
                  <FaLaptopCode size={30} />
                </li>
              </Link>
            </Badge>
            <Badge message="education" activeBadge={activeBadge}>
              <Link
                href={`${pathName}/education`}
                onClick={() => setActiveBadge("education")}
              >
                <li>
                  <FaGraduationCap size={30} />
                </li>
              </Link>
            </Badge>
            <Badge message="contact" activeBadge={activeBadge}>
              <Link
                href={`${pathName}/contact`}
                onClick={() => setActiveBadge("contact")}
              >
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
            |{" "}
            <button className="light-button" onClick={() => setTheme("light")}>
              Light
            </button>
          </div>
          <ThemeIcon currentTheme={theme} width={40} />
        </SwitchTheme>
      </HeaderContent>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  padding: 0.5rem 12rem;
  z-index: 9999;

  @media screen and (min-width: 422px) and (max-width: 1024px) {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 422px) and (max-width: 1024px) {
    width: calc(100% - 5.25rem);
    margin: auto;
    gap: 24px;
  }
`;

const Nav = styled.nav`
  padding: 2.25rem 0;

  ul {
    display: flex;
    gap: 50px;
    list-style: none;

    padding: 0;
  }

  @media screen and (min-width: 422px) and (max-width: 1024px) {
    ul {
      gap: 12px;
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

// CELL PHONE
const CellPhoneHeaderContainer = styled.header<{ isDropdownMenuOpen: boolean }>`
  display: flex;
  justify-content: flex-end;

  padding: 1.5rem 1.25rem;

  ${({ isDropdownMenuOpen }) =>
    isDropdownMenuOpen &&
    css`
      svg {
        color: var(--detail);
      }
    `}
`;

const DropdownMenu = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  gap: 10px;
  padding: 1rem;

  position: absolute;
  top: 50px;
  z-index: 1;

  border-radius: 4px;
  border: 1px solid var(--detail);

  background-color: var(--gray-800);

  ul {
    display: flex;
    flex-direction: column;
    align-self: flex-end;

    list-style: none;
    gap: 8px;

    a {
      text-decoration: none;
      font-weight: 700;
      color: var(--gray-100);
    }
  }

  .divisor {
    height: 1px;
    border-radius: 1px;
    margin: 0.5rem 0;
    background-color: var(--detail);
  }
`;

const LanguageAndTheme = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
`;
