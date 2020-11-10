import { React, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

// components
import Nav from "./components/nav/nav";
import Header from "./components/header/header";

// pages
import Home from "./pages/home/home";
import Lab from "./pages/lab/lab";
import About from "./pages/about/about";
import Work from "./pages/work/work";
import Contact from "./pages/contact/contact";

function App() {
  const [menuOpen, toggleMenu] = useState(false);
  const handleMenuClick = () => toggleMenu(!menuOpen);

  return (
    <div className="app">
      <Header menuClick={handleMenuClick} menuOpen={menuOpen}></Header>
      <Router>
        <Nav toggleMenu={menuOpen} closeMenu={handleMenuClick}></Nav>
        <Switch>
          <Router path="/" exact>
            <Home></Home>
          </Router>
          <Route path="/about" component={About} />
          <Route path="/lab" component={Lab} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

/**
 *  TODO
 *  Menu:
 *  - add load in animation
 *  React router https://www.youtube.com/watch?v=Law7wfdg_ls&t=82s 14.41
 *  https://www.youtube.com/watch?v=I2UBjN5ER4s&t=2784s
 */
