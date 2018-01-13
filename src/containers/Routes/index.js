import React from "react";
import styled from "styled-components";
import LandingPageNavigation from "../../components/Header";
import MainPage from "../MainPage";

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
    <MainPage />
  </Wrapper>
);
export default AppRoutes;
