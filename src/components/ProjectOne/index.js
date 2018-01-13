import React from "react";
import styled from "styled-components";
import ProjectTypeLanding from "../ProjectLandingComponents/Project";
import RolesLandingList from "../ProjectLandingComponents/Roles";
import ProjectAboutLanding from "../ProjectLandingComponents/About";
import ProjectTitleLanding from "../ProjectLandingComponents/Tile";
import ProjectCaseStudyLinkLanding from "../ProjectLandingComponents/CaseStudy";

const SectionWrapper = styled.div`
  display: grid;

  margin-bottom: 228px;
`;
const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 37.5% 38%;
`;

const LandingProjectOne = () => (
  <SectionWrapper>
    <ProjectContainer>
      <ProjectTypeLanding />
      <RolesLandingList />
      <ProjectAboutLanding />
    </ProjectContainer>
    <ProjectTitleLanding title="VOGUEPAY" />
    <ProjectCaseStudyLinkLanding />
  </SectionWrapper>
);

export default LandingProjectOne;
