import { SetStateAction, useState } from "react";

import Link from "next/link";

import styled, { css } from "styled-components";

import { AiOutlineMenu } from "react-icons/ai";
import SwitchLanguage from "@/components/switches/language/SwitchLanguage";
import ThemeIcon from "@/components/theme-icon/ThemeIcon";
import { ThemeTypes } from "@/types/types";
import { I18nHeaderTypes } from "@/types/i18n";
import {
  convertMessageToEnglish,
  getActivePage,
  getPageNavOptions,
} from "@/helper/helper";

interface HeaderMobileProps {
  theme: ThemeTypes;
  setTheme: (value: SetStateAction<ThemeTypes>) => void;
  pathName: string;
  i18nHeader: I18nHeaderTypes;
}

export default function HeaderMobile({
  theme,
  setTheme,
  pathName,
  i18nHeader,
}: HeaderMobileProps) {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  return (
    <CellPhoneHeaderContainer isDropdownMenuOpen={showDropdownMenu}>
      <AiOutlineMenu
        size={24}
        onClick={() => setShowDropdownMenu((prevState) => !prevState)}
      />
      <DropdownMenu show={showDropdownMenu}>
        <ul>
          {getPageNavOptions(pathName, i18nHeader).map((page) => {
            const convertedPageNameToEnglish = convertMessageToEnglish(
              page.pageName.toLowerCase()
            );
            const isActive = getActivePage(
              pathName,
              convertedPageNameToEnglish
            );

            return (
              <Link
                key={page.pageName}
                href={page.href}
                style={{
                  color: isActive ? "var(--detail)" : "var(--gray-100)",
                }}
                onClick={() => setShowDropdownMenu(false)}
              >
                <li>{page.pageName}</li>
              </Link>
            );
          })}
        </ul>
        <div className="divisor" />
        <LanguageAndTheme>
          <SwitchLanguage theme={theme} width={25} imagePosition="right" />
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
  );
}

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
