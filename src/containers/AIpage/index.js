import React from "react";
import styled from "styled-components";
import SectionTop from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import BackgroundLines from "../../components/BackgroundLines";

const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`;

const AppWrapper = styled.div.attrs({
  // we can define static props

  // or we can define dynamic ones
  backgroundcolor: props => props.bkcolour || "#60a8c8"
})`
  margin: 28px;
  margin-bottom: 0px;
  margin-top: 0px;
  @media (max-width: 420px) {
    margin: 16px;
  }
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

const AIPage = props => (
  <AppWrapper bkcolour={props.colour}>
    <BackgroundLines lineColour="#F48859" />

    <Wrapper>
      <Section>
        <SectionTop />
        <SectionTwo />
        <SectionThree />
      </Section>
    </Wrapper>
  </AppWrapper>
);
export default AIPage;
