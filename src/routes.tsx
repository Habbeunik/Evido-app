import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landing";
import RegisterPage from "./pages/register";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/reg">
          <RegisterPage />
        </Route>
      </Switch>
    </Router>
  );
}
