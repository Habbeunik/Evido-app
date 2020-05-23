import React from "react";
import { Container, Logo, Wrapper, Nav, NavItem } from "./element";
import { BodyText } from "../typography";
import Button from "../button";

const navs = [
  {
    path: "/join",
    anchor: "Join Meeting",
  },
  {
    path: "/",
    anchor: "Login",
  },
  {
    path: "/reg",
    anchor: "Register",
  },
];

function Header() {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <Nav>
          {navs.map((n) => (
            <NavItem key={n.path} to={n.path}>
              <BodyText>{n.anchor}</BodyText>
            </NavItem>
          ))}
        </Nav>
      </Wrapper>
    </Container>
  );
}

export default Header;
