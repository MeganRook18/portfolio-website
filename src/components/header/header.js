import { React } from "react";

import "./header.scss";

function Header(props) {
  return (
    <div
      className={props.menuOpen ? "burger white" : "burger black"}
      onClick={props.menuClick}
    >
      <div className="burger__patty"></div>
      <div className="burger__patty"></div>
      <div className="burger__patty"></div>
    </div>
  );
}

export default Header;
