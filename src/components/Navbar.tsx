import React from "react";
import "./styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <nav>
        <h1>intervits</h1>
        <div className="menu">
          <ul>
            <li>
              <a href="https://www.google.com">ABOUT</a>
            </li>
            <li>
              <a href="https://www.google.com">SHARE YOUR INTERVIT</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
