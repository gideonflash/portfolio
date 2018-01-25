import React from "react";
import styled from "styled-components";
import ProccessHeader from "../../../components/ProjectPageComponents/ProccessHeader";
import Step from "../../../components/ProjectPageComponents/Step";
import ProjectText from "../../../components/ProjectPageComponents/ProjectText";
import Illustration from "../../../components/ProjectPageComponents/IllustrationSteps";

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
  margin-top: 260px;
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
    margin-top: 90px;
  }
  @media only screen and (device-width: 768px) {
    margin-top: 80px;
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
    margin-top: 130px;
  }
`;
const ProccessHeaderContainer = styled.div``;
const StepsContainer = styled.div`
  display: grid;
  margin-top: 80px;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
  @media only screen and (device-width: 768px) {
    margin-top: 70px;
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
            <Step
              colour="#F48859"
              bkNumber="1"
              number="1"
              text="Product Design"
            />
          </div>
          <div>
            <Step colour="#F48859" bkNumber="2" number="1" text="UI Design" />
          </div>
          <div>
            <Step
              colour="#F48859"
              bkNumber="3"
              number="3"
              text="UI Development"
            />
          </div>
        </StepsContainer>
        <illustrationContainer>
          <Illustration />
        </illustrationContainer>
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
