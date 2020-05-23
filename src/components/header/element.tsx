import React from "react";

import styled from "styled-components";
import theme from "../../config/theme";
import { Link } from "react-router-dom";
import { Container as ContainerLayout } from "../layout/container";

export const Container = styled(ContainerLayout)`
  padding: 20px 10%;
  max-width: 1300px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled(Wrapper)`
  justify-content: flex-end;
`;

export const NavItem: any = styled(Link)`
  text-decoration: none;
  margin-left: 50px;
`;

const LogoTag = styled.div`
  font-size: 30px;
  font-family: ${theme.font};
`;

export function Logo() {
  return <LogoTag>E</LogoTag>;
}
