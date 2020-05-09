import React from "react";
import styled from "styled-components";
import Panel from "./panel";
import Members from "./members";
import Messenger from "./message";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: inherit;
  position: relative;
`;

function Meeting() {
  return (
    <Wrapper>
      <Members />
      <Panel />
      <Messenger />
    </Wrapper>
  );
}

export default Meeting;
