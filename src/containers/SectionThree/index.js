import React from "react";
import styled from "styled-components";
import LandingProjectOne from "../../components/ProjectOne";

const Section = styled.div`
  width: 1024px;
  height: 100%;
`;

const SectionThree = () => (
  <Section>
    <LandingProjectOne />
  </Section>
);

export default SectionThree;
