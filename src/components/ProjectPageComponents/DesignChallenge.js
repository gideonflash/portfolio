import React from "react";
import styled from "styled-components";

const ValuePropText = styled.h2`
  font-family: Futura-Bold;
  font-size: 36px;
  color: #443d3d;
  letter-spacing: 0;
  font-weight: normal;
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
const ProjectType = styled.h1`
  /* Project:: */
  font-family: SanFranciscoText-Bold;
  font-size: 10px;
  color: #433d3d;
  letter-spacing: 1.17px;
  font-weight: normal;
  display: inline-block;
`;
const ProjectLine = styled.span`
  display: inline-block;
  background-color: #ffffff;
  min-width: 30px;
  height: 2px;
  margin-left: 10px;
  margin-bottom: 1px;
  @media (max-width: 420px) {
    height: 1px;
  }
  @media only screen and (device-width: 768px) {
    height: 1px;
  }
`;

const Headercontianer = styled.div`
  display: grid;
  grid-template-columns: 17% 1fr;
  align-items: center;
`;

const DesignChallenge = () => (
  <div>
    <Headercontianer>
      <ProjectType>Design challenge:</ProjectType>
      <ProjectLine />
    </Headercontianer>
    <ValuePropText>
      I would like to say<br /> something cool <br /> so sound super smart
    </ValuePropText>
    <ProfileText>
      Subject as I can. I have been driven by the need to understand, testing my
      learning and trying as hard as I can to disprove evidence that I think is
      true as a way of discovering. Adopting the mental models Subject as I can.
      I have been driven by the need to understand, testing my learning and
      trying as hard as I can to disprove evidence that I think is true as a way
      of discovering. Adopting the mental models
    </ProfileText>
  </div>
);

export default DesignChallenge;
