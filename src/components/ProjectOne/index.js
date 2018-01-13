import React from "react";
import styled from "styled-components";
import ProjectTypeLanding from "../ProjectLandingComponents/Project";
import RolesLandingList from "../ProjectLandingComponents/Roles";
import ProjectAboutLanding from "../ProjectLandingComponents/About";
import ProjectTitleLanding from "../ProjectLandingComponents/Tile";
import ProjectCaseStudyLinkLanding from "../ProjectLandingComponents/CaseStudy";

const SectionWrapper = styled.div`
  display: grid;
`;
const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 37.5% 38%;
`;
const SubTle = styled.h2`
  font-family: GochiHand-Regular;
  font-size: 20px;
  color: #443d3d;
  letter-spacing: 0;
  margin: 0;
  text-align: center;
`;
const Header = styled.h1`
  /* Projects: */
  font-family: Futura-Bold;
  font-size: 35px;
  color: #443d3d;
  letter-spacing: 0;
  margin: 0;
  margin-top: 5px;
  text-align: center;
`;

const LandingProjectOne = () => (
  <SectionWrapper>
    <SubTle>the good stuff</SubTle>
    <Header>Projects</Header>
    <ProjectContainer>
      <ProjectTypeLanding />
      <RolesLandingList />
      <ProjectAboutLanding />
    </ProjectContainer>
    <ProjectTitleLanding />
    <ProjectCaseStudyLinkLanding />
  </SectionWrapper>
);

export default LandingProjectOne;
