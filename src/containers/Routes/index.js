import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPageNavigation from "../../components/Header";
import MainPage from "../MainPage";
import CashkachinPage from "../CashKachingPage";

const AppRoutes = () => (
  <Router>
    <div>
      <LandingPageNavigation />

      <Route exact path="/" component={MainPage} />
      <Route exact path="/cashkaching" component={CashkachinPage} />
    </div>
  </Router>
);

export default AppRoutes;
