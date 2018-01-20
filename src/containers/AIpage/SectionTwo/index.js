import React from "react";
import styled from "styled-components";
import ProjectDeliverables from "../../../components/ProjectPageComponents/ProjectDeliverables";
import DesignChallenge from "../../../components/ProjectPageComponents/DesignChallenge";

const Section = styled.div`
  width: 1024px;
  height: 768px;
  @media (max-width: 420px) {
    width: 300px;
  }

  @media only screen and (device-width: 768px) {
    width: 659px;
    display: none;
  }
`;
const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 38% 1fr;
`;

const SectionTwo = () => (
  <Section>
    <ContentContainer>
      <div>
        <ProjectDeliverables />
      </div>
      <DesignChallenge />
    </ContentContainer>
  </Section>
);

export default SectionTwo;
