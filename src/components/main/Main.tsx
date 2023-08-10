"use client";

import { ReactNode } from "react";
import { styled } from "styled-components";
import Link from "next/link";
import { FaLinkedin, FaGithubSquare, FaInstagram } from "react-icons/fa";

interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  return (
    <MainContainer>
      <Link
        className="button-mail"
        href={"mailto:jhonatagalves96@gmail.com"}
        target="_blank"
      >
        jhonatangalves96@gmail.com
      </Link>
      <MainContent>
        <PageContent>{children}</PageContent>
        <SocialMedia>
          <Link
            href={"https://www.linkedin.com/in/jhonatan-alves-11b28015b/"}
            target="_blank"
          >
            <FaLinkedin size={30} target="_blank" />
          </Link>
          <Link href={"https://github.com/JhonatanGAlves"} target="_blank">
            <FaGithubSquare size={30} />
          </Link>
          <Link
            href={"https://www.instagram.com/jhonatangalves/"}
            target="_blank"
          >
            <FaInstagram size={30} />
          </Link>
        </SocialMedia>
      </MainContent>
    </MainContainer>
  );
}

const MainContainer = styled.main`
  position: relative;
  width: 100%;
  padding: 0 2.75rem 3.125rem;

  .button-mail {
    position: fixed;
    top: 390px;
    left: -117px;

    width: fit-content;
    padding: 2rem 1rem 1.5rem;
    border-radius: 0 0 10px 10px;
    text-decoration: none;

    transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);

    color: var(--gray-800);
    background-color: var(--detail);

    transition: 0.1s;

    &:hover {
      left: -110px;
    }
  }
`;

const MainContent = styled.div`
  width: 100%;
  padding: 0 9.3rem;

  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(var(--gray-500), rgba(130, 129, 135, 0)) 30;
`;

const PageContent = styled.div``;

const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: fixed;
  bottom: 130px;
  left: 65px;

  a {
    color: var(--gray-500);

    &:hover {
      color: var(--detail);
    }
  }
`;
