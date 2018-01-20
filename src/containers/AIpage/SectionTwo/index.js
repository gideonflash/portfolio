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
    margin-top: 80px;
  }
`;
const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 38% 1fr;
  @media only screen and (device-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 420px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
  }
`;
const DeliverablecContianer = styled.div`
  @media (max-width: 420px) {
    grid-row-start: 2;
    margin-top: 24px;
  }
  @media only screen and (device-width: 768px) {
    grid-row-start: 2;
  }
`;
const DesignChallenge2 = styled(DesignChallenge)``;

const SectionTwo = () => (
  <Section>
    <ContentContainer>
      <DeliverablecContianer>
        <ProjectDeliverables />
      </DeliverablecContianer>
      <DesignChallenge2 />
    </ContentContainer>
  </Section>
);

export default SectionTwo;
