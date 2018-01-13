import React from "react";
import styled from "styled-components";
import LandingProjects from "../../components/Project";

const Section = styled.div`
  width: 1024px;
  height: 100%;
`;

const SectionThree = () => (
  <Section>
    <LandingProjects />
  </Section>
);

export default SectionThree;
