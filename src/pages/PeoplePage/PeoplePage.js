import React from "react";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import People from "../../components/People";

import "./PeoplePage.scss";

function PeoplePage() {
  return (
    <div>
      <Header />
      <PageTitle title="Our employees" />
      <div className="people">
        <People />
      </div>
    </div>
  );
}

export default PeoplePage;
