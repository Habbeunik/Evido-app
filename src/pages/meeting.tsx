import React from "react";
import Meeting from "../components/meeting";
import { Container, Page } from "../components/layout";

function MeetingPage() {
  return (
    <Container>
      <Page>
        <Meeting />
      </Page>
    </Container>
  );
}

export default MeetingPage;
