import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list-item">
          <Link to="/home">Home</Link>
        </li>
        <li className="navbar__list-item">
          <Link to="/people">People</Link>
        </li>
        <li className="navbar__list-item">
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
