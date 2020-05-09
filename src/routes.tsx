import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landing";
import RegisterPage from "./pages/register";
import JoinPage from "./pages/join";
import MeetingPage from "./pages/meeting";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <Route path="/reg">
        <RegisterPage />
      </Route>
      <Route path="/join">
        <JoinPage />
      </Route>
      <Route path="/meeting">
        <MeetingPage />
      </Route>
    </Switch>
  );
}
