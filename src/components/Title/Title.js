import React from "react";

import "./Title.scss";

function Title() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay = "";

  if (hours < 6) {
    timeOfDay = "night";
  } else if (hours >= 6 && hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "evening";
  }

  return <h1 className="title__main">{`Good ${timeOfDay}`}</h1>;
}

export default Title;
