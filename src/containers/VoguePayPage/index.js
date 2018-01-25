import React from "react";
import styled from "styled-components";
import SectionTop from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import BackgroundLines from "../../components/BackgroundLines";

const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`;

const AppWrapper = styled.div`
  background-image: linear-gradient(-171deg, #36d1dc 1%, #5b86e5 100%);
  margin: 28px;
  margin-bottom: 0px;
  margin-top: 0px;
`;

/* Rectangle 17: */

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

const VoguePayPage = () => (
  <AppWrapper>
    <BackgroundLines lineColour="#33B8C8" />

    <Wrapper>
      <Section>
        <SectionTop />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </Section>
    </Wrapper>
  </AppWrapper>
);
export default VoguePayPage;
