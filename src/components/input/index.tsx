import React from "react";
import { Wrapper, Label, Input } from "./elements";

interface ITextFieldProps {
  label: string;
  type?: string;
}

export function TextField({ label, ...inputProps }: ITextFieldProps) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input {...inputProps} />
    </Wrapper>
  );
}
