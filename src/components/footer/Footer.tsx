"use client";
import { I18nFooterTypes } from "@/types/i18n";
import { styled } from "styled-components";

interface FooterProps {
  i18nFooter: I18nFooterTypes;
}

export default function Footer({ i18nFooter }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <span>&copy;</span>
      <small>
        {i18nFooter.copyright} {currentYear}{" "}
        <a href="https://github.com/JhonatanGAlves" target="_blank">
          @JhonatanGAlves
        </a>
      </small>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  height: 3.125rem;

  background-color: var(--gray-800);

  a {
    text-decoration: none;
    color: var(--gray-100);

    &:hover {
      text-decoration: underline;
    }
  }
`;
