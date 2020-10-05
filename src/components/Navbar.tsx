import React from "react";
import "./styles/Navbar.css";
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <nav>
        <h1>inTVits</h1>
        <div className="menu">
          <ul>
            <li>
              <a href="https://github.com/SalvadorAhumada/intvits" target="_blank" rel="noopener noreferrer">
                <Tooltip
                  title="We're always looking for new additions in the Intvits repository!"
                  position="bottom"
                  trigger="mouseenter"
                  arrow={true}
                  inertia={true}
                  >
                    <p>
                      SHARE YOUR INTVIT
                    </p>
                </Tooltip>
              </a>
            </li>
            <li>
            </li>
          </ul>
          <ul>
            <li>
                <Tooltip
                  title='"The most important skill to be a programmer is learning how to pass job interviews" - anonymous'
                  position="bottom"
                  trigger="mouseenter"
                  arrow={true}
                  inertia={true}
                  >
                  <p>
                    ABOUT
                  </p>
                </Tooltip>
            </li>
            <li>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
