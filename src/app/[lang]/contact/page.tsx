"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { MediaCard } from "@/components/media-card/MediaCard";
import { socialMedia } from "@/mock/mock";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Map } from "@/components/map/Map";

export default function ContactMePage() {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
  }>({ name: "", email: "", message: "" });

  function handleOnChange(key: string, value: string) {
    setFormData((prevState) => ({ ...prevState, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    alert(
      `Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    );

    setFormData({ name: "", email: "", message: "" });
  }

  useEffect(() => {
    const mailButton = document.querySelector(".button-mail");
    const socialMediaFixed = document.querySelector(".social-media-fixed");

    if (mailButton && socialMediaFixed) {
      mailButton.setAttribute("style", "display: none");
      socialMediaFixed.setAttribute("style", "display: none");
    }

    return () => {
      mailButton?.removeAttribute("style");
      socialMediaFixed?.removeAttribute("style");
    };
  }, []);

  return (
    <ContactMeContainer>
      <TitleAndParagraph>
        <h1>
          <span>Contact</span> Me
        </h1>
        <p>
          You can send me a message through my social media or if you prefer,
          you can fill out the form below and I will contact you.
        </p>
      </TitleAndParagraph>
      <ContactMeContent>
        <SocialMedia>
          {socialMedia.map((media, index) => (
            <MediaCard
              key={index}
              href={media.href}
              mediaName={media.mediaName}
              icon={
                media.mediaName === "LinkedIn" ? (
                  <FaLinkedin size={24} />
                ) : media.mediaName === "GitHub" ? (
                  <FaGithub size={24} />
                ) : media.mediaName === "Instagram" ? (
                  <FaInstagram size={24} />
                ) : media.mediaName === "Mail" ? (
                  <AiOutlineMail size={24} />
                ) : (
                  <FaWhatsapp size={24} />
                )
              }
            />
          ))}
        </SocialMedia>
        <Form>
          <form action="submit" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              value={formData?.name}
              onChange={(e) => handleOnChange("name", e.target.value)}
              placeholder="Enter your name"
            />

            <input
              type="email"
              id="email"
              name="email"
              value={formData?.email}
              onChange={(e) => handleOnChange("email", e.target.value)}
              placeholder="contato@example.com"
            />

            <textarea
              id="message"
              name="message"
              value={formData?.message}
              onChange={(e) => handleOnChange("message", e.target.value)}
              placeholder="Write your message"
            />

            <button type="submit">Submit</button>
          </form>
        </Form>
      </ContactMeContent>
      <Map />
    </ContactMeContainer>
  );
}

const ContactMeContainer = styled.div`
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

const ContactMeContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  padding: 3.8rem 0;
`;

const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Form = styled.div`
  display: flex;
  justify-content: center;
  height: fit-content;

  form {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 32.875rem;

    input,
    textarea {
      padding: 1rem;
      outline: none;
      border-radius: 4px;
      border: 1px solid var(--gray-500);

      color: var(--gray-100);
      background-color: transparent;
    }

    textarea {
      height: 7.25rem;
    }

    button {
      width: 10rem;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      border: none;

      font-weight: 700;

      cursor: pointer;

      color: var(--bg-linear-1);
      background-color: var(--detail);

      transition: all 0.2s ease-in-out;

      &:hover {
        opacity: 0.6;
      }
    }
  }
`;
