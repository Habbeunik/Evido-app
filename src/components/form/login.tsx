import React from "react";
import { Form, Headline, Group, Anchor } from "./element";
import { TextField } from "../input";
import Button from "../button";
import { BodyText } from "../typography";

export default function LoginForm() {
  return (
    <Form>
      <Headline>Login and Setup Meeting</Headline>
      <Group>
        <TextField label="Email" type="email" />
        <TextField label="Password" type="password" />
        <Button>Login</Button>
      </Group>
      <Group style={{ margin: 0 }}>
        <BodyText>
          Don't have an account ? <Anchor to="/">Signup</Anchor>
        </BodyText>
        <BodyText>
          <Anchor to="/">Forgot Password</Anchor>
        </BodyText>
      </Group>
    </Form>
  );
}
