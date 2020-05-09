import React from "react";
import { Wrapper, MemberAvartar } from "./elements";

function Members() {
  return (
    <Wrapper>
      <MemberAvartar isActive />
      <MemberAvartar />
      <MemberAvartar />
    </Wrapper>
  );
}

export default Members;
