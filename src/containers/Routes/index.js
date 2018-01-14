import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPageNavigation from "../../components/Header";
import MainPage from "../MainPage";
import CashkachinPage from "../CashKachingPage";
import VoguePayPage from "../VoguePayPage";
import AkqaPage from "../AkqaPage";
import AIpage from "../AIpage";
import AshleenLesterPage from "../AshleenLesterPage";
import GeneralAssemblyPage from "../GeneralAssemblyPage";
import Aboutpage from "../AboutPage";

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
      <Route exact path="/voguepay" render={() => <VoguePayPage />} />
      <Route exact path="/akqa" render={() => <AkqaPage colour="#EDEEE8" />} />
      <Route exact path="/ai" render={() => <AIpage colour="#F79F79" />} />
      <Route
        exact
        path="/ashleenlester"
        render={() => <AshleenLesterPage colour="red" />}
      />
      <Route
        exact
        path="/generalassembly"
        render={() => <GeneralAssemblyPage colour="#D21B3F" />}
      />
      <Route
        exact
        path="/about"
        render={() => <Aboutpage colour="#60A8C8" />}
      />
    </div>
  </Router>
);

export default AppRoutes;
