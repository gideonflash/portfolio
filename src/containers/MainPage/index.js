import React, { Component } from "react";
import styled from "styled-components";
import LandingPageNavigation from "../../components/Header";
import SectionTop from "../SectionOne";
import SectionTwo from "../SectionTwo";
import SectionThree from "../SectionThree";
import SectionFour from "../SectionFour";
import SectionFive from "../SectionFive";
import SectionSix from "../SectionSix";
import Footer from "../Footer";

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
const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`;

class MainPage extends Component {
  render() {
    return (
      <Wrapper>
        <LandingPageNavigation />

        <Section>
          <SectionTop />
          <SectionTwo />
          <SectionThree />
        </Section>
      </Wrapper>
    );
  }
}

export default MainPage;
