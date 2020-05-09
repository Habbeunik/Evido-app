import React from "react";
import { Form, Headline, Group, SubGroup, Anchor, Line } from "./element";
import { TextField } from "../input";
import Button from "../button";
import { BodyText } from "../typography";

export default function LoginForm() {
  return (
    <Form>
      <Headline>Login</Headline>
      <Group>
        <TextField label="Email" type="email" />
        <TextField label="Password" type="password" />
        <Button>Login</Button>
      </Group>
      <Line />
      <SubGroup>
        <BodyText>
          Don't have an account ? <Anchor to="/reg">Signup</Anchor>
        </BodyText>
        <BodyText>
          <Anchor to="/">Forgot Password</Anchor>
        </BodyText>
      </SubGroup>
    </Form>
  );
}
