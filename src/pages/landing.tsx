import React from "react";
import LoginForm from "../components/form/login";
import { Center, Page } from "../components/layout";

function LandingPage() {
  return (
    <Page>
      <Center>
        <LoginForm />
      </Center>
    </Page>
  );
}

export default LandingPage;
