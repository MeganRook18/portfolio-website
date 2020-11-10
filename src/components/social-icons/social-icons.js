import React from "react";
import { Tooltip } from "@material-ui/core";

import "./social-icons.scss";

function SocialIcons() {
  return (
    <div className="social-icons">
      <Tooltip title="View some of my code" arrow>
        <a
          href="https://github.com/MeganRook18"
          rel="noreferrer"
          target="_blank"
        >
          <img alt="github icon" src="/images/icons/github.png" />
        </a>
      </Tooltip>
      <Tooltip title="Connect on LinkedIn" arrow>
        <a
          href="https://linkedin.com/in/meganrook"
          rel="noreferrer"
          target="_blank"
        >
          <img alt="LinkedIn icon" src="/images/icons/linkedin.png" />
        </a>
      </Tooltip>
      <Tooltip title="Checkout my Medium articles" arrow>
        <a
          href="https://medium.com/@meganrook.blackpepper"
          rel="noreferrer"
          target="_blank"
        >
          <img alt="github icon" src="/images/icons/medium.svg" />
        </a>
      </Tooltip>
    </div>
  );
}

export default SocialIcons;
