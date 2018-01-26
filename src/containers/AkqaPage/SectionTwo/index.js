import React from "react";
import styled from "styled-components";
import ProjectDeliverables from "../../../components/ProjectPageComponents/ProjectDeliverables";
import DesignChallenge from "../../../components/ProjectPageComponents/DesignChallenge";

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
        <ProjectDeliverables
          item1="User research"
          item2="Wire-framing"
          item3="Prototypes"
          item4="Experiance maps"
          item5="Platforms analysis"
          item6="Pitching and storytelling"
        />
      </DeliverablecContianer>
      <DesignChallenge2
        headertextOne="Creating products and services"
        headertextTwo="for existing and potential clients."
        paragraph1="Structured, hands-on end-to-end product development. Which involves working on client briefs and investment opportunity projects. Collaborating with multiple disciplines to drive product development forward. Defining product vision and communicating work to product teams and executive leadership.  "
      />
    </ContentContainer>
  </Section>
);

export default SectionTwo;
