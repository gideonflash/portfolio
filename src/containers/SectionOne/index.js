import React, { Component } from "react";
import styled from "styled-components";
import WhatIDoSection from "../../components/WhatIDo";
import Title from "../../components/LandingMainText";
import NameAndSkills from "../../components/NameHeaderSection";

const SectionOne = styled.div`
  width: 1000px;
`;

class SectionTop extends Component {
  render() {
    return (
      <SectionOne>
        <WhatIDoSection />
        <Title />
        <NameAndSkills />
      </SectionOne>
    );
  }
}

export default SectionTop;
