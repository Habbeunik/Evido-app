import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../config/theme";

export const Form = styled.form`
  width: fit-content;
  min-width: 350px;
`;

export const Headline = styled.h3`
  font-family: ${theme.font};
  font-size: 25px;
  text-align: center;
  font-weight: 700;
  /* text-transform: uppercase; */
  width: fit-content;
  margin: auto;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 5px;
    background-color: ${theme.colors.primaryLight};
    position: absolute;
    bottom: -8px;
    left: 0;
    z-index: -1;
  }
`;

export const Group = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
  width: 100%;
  min-width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubGroup = styled(Group)`
  margin: 0;
`;

export const Line = styled.div`
  width: 120%;
  height: 1px;
  background-color: #cccccc5e;
  position: relative;
  left: -10%;
`;

export const Anchor = styled(Link)`
  color: ${theme.colors.primaryLight};
`;

//sonorous, roves sans, reef, aoki, void, balle
