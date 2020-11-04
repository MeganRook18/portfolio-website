import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import Nav from "./components/nav/nav";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact />
        </Switch>
        <Nav />
      </Router>
    </div>
  );
}

export default App;
