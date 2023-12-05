"use client";
import { useContext } from "react";

import Link from "next/link";

import { styled } from "styled-components";

import { PortfolioContext } from "@/context/PortfolioContext";
import { Badge } from "../badge/Badge";
import ThemeIcon from "../theme-icon/ThemeIcon";
import SwitchLanguage from "../switches/language/SwitchLanguage";
import HeaderMobile from "./mobile/HeaderMobile";
import { getPageNavOptions } from "@/helper/helper";

export default function Header() {
  const { theme, setTheme, pathName } = useContext(PortfolioContext);

  const isCellPhoneScreen = window.innerWidth < 421;

  return isCellPhoneScreen ? (
    <HeaderMobile theme={theme} setTheme={setTheme} />
  ) : (
    <HeaderContainer>
      <HeaderContent>
        <SwitchLanguage theme={theme} />
        <Nav>
          <ul>
            {getPageNavOptions(pathName).map((page) => (
              <Badge key={page.pageName} message={page.pageName}>
                <Link href={page.href}>
                  <li>{page.icon}</li>
                </Link>
              </Badge>
            ))}
          </ul>
        </Nav>
        <SwitchTheme $isDarkTheme={theme === "dark"}>
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

const SwitchTheme = styled.div<{ $isDarkTheme: boolean }>`
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
    color: ${({ $isDarkTheme }) =>
      $isDarkTheme ? "var(--detail)" : "var(--gray-100)"};
  }
  .light-button {
    color: ${({ $isDarkTheme }) =>
      !$isDarkTheme ? "var(--detail)" : "var(--gray-100)"};
  }
`;
