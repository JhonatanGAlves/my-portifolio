"use client";
import { workExperiences } from "@/mock/mock";
import moment from "moment";
import styled from "styled-components";

export default function EducationPage() {
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

  return (
    <EducationContainer>
      <TitleAndParagraph>
        <h1>
          <span>Education</span> & Experience
        </h1>
        <p>
          You can check below all my education and experience that I consider
          relevant to my career as a software developer.
        </p>
      </TitleAndParagraph>

      <EducationAndExperienceContent>
        <ExperienceContainer>
          {workExperiences.map((experience, index) => {
            return (
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
            );
          })}
        </ExperienceContainer>
      </EducationAndExperienceContent>
    </EducationContainer>
  );
}

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 4rem 0;
  height: fit-content;
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

const EducationAndExperienceContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 4rem 0;
  height: fit-content;
`;

const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const ExperienceCarousel = styled.div`
  display: flex;
  flex-direction: column;

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
