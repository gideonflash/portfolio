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
          item1="Service deck design and copy"
          item2="Service interface design"
          item3="Service Front-end development"
        />
      </DeliverablecContianer>
      <DesignChallenge2
        headertextOne="Unify the product experience"
        headertextTwo="and make it easy to use."
        paragraph1="AI has spent the past six years developing a machine learning powered platform to usher in a new age of the autonomous employee. A simplified view of the problem that they are trying to solve is the understanding of data and being able to draw out actionable insights from this data.  Using conversational interface users have the ability to surface any answers to questions they might have relating to their organisations' data. "
        paragraph2="I was brought in to create constancy among all product UI elements and take part in the front-end implementation for the new platform rebuild. This process has revolved around collaborating closely with product owners, data scientists and software engineers to ensure we create an easy to use the product. The project is currently in progress launch date soon."
      />
    </ContentContainer>
  </Section>
);

export default SectionTwo;
