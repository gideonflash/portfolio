import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;

  margin-top: 40px;
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
  @media only screen and (device-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const NameContainer = styled.div`
  display: grid;
`;

const Name = styled.div`
  /* GIDEON: */
  /* ANALYTICS INTELLIGEN: */
  font-family: Futura-Bold;
  font-size: 92px;
  color: #433d3d;
  letter-spacing: 0;
  line-height: 87px;
  @media (max-width: 420px) {
    font-size: 67px;
  }
`;
const Details = styled.p`
  /* BORN IN AFRICA: */
  font-family: Futura-CondensedMedium;
  font-size: 18px;
  color: #443d3d;
  letter-spacing: 0;
  display: inline-block;
  margin-right: 20px;
  @media (max-width: 420px) {
    font-size: 14px;
    margin-right: 12px;
  }
`;

const Namewrapper = styled.div`
  margin-top: 180px;
`;
const TechStackContainer = styled.div`
  margin-top: 100px;
`;
const TechSubHeader = styled.h2`
  /* Tech Stack & Roles:: */
  font-family: Futura-CondensedMedium;
  font-size: 22px;
  color: #443d3d;
  letter-spacing: 0;
  font-weight: normal;
  display: inline-block;
  margin-right: 34px;
`;

const ProjectHeader = () => (
  <Container>
    <NameContainer>
      <Namewrapper>
        <Name>
          ANALYTICS <br /> INTELLIGENCE
        </Name>
        <TechStackContainer>
          <TechSubHeader>TechStack & Roles:</TechSubHeader>
          <Details>FRONT-END DEVELOPMENT</Details>
          <Details>//</Details>
          <Details>USER EXPERINCE</Details>
          <Details>//</Details>
          <Details>DESIGN</Details>
        </TechStackContainer>
      </Namewrapper>
    </NameContainer>
  </Container>
);

export default ProjectHeader;