import React, { Component } from "react";
import styled from "styled-components";
import WhatIDoSection from "../../components/WhatIDo";
import Title from "../../components/LandingMainText";

const SectionOne = styled.div`
  width: 1000px;
`;

class SectionTop extends Component {
  render() {
    return (
      <SectionOne>
        <WhatIDoSection />
        <Title />
      </SectionOne>
    );
  }
}

export default SectionTop;
