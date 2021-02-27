import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import PeoplePage from "../../pages/PeoplePage";
import ContactsPage from "../../pages/ContactsPage";

function App() {
  return (
    <Router>
      <Route exact path={"/"} component={HomePage} />
      <Route path={"/home"} component={HomePage} />
      <Route path={"/people"} component={PeoplePage} />
      <Route path={"/contacts"} component={ContactsPage} />
    </Router>
  );
}

export default App;
