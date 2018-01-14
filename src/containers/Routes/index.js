import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPageNavigation from "../../components/Header";
import MainPage from "../MainPage";
import CashkachinPage from "../CashKachingPage";

const AppRoutes = () => (
  <Router>
    <div>
      <LandingPageNavigation />

      <Route exact path="/" render={() => <MainPage colour="#60A8C8" />} />
      <Route
        exact
        path="/cashkaching"
        render={() => <CashkachinPage colour="#6CA516" />}
      />
    </div>
  </Router>
);

export default AppRoutes;
