import React from "react";
import styled from "styled-components";
import SectionTop from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`;

const MainPage = () => (
  <Section>
    <SectionTop />
    <SectionTwo />
    <SectionThree />
  </Section>
);
export default MainPage;
