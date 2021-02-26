import React from "react";
import Header from "../../components/Header";

import "./HomePage.scss";

function HomePage() {
  return (
    <div>
      <Header />
      <h1 className="welcome">Welcome to my React App!</h1>
    </div>
  );
}

export default HomePage;
