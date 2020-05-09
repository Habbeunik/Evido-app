import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landing";
import RegisterPage from "./pages/register";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <Route path="/reg">
        <RegisterPage />
      </Route>
    </Switch>
  );
}
