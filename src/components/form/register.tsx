import React from "react";
import { Form, Headline, Group, Anchor } from "./element";
import { TextField } from "../input";
import Button from "../button";
import { BodyText } from "../typography";

export default function RegisterForm() {
  return (
    <Form>
      <Headline>Create an Account</Headline>
      <Group>
        <TextField label="Username" type="text" />
        <TextField label="Email" type="email" />
        <TextField label="Password" type="password" />
        <Button>Register</Button>
      </Group>
      <Group style={{ margin: 0 }}>
        <BodyText>
          Already have an account ? <Anchor to="/">Signup</Anchor>
        </BodyText>
        <BodyText>
          <Anchor to="/">Forgot Password</Anchor>
        </BodyText>
      </Group>
    </Form>
  );
}
