"use client";

import { styled } from "styled-components";

interface FooterProps {}

export default function Footer({}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <span>&copy;</span>
      <small>
        Copyright {currentYear}{" "}
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
