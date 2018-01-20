import React from "react";
import styled from "styled-components";
import WhatIDoSection from "../../../components/WhatIDo";
import Title from "../../../components/LandingMainText";
import NameAndSkills from "../../../components/NameHeaderSection";

const SectionOne = styled.div`
  width: 1024px;
  height: 100%;
  @media (max-width: 420px) {
    width: 300px;
  }
  @media (max-width: 768px) {
    width: 659px;
  }
`;

const SectionTop = () => (
  <SectionOne>
    <WhatIDoSection />
    <Title />
    <NameAndSkills />
  </SectionOne>
);

export default SectionTop;
