import React from "react";
import styled from "styled-components";
import ProjectImg from "../../../components/ProjectPageComponents/ProjectImg";

const Section = styled.div`
  width: 1024px;
  height: 100%;
  @media (max-width: 420px) {
    width: 300px;
  }

  @media only screen and (device-width: 768px) {
    width: 659px;
    margin-top: 80px;
  }
`;

const SectionFour = () => (
  <Section>
    <div>
      <ProjectImg colour="#4A90E2" />
    </div>
  </Section>
);

export default SectionFour;
