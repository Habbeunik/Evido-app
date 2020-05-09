import React from "react";
import { Page, Center } from "../components/layout";
import RegisterForm from "../components/form/register";

function RegisterPage() {
  return (
    <Page>
      <Center>
        <RegisterForm />
      </Center>
    </Page>
  );
}

export default RegisterPage;
