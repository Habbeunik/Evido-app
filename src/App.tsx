import React from "react";
import Routes from "./routes";
import Header from "./components/header";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
