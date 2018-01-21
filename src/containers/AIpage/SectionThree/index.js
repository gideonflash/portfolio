import React from "react";
import styled from "styled-components";
import ProccessHeader from "../../../components/ProjectPageComponents/ProccessHeader";
import Step from "../../../components/ProjectPageComponents/Step";
import ProjectText from "../../../components/ProjectPageComponents/ProjectText";

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
  grid-template-columns: 62.5% 1fr;
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
  @media only screen and (device-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ProcessStepsContainer = styled.div`
  @media only screen and (device-width: 768px) {
    grid-row-start: 1;
  }
`;
const ProcessText = styled.div`
  @media only screen and (device-width: 768px) {
    grid-row-start: 2;
  }
`;
const ProccessHeaderContainer = styled.div``;
const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;
const illustrationContainer = styled.div``;
const SectionThree = () => (
  <Section>
    <ContentContainer>
      <ProcessStepsContainer>
        <ProccessHeaderContainer>
          <ProccessHeader />
        </ProccessHeaderContainer>
        <StepsContainer>
          <div>
            <Step />
          </div>
          <div>
            <Step />
          </div>
          <div>
            <Step />
          </div>
        </StepsContainer>
        <illustrationContainer>illustration</illustrationContainer>
      </ProcessStepsContainer>
      <ProcessText>
        <div>
          <ProjectText />
        </div>
      </ProcessText>
    </ContentContainer>
  </Section>
);

export default SectionThree;
