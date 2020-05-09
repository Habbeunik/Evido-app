import React from "react";
import { Container, Logo, Wrapper, Nav, NavItem } from "./element";
import { BodyText } from "../typography";
import Button from "../button";

function Header() {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <Nav>
          <NavItem to="/join">
            <BodyText>Join Meeting</BodyText>
          </NavItem>
          <NavItem to="/">
            <BodyText>Login</BodyText>
          </NavItem>
          <NavItem to="/reg">
            <Button>Register</Button>
          </NavItem>
        </Nav>
      </Wrapper>
    </Container>
  );
}

export default Header;
