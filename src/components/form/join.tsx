import React from "react";
import { Form, Headline, Group } from "./element";
import { TextField } from "../input";
import Button from "../button";

export default function JoinForm() {
  return (
    <Form>
      <Headline>Join Meeting</Headline>
      <Group>
        <TextField label="Meeting ID" type="text" />
        <TextField label="Display Name" type="text" />
        <Button>Join</Button>
      </Group>
    </Form>
  );
}
