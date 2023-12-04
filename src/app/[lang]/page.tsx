"use client";
import ExperienceProgress from "@/components/experience-progress/ExperienceProgress";
import { mainExperiences } from "@/mock/mock";
import { styled } from "styled-components";
import { AiOutlineDownload } from "react-icons/ai";
import Image from "next/image";
import jhonatanAlvesBgImage from "../../assets/photo-bg.svg";

export default function App() {
  return (
    <HomeContainer>
      <Phrase>
        <span>Hi, I’m</span>
        <br />
        Jhonatan Alves <br />
        <span>I’m a Software Developer.</span>
      </Phrase>
      <MyExperiences>
        <h3>My main experiences:</h3>
        <ProgressContainer>
          {mainExperiences.map((experience, index) => {
            return (
              <ExperienceProgress
                key={index}
                alt={experience.alt}
                howLong={experience.howLongAndWidth.experience}
                src={experience.image}
                size={30}
                width={experience.howLongAndWidth.width}
                index={index}
              />
            );
          })}
        </ProgressContainer>
      </MyExperiences>
      <DownloadButton href="/" download>
        <AiOutlineDownload />
        Download CV
      </DownloadButton>
      <Image
        className="jhonatan-alves-image"
        alt="Jhonatan Alves image"
        src={jhonatanAlvesBgImage}
        width={730}
      />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 15.625rem);
  gap: 48px;

  .jhonatan-alves-image {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  @media screen and (max-width: 1134px) {
    .jhonatan-alves-image {
      display: none;
    }
  }

  @media screen and (min-width: 1135px) and (max-width: 1271px) {
    .jhonatan-alves-image {
      width: 450px;
    }
  }

  @media screen and (min-width: 1270px) and (max-width: 1370px) {
    .jhonatan-alves-image {
      width: 600px;
    }
  }

  @media screen and (max-width: 420px) {
    height: initial;
    gap: 0;
  }
`;

const Phrase = styled.h1`
  font-size: 4rem;
  line-height: 3.5rem;

  span {
    font-size: 2rem;
    font-weight: 300;
  }

  @media screen and (max-width: 420px) {
    text-align: center;
    font-size: 3rem;
    line-height: 2.5rem;
    padding: 3rem 0;

    span {
      font-size: 1.5rem;
      line-height: 1rem;
    }
  }

  @media screen and (min-width: 422px) and (max-width: 1024px) {
    text-align: center;
  }
`;

const MyExperiences = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h3 {
    font-size: 1.25rem;
  }

  @media screen and (max-width: 420px) {
    h3 {
      align-self: center;
    }
  }
`;

const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const DownloadButton = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 10rem;
  padding: 1rem;

  font-weight: 700;
  text-decoration: none;

  border: 1px solid var(--detail);
  border-radius: 4px;

  cursor: pointer;

  color: var(--detail);
  background-color: transparent;

  transition: 0.2s;

  &:hover {
    color: var(--gray-800);
    background-color: var(--detail);
  }

  @media screen and (max-width: 420px) {
    margin: 2rem auto;
  }
`;
