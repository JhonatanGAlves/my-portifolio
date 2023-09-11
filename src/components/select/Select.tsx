import { ReactNode, SelectHTMLAttributes } from "react";

import { styled } from "styled-components";

import { SelectOptions } from "@/types/types";
import Tooltip from "@mui/material/Tooltip";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOptions[];
  icon?: ReactNode;
}

export function Select({ options, icon, ...props }: SelectProps) {
  return (
    <StyledIconAndSelect className={props.className}>
      {icon && (
        <Tooltip
          title='The tool options below follow what was defined in the select beside. For example, if "Highest Percentage" is set, when selecting "TypeScript", the list will be filtered only by projects that contain TypeScript as the highest percentage.'
          placement="top"
          arrow
        >
          <Icon>{icon}</Icon>
        </Tooltip>
      )}
      <SelectElement value={props.value} onChange={props.onChange}>
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </SelectElement>
    </StyledIconAndSelect>
  );
}

const StyledIconAndSelect = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;

  border-radius: 3px;
`;

const Icon = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.4375rem;
  padding-right: 4px;

  border-right: 1px solid var(--detail);

  svg {
    color: var(--detail);
  }
`;

const SelectElement = styled.select`
  font-family: "Source Code Pro", monospace;
  font-size: 0.75rem;

  margin-left: 2px;

  border: none;

  color: var(--gray-100);
  background-color: transparent;

  &:focus {
    outline: none;
  }

  option {
    background-color: var(--bg-linear-1);
  }
`;
