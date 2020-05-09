import styled from "styled-components";
import theme from "../../../config/theme";

export const MemberAvartar: any = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: ${(props: any) =>
    props.isActive
      ? `2px solid ${theme.colors.primaryLight}`
      : "1px solid #cccccc61"};
  margin-bottom: 35px;
  background-color: ${theme.colors.grey};
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.05);
`;

export const Wrapper = styled.div`
  width: fit-content;
  position: absolute;
  left: -53px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
