"use client";
import { certifications, workExperiences } from "@/mock/mock";
import moment from "moment";
import styled, { css } from "styled-components";

import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { EducationCard } from "@/components/education-card/EducationCard";

export default function EducationPage() {
  register();

  const [slidePerView, setSlidePerView] = useState(3);
  const hasQuantityToBeASlider = workExperiences.length > 3;

  function convertToExactPeriod(period: {
    start: string;
    end: string | null;
  }): string {
    const exactPeriod = !period.end
      ? moment(period.start, "DD-MM-YYYY").fromNow(true)
      : moment(period.start, "DD-MM-YYYY").from(
          moment(period.end, "DD-MM-YYYY"),
          true
        );

    return exactPeriod;
  }

  function handleResize() {
    if (window.innerWidth < 769) {
      setSlidePerView(1);
    } else {
      setSlidePerView(3);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <EducationAndExperienceContainer>
      <TitleAndParagraph>
        <h1>
          <span>Experience</span> & Education
        </h1>
        <p>
          You can check below all my education and experience that I consider
          relevant to my career as a software developer.
        </p>
      </TitleAndParagraph>

      <ExperienceContainer hasQuantityToBeASlider={hasQuantityToBeASlider}>
        {hasQuantityToBeASlider ? (
          <Swiper
            slidesPerView={slidePerView}
            pagination={{ clickable: true }}
            navigation
          >
            {workExperiences.map((experience, index) => (
              <SwiperSlide key={index}>
                <ExperienceCarousel>
                  <div className="period-content">
                    <span className="period">{`${
                      experience.period?.start.split("-")[2]
                    } ${
                      experience.period?.end
                        ? `- ${experience.period?.end?.split("-")[2]}`
                        : "(Present)"
                    }`}</span>
                    <span className="period-by-month">
                      {convertToExactPeriod(experience.period)}
                    </span>
                    <div className="circle" />
                  </div>
                  <div className="name-and-description">
                    <span className="company-name">
                      {experience.companyName}
                    </span>
                    <span className="position">{`< ${experience.position} />`}</span>
                    <span className="country">({experience.country})</span>
                    <p>{experience.description}</p>
                  </div>
                </ExperienceCarousel>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <ExperienceContent>
            {workExperiences.map((experience, index) => (
              <ExperienceCarousel key={index}>
                <div className="period-content">
                  <span className="period">{`${
                    experience.period?.start.split("-")[2]
                  } ${
                    experience.period?.end
                      ? `- ${experience.period?.end?.split("-")[2]}`
                      : "(Present)"
                  }`}</span>
                  <span className="period-by-month">
                    {convertToExactPeriod(experience.period)}
                  </span>
                  <div className="circle" />
                </div>
                <div className="name-and-description">
                  <span className="company-name">{experience.companyName}</span>
                  <span className="position">{`< ${experience.position} />`}</span>
                  <span className="country">({experience.country})</span>
                  <p>{experience.description}</p>
                </div>
              </ExperienceCarousel>
            ))}
          </ExperienceContent>
        )}
      </ExperienceContainer>
      <EducationContainer>
        <UndergraduateAndCurrentCourses>
          <UndergraduateAndCurrentCoursesContent>
            <span className="section-title">Undergraduate</span>
            <EducationCard
              status="Completed in 2022"
              educationName="Analysis and Systems Development"
              institutionName="FATEC - Botucatu SP"
              type="secondary"
            />
          </UndergraduateAndCurrentCoursesContent>

          <div className="divisor" />

          <UndergraduateAndCurrentCoursesContent>
            <span className="section-title">I&apos;m studying</span>
            <div className="courses">
              <EducationCard
                status="2021 (Present)"
                educationName="English Language"
                institutionName="Master Method"
                type="secondary"
              />
              <EducationCard
                status="2021 (Present)"
                educationName="Ignite | Full-stack Developer"
                institutionName="Rocketseat"
                type="secondary"
              />
            </div>
          </UndergraduateAndCurrentCoursesContent>
        </UndergraduateAndCurrentCourses>

        <AllCertifications>
          <span className="all-curses">All Certifications</span>
          {certifications.map((certification, index) => (
            <EducationCard
              key={index}
              status={certification.status}
              educationName={certification.educationName}
              institutionName={certification.institutionName}
              credentialLink={certification?.credentialLink}
            />
          ))}
        </AllCertifications>
      </EducationContainer>
    </EducationAndExperienceContainer>
  );
}

const EducationAndExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 4rem 0;
  height: fit-content;

  .swiper-button-prev,
  .swiper-button-next {
    color: var(--detail);
  }

  .swiper-pagination-bullet {
    background-color: var(--gray-500);
  }

  .swiper-pagination-bullet-active {
    background-color: var(--detail);
  }
`;

const TitleAndParagraph = styled.div`
  width: 34.375rem;
  text-align: center;

  h1 {
    font-size: 3rem;
  }

  span {
    color: var(--detail);
  }

  p {
    margin-top: 8px;
    line-height: 1.5rem;
  }
`;

const ExperienceContainer = styled.div<{
  hasQuantityToBeASlider: boolean;
}>`
  position: relative;
  margin: 4rem auto;

  ${({ hasQuantityToBeASlider }) =>
    hasQuantityToBeASlider &&
    css`
      width: 75rem;
    `}
`;

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
`;

const UndergraduateAndCurrentCourses = styled.div`
  display: flex;
  gap: 32px;
  margin: 0 auto;
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 8px;

  .divisor {
    width: 2px;
    border-radius: 2px;

    background-color: var(--gray-800);
  }
`;

const AllCertifications = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  position: relative;
  margin-top: 2rem;

  padding: 1.5rem;

  .all-curses {
    position: absolute;
    left: 24px;

    font-weight: 700;
    color: var(--detail);
  }
`;

const UndergraduateAndCurrentCoursesContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .section-title {
    font-weight: 700;
    color: var(--detail);
  }

  .courses {
    display: flex;
    gap: 16px;
  }
`;

const ExperienceContent = styled.div`
  display: flex;
  justify-content: center;
`;

const ExperienceCarousel = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;

  .period-content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 1rem 0;

    border-bottom: 1px solid var(--gray-800);

    .period {
      color: var(--detail);
    }

    .period-by-month {
      margin-top: 0.5rem;
    }

    .circle {
      position: absolute;
      bottom: -6px;
      width: 0.7rem;
      height: 0.7rem;
      border-radius: 0.7rem;

      border: 3px solid var(--detail);
      background-color: var(--gray-800);
    }
  }

  .name-and-description {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    padding: 1.5rem 3rem;

    .company-name {
      font-size: 1.5rem;
      font-weight: 700;
    }

    .country {
      font-weight: 700;
    }

    p {
      font-size: 0.8rem;
      text-align: center;
    }
  }
`;
