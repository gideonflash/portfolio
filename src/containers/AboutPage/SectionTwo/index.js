import React from "react";
import styled from "styled-components";

const Section = styled.div`
  width: 1024px;
  height: 100%;
  margin-top: 100px;
  @media (max-width: 420px) {
    width: 300px;
  }

  @media only screen and (device-width: 768px) {
    width: 659px;
    margin-top: 80px;
  }
`;
const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 37.5% 50%;
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;
const ProjectLine = styled.span`
  display: inline-block;
  background-color: #ffffff;
  width: 80%;
  height: 2px;
  margin-left: 10px;
  margin-bottom: 1px;
  @media (max-width: 420px) {
    height: 1px;
    display: none;
  }
  @media only screen and (device-width: 768px) {
    height: 1px;
  }
`;
const ValuePropText = styled.h2`
  font-family: Futura-Bold;
  font-size: 36px;
  color: #443d3d;
  letter-spacing: 0;
  font-weight: normal;
  margin-top: 0px;
  @media (max-width: 420px) {
    font-size: 21px;
  }
  @media only screen and (device-width: 768px) {
    font-size: 30px;
  }
`;
const ProfileText = styled.p`
  font-family: SanFranciscoText-Regular;
  font-size: 16px;
  color: #443d3d;
  letter-spacing: 0;
  @media (max-width: 420px) {
    font-size: 13px;
  }
  @media only screen and (device-width: 768px) {
    font-size: 16px;
  }
`;

const SectionTwo = () => (
  <Section>
    <AboutContainer>
      <div>
        <ProjectLine />
      </div>
      <div>
        <ValuePropText>
          I would like to say<br /> something cool <br /> so sound super smart
        </ValuePropText>
        <ProfileText>
          Subject as I can. I have been driven by the need to understand,
          testing my learning and trying as hard as I can to disprove evidence
          that I think is true as a way of discovering. Adopting the mental
          models Subject as I can. I have been driven by the need to understand,
          testing my learning and trying as hard as I can to disprove evidence
          that I think is true as a way of discovering. Adopting the mental
          models
          <br />
          <br />
          Subject as I can. I have been driven by the need to understand,
          testing my learning and trying as hard as I can to disprove evidence
          that I think is true as a way of discovering. Adopting the mental
          models Subject as I can. I have been driven by the need to understand,
          testing my learning and trying as hard as I can to disprove evidence
          that I think is true as a way of discovering. Adopting the mental
          models
        </ProfileText>
      </div>
    </AboutContainer>
  </Section>
);

export default SectionTwo;
