import { React } from "react";
import { Link } from "react-router-dom";

import SocialIcons from "../social-icons/social-icons";
import "./nav.scss";

function Nav(props) {
  return (
    <nav className={props.toggleMenu ? "nav" : "nav-closed"}>
      <div className="nav__header">
        <Link to="/" className="header-link" onClick={props.closeMenu}>
          <span>Megan Rook</span>
        </Link>
      </div>
      <div className="nav__body">
        <ul className="nav__links">
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={props.closeMenu}>
              <span className="big-text link-a">about </span>
              <span className="under-text link-a">explore &#8594;</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/work" className="nav-links" onClick={props.closeMenu}>
              <span className="big-text link-b">work experience </span>
              <span className="under-text link-b">explore &#8594;</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/lab" className="nav-links" onClick={props.closeMenu}>
              <span className="big-text link-c"> lab archive</span>
              <span className="under-text link-c">explore &#8594;</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={props.closeMenu}>
              <span className="big-text link-d"> contact</span>
              <span className="under-text link-d">explore &#8594;</span>
            </Link>
          </li>
        </ul>
        <SocialIcons />
      </div>
    </nav>
  );
}

export default Nav;
