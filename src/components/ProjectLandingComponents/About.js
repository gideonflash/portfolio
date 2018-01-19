import React from "react";
import styled from "styled-components";

const AboutCompanyType = styled.h2`
  /* Project:: */
  font-family: SanFranciscoText-Bold;
  font-size: 10px;
  color: #433d3d;
  letter-spacing: 1.17px;
  font-weight: normal;
  display: inline-block;
`;
const AboutCompanyLine = styled.span`
  display: inline-block;
  background-color: #ffffff;
  width: 282px;
  min-width: 100px;
  height: 2px;
  margin-left: 10px;
  margin-bottom: 1px;
  @media (max-width: 420px) {
    width: 194px;
    height: 1px;
  }
`;

const AboutCompany = styled.p`
  font-family: SanFranciscoText-Regular;
  font-size: 12px;
  color: #443d3d;
  letter-spacing: 0;
`;

const ProjectAboutLanding = () => (
  <div>
    <div>
      <AboutCompanyType>About Company:</AboutCompanyType>
      <AboutCompanyLine />
    </div>
    <div>
      <AboutCompany>
        Subject as I can. I have been driven by the need to understand, testing
        my learning and trying as hard as I can to disprove evidence that I
        think is true as a way of discovering. Adopting the mental models
      </AboutCompany>
    </div>
  </div>
);

export default ProjectAboutLanding;
