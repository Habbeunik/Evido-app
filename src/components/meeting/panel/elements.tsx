import React from "react";

import styled from "styled-components";
import theme from "../../../config/theme";

export const Board = styled.div`
  width: 100%;
  min-height: inherit;
  height: 100%;
  background-color: ${theme.colors.grey};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Action = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid #cccccc61;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 10px;
  transition: all 300ms ease-out;

  &:hover {
    border: 1px solid #ccc;
  }
`;

const ActionWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 20px;
`;

export function ActionButton({ Icon }: any) {
  return (
    <Action>
      <Icon />
    </Action>
  );
}

export function ActionList({ actions = [] }: any) {
  return (
    <ActionWrapper>
      {actions.map((a: Object, index: number) => (
        <ActionButton {...a} key={index} />
      ))}
    </ActionWrapper>
  );
}
