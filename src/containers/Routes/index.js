import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPageNavigation from "../../components/Header";
import MainPage from "../MainPage";
import CashkachinPage from "../CashKachingPage";

const Wrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  display: block;
  position: relative;
  z-index: 1;
  padding: 0;
  overflow: hidden;
`;

const AppRoutes = () => (
  <Wrapper>
    <LandingPageNavigation />
    <Router>
      <div>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/cashkaching" component={CashkachinPage} />
      </div>
    </Router>
  </Wrapper>
);
export default AppRoutes;
