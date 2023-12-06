"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

import styled from "styled-components";

import useFlag from "@/hooks/useFlag";
import Link from "next/link";
import { isSelectedLanguage } from "@/utils/utils";
import { i18n } from "../../../../i18n.config";

interface SwitchLanguageProps {
  theme: "dark" | "light";
  width?: number;
  imagePosition?: "left" | "right";
}

export default function SwitchLanguage({
  theme,
  width = 40,
  imagePosition = "left",
}: SwitchLanguageProps) {
  const pathName = usePathname();
  const { flag } = useFlag(pathName, theme);

  function redirectPathName(locale: string) {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  }

  return (
    flag && (
      <Languages>
        {imagePosition === "left" && (
          <Image
            src={flag}
            alt="Image flag from language mode"
            width={width}
            height={width}
          />
        )}
        <div className="labels">
          {i18n.locales.map((locale) => (
            <Link
              key={locale}
              href={redirectPathName(locale)}
              className="label"
              style={
                isSelectedLanguage(locale, pathName)
                  ? { color: "var(--detail)" }
                  : { color: "var(--gray-100)" }
              }
            >
              {locale.split("_")[0]}
            </Link>
          ))}
        </div>
        {imagePosition === "right" && (
          <Image
            src={flag}
            alt="Image flag from language mode"
            width={width}
            height={width}
          />
        )}
      </Languages>
    )
  );
}

const Languages = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .labels {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 100%;

    & > *:nth-child(2) {
      padding-left: 8px;
      border-left: 1px solid var(--gray-100);
    }

    .label {
      text-transform: uppercase;
      text-decoration: none;
    }
  }

  @media screen and (max-width: 420px) {
    margin-right: 6px;
  }
`;
