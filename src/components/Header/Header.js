import React from "react";
import Navbar from "../Navbar";
import Title from "../Title";

import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src="logo192.png" alt="logo" />
      <Title />
      <Navbar />
    </header>
  );
}

export default Header;
