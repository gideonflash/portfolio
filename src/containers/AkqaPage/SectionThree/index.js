import React from "react";
import styled from "styled-components";
import AkqaProjectDescription from "../../../components/ProjectPageComponents/AkqaProjectDescription";
import AkqaProjectImg from "../../../components/ProjectPageComponents/AkqaProjectImg";

const Section = styled.div`
  width: 1024px;
  height: 100%;
  @media (max-width: 420px) {
    width: 300px;
    height: 100%;
    margin-bottom: 80px;
  }

  @media only screen and (device-width: 768px) {
    width: 659px;
    height: 100%;
  }
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 37.5% 1fr;
  margin-bottom: 180px;
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;
const ProjectTextContainer = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  z-index: 2;
`;
const ProjectImgContainer = styled.div`
  grid-row-start: 1;
  grid-column-start: 2;
  z-index: 2;
  justify-self: end;
  align-self: center;
  @media (max-width: 420px) {
    grid-row-start: 2;
    grid-column-start: 1;
    z-index: 1;
    justify-self: center;
  }
`;
const BkContainer = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: span 3;
  z-index: 1;
`;
const BkText = styled.p`
  /* Projects: */
  opacity: 0.24;
  font-family: Futura-Bold;
  font-size: 117px;
  color: #d8d9cf;
  letter-spacing: 0;
  @media (max-width: 420px) {
    font-size: 67px;
  }
`;
const Text = styled.p`
  /* Interface design: */
  font-family: SanFranciscoText-Bold;
  font-size: 10px;
  color: #433d3d;
  letter-spacing: 1.17px;
  justify-self: end;
  margin-top: 200px;
  margin-bottom: 180px;
  @media (max-width: 420px) {
    margin-top: 40px;
    margin-bottom: 30px;
  }

  @media only screen and (device-width: 768px) {
    margin-top: 180px;
    margin-bottom: 100px;
  }
`;

const SectionThree = () => (
  <Section>
    <Text>Project i worked on:</Text>
    <Container>
      <ProjectTextContainer>
        <AkqaProjectDescription />
      </ProjectTextContainer>
      <ProjectImgContainer>
        <AkqaProjectImg />
      </ProjectImgContainer>
      <BkContainer>
        <BkText>Project</BkText>
      </BkContainer>
    </Container>
    <Container>
      <ProjectTextContainer>
        <AkqaProjectDescription />
      </ProjectTextContainer>
      <ProjectImgContainer>
        <AkqaProjectImg />
      </ProjectImgContainer>
      <BkContainer>
        <BkText>Project</BkText>
      </BkContainer>
    </Container>
  </Section>
);

export default SectionThree;
