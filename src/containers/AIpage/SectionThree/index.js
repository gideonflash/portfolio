import React from "react";
import styled from "styled-components";
import ProccessHeader from "../../../components/ProjectPageComponents/ProccessHeader";

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
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </StepsContainer>
        <illustrationContainer>illustration</illustrationContainer>
      </ProcessStepsContainer>
      <ProcessText>
        <div>text</div>
      </ProcessText>
    </ContentContainer>
  </Section>
);

export default SectionThree;
