import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../config/theme";

export const Form = styled.form`
  width: fit-content;
  min-width: 350px;
`;

export const Headline = styled.h3`
  text-align: left;
  font-family: ${theme.font};
  font-size: 25px;
  /* color: #817f7f; */
  font-weight: 700;
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
  color: #66d0ad;
`;

//sonorous, roves sans, reef, aoki, void, balle
