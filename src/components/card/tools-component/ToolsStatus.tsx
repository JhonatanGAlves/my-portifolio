import { styled } from "styled-components";

import { ToolsType } from "@/types/types";
import { handleToolStatus } from "@/utils/utils";

interface ToolsProps {
  tools: ToolsType;
}

export default function ToolsStatus({ tools }: ToolsProps) {
  const allTools = Object.keys(tools);

  return (
    <ToolsContainer>
      <span>Tools</span>
      <PercentageTool>
        {allTools.map((tool, index) => {
          const toolStatus = handleToolStatus(allTools, tools, tool);

          return <ProgressBar key={index} toolStatus={toolStatus} />;
        })}
      </PercentageTool>
      <SubtitlesContainer>
        {allTools.map((tool, index) => {
          const toolStatus = handleToolStatus(allTools, tools, tool);

          return (
            <>
              <SubtitlesContent key={index}>
                <Cicle color={toolStatus.color} />
                <span className="tool-subtitle">{toolStatus.tool}</span>
                <span className="percentage-subtitle">
                  {toolStatus.percentage}%
                </span>
              </SubtitlesContent>
            </>
          );
        })}
      </SubtitlesContainer>
    </ToolsContainer>
  );
}

const ToolsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  span {
    margin-bottom: 8px;
  }
`;

const PercentageTool = styled.div`
  display: flex;
  gap: 2px;

  width: 100%;
  height: fit-content;

  overflow: hidden;

  border-radius: 8px;
  background-color: transparent;
`;

const ProgressBar = styled.div<{
  toolStatus: { tool: string; color: string; percentage: string };
}>`
  width: ${({ toolStatus }) => toolStatus.percentage}%;
  height: 8px;

  background-color: ${({ toolStatus }) => toolStatus.color};
`;

const SubtitlesContainer = styled.div`
  margin-top: 4px;
  display: grid;
  grid-template-columns: auto auto;
  height: 2.39875rem;
`;

const SubtitlesContent = styled.div`
  display: flex;
  align-items: center;

  .tool-subtitle,
  .percentage-subtitle {
    font-size: 0.75rem;
    line-height: 1.2rem;

    margin-bottom: 0;
  }

  .percentage-subtitle {
    margin-left: 4px;
    color: var(--gray-500);
  }
`;

const Cicle = styled.div<{ color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;

  margin-right: 8px;

  background-color: ${({ color }) => color};
`;
