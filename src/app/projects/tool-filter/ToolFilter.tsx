import { styled } from "styled-components";

import { FaFilter, FaCheck } from "react-icons/fa";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { ProjectTypes } from "@/types/types";
import { TOOLS } from "@/utils/utils";
import { useOutsideClick } from "@/hooks/useOutsideClick";

interface ToolFilterProps {
  projects: ProjectTypes[];
  setAlteredProjects: (alteredProjects: ProjectTypes[]) => void;
}

export function ToolFilter({ projects, setAlteredProjects }: ToolFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All tools");

  const filterRef = useRef(null);

  useOutsideClick(filterRef, () => {
    setIsOpen(false);
  });

  function orderProjectsByFilter(tool: string) {
    if (tool !== "All tools") {
      let newAlteredProjects: ProjectTypes[] = [...projects];

      newAlteredProjects = newAlteredProjects.filter((project) =>
        Object.keys(project.tools).includes(tool)
      );

      setAlteredProjects(newAlteredProjects);
    } else {
      setAlteredProjects([...projects]);
    }

    setSelectedFilter(tool);
    setIsOpen((prevState) => !prevState);
  }

  function onKeyEscDown(e: KeyboardEvent<HTMLDivElement | HTMLUListElement>) {
    console.log("e", e);
    if (e.key === "Escape" || e.keyCode === 27) {
      setIsOpen(false);
    }
  }

  useEffect(() => {}, []);

  return (
    <ToolFilterContainer>
      <ToolFilterContent
        className={`tool-filter-dropdown${isOpen ? " is-open" : ""}`}
        onClick={() => setIsOpen((prevState) => !prevState)}
        tabIndex={0}
        onKeyDown={(e) => onKeyEscDown(e)}
      >
        <FaFilter size={14} />
      </ToolFilterContent>
      {isOpen && (
        <ToolFilterDropdown
          ref={filterRef}
          tabIndex={0}
          onKeyDown={(e) => onKeyEscDown(e)}
        >
          {TOOLS.map((tool, index) => (
            <ToolFilterDropdownContainer key={index}>
              {tool === selectedFilter && <FaCheck size={12} />}

              <li
                className={`${tool} ${
                  tool === selectedFilter ? "selected" : ""
                }`}
                onClick={() => orderProjectsByFilter(tool)}
              >
                {tool}
              </li>
            </ToolFilterDropdownContainer>
          ))}
        </ToolFilterDropdown>
      )}
    </ToolFilterContainer>
  );
}

const ToolFilterContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ToolFilterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.099375rem;
  height: 2.099375rem;

  border-radius: 8px;

  cursor: pointer;

  color: var(--gray-800);
  background-color: var(--detail);

  &:hover {
    opacity: 0.6;
  }

  &:focus-visible {
    outline: none;
  }
`;

const ToolFilterDropdown = styled.ul`
  position: absolute;
  top: 37px;
  z-index: 9999;

  display: flex;
  flex-direction: column;
  width: 10.375rem;
  padding: 0.5rem 2rem;

  list-style: none;
  border: 2px solid var(--detail);
  border-radius: 8px;

  cursor: pointer;

  background-color: var(--gray-800);

  li {
    &:hover,
    &.selected {
      color: var(--gray-500);
    }
  }
`;

const ToolFilterDropdownContainer = styled.div`
  svg {
    position: absolute;
    margin-top: 3px;
    left: 14px;

    color: var(--gray-500);
  }
`;
