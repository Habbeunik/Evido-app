import React from "react";

import styled from "styled-components";
import theme from "../../../config/theme";

import { Send, X, MessageSquare } from "react-feather";

export const Layout = styled.div`
  position: absolute;
  top: 30px;
  right: -5%;
  width: 25%;
  max-width: 500px;
  min-width: 150px;
`;

export const MessageBox = styled.div`
  height: 80vh;
  min-height: 300px;
  background-color: #fff;
  border-radius: 20px;
  width: 100%;
  border: 1px solid #cccccc61;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.05);
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
`;

export const ChatMessages = styled.div`
  height: 100%;
  width: 100%;
`;

const ChartInput = styled.input`
  font-family: ${theme.font};
  outline: none;
  border: none;
  width: 100%;
  padding: 10px;
  font-size: 13px;
`;

const ChartInputBox = styled.div`
  border-top: 1px solid ${theme.colors.grey};
  padding: 10px;
  padding-right: 0px;
  display: flex;
  align-items: center;
`;

const SendIcon = styled(Send)`
  font-size: 20px;
  transform: rotate(45deg);
  position: relative;
  right: 10px;
  top: 1px;
`;

export function ChatInput() {
  return (
    <ChartInputBox>
      <ChartInput placeholder="Type ..." />
      <SendIcon />
    </ChartInputBox>
  );
}

export const ClearButton = styled(X)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const TriggerBox = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  left: calc(50% - 30px);
  background: #fff;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  border: 1px solid #cccccc61;
  cursor: pointer;
`;

interface ITriggerProps {
  state: "open" | "close";
  onClick: () => void;
}

export function Trigger({ state, onClick }: ITriggerProps) {
  const shouldOpen = state !== "open";
  const Icon = shouldOpen ? MessageSquare : X;

  return (
    <TriggerBox onClick={onClick}>
      <Icon />
    </TriggerBox>
  );
}
