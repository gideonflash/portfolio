import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPageNavigation from "../../components/Header";
import MainPage from "../MainPage";
import CashkachinPage from "../CashKachingPage";
import BackgroundLines from "../../components/BackgroundLines";
import ShowTheLocationWithRouter from "./Location/location";

const AppWrapper = styled.div.attrs({
  // we can define static props

  // or we can define dynamic ones
  backgroundcolor: props => props.bkcolour || "#60a8c8"
})`
  margin: 28px;
  margin-bottom: 0px;
  margin-top: 0px;
  /* here we use the dynamically computed props */
  background-color: ${props => props.backgroundcolor};
`;

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
  <Router>
    <div>
      <LandingPageNavigation />
      <AppWrapper bkcolour="">
        <BackgroundLines />

        <Wrapper>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/cashkaching" component={CashkachinPage} />
        </Wrapper>
      </AppWrapper>
    </div>
  </Router>
);

export default AppRoutes;
