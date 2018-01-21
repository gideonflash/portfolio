import React from "react";
import styled from "styled-components";

const Section = styled.div`
  width: 1024px;
  height: 100%;
  margin-top: 100px;
  @media (max-width: 420px) {
    width: 300px;
  }

  @media only screen and (device-width: 768px) {
    width: 659px;
    margin-top: 80px;
  }
`;

const SectionTwo = () => (
  <Section>
    <div>
      <div>line</div>
      <div>1</div>
    </div>
  </Section>
);

export default SectionTwo;
