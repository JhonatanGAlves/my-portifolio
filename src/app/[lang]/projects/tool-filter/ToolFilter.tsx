import { useRef, useState, KeyboardEvent, useEffect } from "react";

import { styled } from "styled-components";
import { FaFilter, FaCheck, FaInfoCircle } from "react-icons/fa";

import { ProjectTypes } from "@/types/types";
import { TOOLS } from "@/utils/utils";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { Select } from "@/components/select/Select";

interface ToolFilterProps {
  projects: ProjectTypes[];
  setAlteredProjects: (alteredProjects: ProjectTypes[]) => void;
}

export function ToolFilter({ projects, setAlteredProjects }: ToolFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All tools");
  const [selectedSufix, setSelectedSufix] = useState<{
    value: string;
    label: string;
  }>(
    localStorage.getItem("filter-sufix") === "normal"
      ? {
          value: "normal",
          label: "Normal",
        }
      : {
          value: "highest-percentage",
          label: "Highest Percentage",
        }
  );

  const filterRef = useRef(null);

  const SUFIX_OPTIONS = [
    { value: "normal", label: "Normal" },
    { value: "highest-percentage", label: "Highest Percentage" },
  ];

  useOutsideClick(filterRef, () => {
    setIsOpen(false);
  });

  function orderProjectsByFilter(tool: string) {
    if (tool !== "All tools") {
      let newAlteredProjects: ProjectTypes[] = [...projects];

      if (selectedSufix.value === "highest-percentage") {
        newAlteredProjects = orderBySelectedSufix(newAlteredProjects, tool);
      } else {
        newAlteredProjects = newAlteredProjects.filter((project) =>
          Object.keys(project.tools).includes(tool)
        );
      }

      setAlteredProjects(newAlteredProjects);
    } else {
      setAlteredProjects([...projects]);
    }

    setSelectedFilter(tool);
    setIsOpen((prevState) => !prevState);
  }

  function orderBySelectedSufix(
    projects: ProjectTypes[],
    tool: string
  ): ProjectTypes[] {
    return projects
      .filter((project) => Object.keys(project.tools).includes(tool))
      .filter(
        (pjt) =>
          Object.values(pjt.tools).reduce((a, b) => {
            return Math.max(a, b);
          }, -Infinity) === pjt.tools[tool]
      );
  }

  function onKeyEscDown(e: KeyboardEvent<HTMLDivElement | HTMLUListElement>) {
    if (e.key === "Escape" || e.keyCode === 27) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    localStorage.setItem("filter-sufix", selectedSufix.value);
  }, [selectedSufix]);

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
          <Select
            className="sufix-filter"
            options={SUFIX_OPTIONS}
            value={selectedSufix?.value}
            onChange={(e) => {
              const selectedValue = SUFIX_OPTIONS.find(
                (option) => option.value === e.target.value
              );

              setSelectedSufix(selectedValue);
            }}
            icon={<FaInfoCircle size={14} />}
          />
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
  z-index: 1499;

  display: flex;
  flex-direction: column;
  width: 13.35rem;
  padding: 3rem 2rem 0.5rem;

  list-style: none;
  border: 2px solid var(--detail);
  border-radius: 8px;

  cursor: pointer;

  background-color: var(--gray-800);

  @media screen and (max-width: 420px) {
    right: 0;
  }

  li {
    &:hover,
    &.selected {
      color: var(--gray-500);
    }
  }

  .sufix-filter {
    position: absolute;
    top: 12px;
    left: 12px;
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
