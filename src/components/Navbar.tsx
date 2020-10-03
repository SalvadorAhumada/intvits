import React from "react";
import "./styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <nav>
        <h1>inTVits</h1>
        <div className="menu">
          <ul>
            <li>
              <a href="https://www.google.com">about</a>
            </li>
            <li>
              <a href="https://www.google.com">share your intvit</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
