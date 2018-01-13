import React from "react";
import styled from "styled-components";
import MainPage from "../MainPage";
import Footer from "../Footer";
import BackgroundLines from "../../components/BackgroundLines";

const AppWrapper = styled.div`
  margin: 28px;
  background-color: #60a8c8;
  margin-bottom: 0px;
`;

const Main = () => (
  <div>
    <AppWrapper>
      <BackgroundLines />
      <MainPage />
    </AppWrapper>
    <Footer />
  </div>
);

export default Main;
