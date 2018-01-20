import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProjectTypeLanding from "../ProjectLandingComponents/Project";
import RolesLandingList from "../ProjectLandingComponents/Roles";
import ProjectAboutLanding from "../ProjectLandingComponents/About";
import ProjectTitleLanding from "../ProjectLandingComponents/Tile";
import Arrow from "../ProjectLandingComponents/images/Arrow.svg";

const BackdropText = styled.p`
  /* Projects: */
  opacity: 0.24;
  font-family: Futura-Bold;
  font-size: 159px;
  color: #4183a1;
  letter-spacing: 0;
  margin: 0;
  justify-self: end;
  margin-right: 10%;
  @media (max-width: 420px) {
    font-size: 60px;
  }
  @media only screen and (device-width: 768px) {
    font-size: 100px;
  }
`;
const BackdropContainer = styled.div`
  display: grid;
  z-index: 1;
  grid-row-start: 1;
  grid-column-start: 1;
`;

const ProjectTitleLandingS = styled(ProjectTitleLanding)`
  @media (max-width: 420px) {
    grid-row-start: 1;
    font-size: 24px;
  }
  @media only screen and (device-width: 768px) {
    grid-row-start: 1;
  }
`;

const LinkContianer = styled.div`
  z-index: 2;
  grid-row-start: 1;
  grid-column-start: 1;
  align-self: end;
  margin-bottom: 50px;
`;

const LinkLine = styled.span`
  display: inline-block;
  background-color: #ffffff;
  width: 375px;
  min-width: 60px;
  height: 2px;
  /* Line 2 Copy 6: */
  box-shadow: 0 2px 22px rgba(0, 0, 0, 0.69);
  @media (max-width: 420px) {
    display: none;
  }
  @media only screen and (device-width: 768px) {
    display: none;
  }
`;

const LinkLine2 = styled.span`
  box-shadow: 0 2px 22px rgba(0, 0, 0, 0.69);
  @media (max-width: 420px) {
    display: inline-block;
    background-color: #ffffff;

    min-width: 60px;
    height: 2px;
    /* Line 2 Copy 6: */
  }
  @media only screen and (device-width: 768px) {
    display: inline-block;
    background-color: #ffffff;

    min-width: 60px;
    height: 2px;
    /* Line 2 Copy 6: */
  }
`;

const ViewCaseStudyLink = styled(Link)`
  font-family: SanFranciscoText-Medium;
  font-size: 14px;
  color: #433d3d;
  letter-spacing: 1.63px;
  text-decoration: none;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 6% 1fr;
  align-items: center;
  @media (max-width: 420px) {
    grid-template-columns: 20% 1fr;
  }
  @media only screen and (device-width: 768px) {
    grid-template-columns: 20% 1fr;
  }
`;
const ViewCaseStudyContianer = styled.div`
  display: grid;
  @media (max-width: 420px) {
    grid-row-start: 2;
  }
`;
const Img = styled.img`
  @media only screen and (device-width: 768px) {
    justify-self: end;
  }
`;
const SectionWrapper = styled.div`
  display: grid;
  margin-top: 211px;
  margin-bottom: 228px;
  @media (max-width: 420px) {
    margin-top: 80px;
  }
  @media only screen and (device-width: 768px) {
    margin-top: 117px;
    margin-bottom: 180px;
  }
`;
const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 37.5% 38%;
  @media (max-width: 420px) {
    grid-row-start: 3;
    grid-template-columns: 1fr;
  }
  @media only screen and (device-width: 768px) {
    grid-row-start: 3;
    grid-template-columns: 1fr;
  }
`;

const ProjectTileContianer = styled.div`
  @media (min-width: 420px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  @media only screen and (device-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;
const Box1 = styled.div`
  @media (max-width: 420px) {
    grid-row-start: 3;
  }
  @media only screen and (device-width: 768px) {
    grid-row-start: 2;
    grid-column-start: 1;
  }
`;
const Box2 = styled.div`
  @media (max-width: 420px) {
    grid-row-start: 2;
  }
  @media only screen and (device-width: 768px) {
    grid-row-start: 2;
    grid-column-start: 2;
  }
`;
const Box3 = styled.div`
  @media (max-width: 420px) {
    grid-row-start: 1;
    margin-bottom: 24px;
  }
  @media only screen and (device-width: 768px) {
    grid-row-start: 1;
    margin-bottom: 24px;
    grid-column-end: 3;
    grid-column-start: 1;
  }
`;

const LandingProjectFive = props => (
  <SectionWrapper>
    <ProjectContainer>
      <Box1>
        <ProjectTypeLanding />
      </Box1>
      <Box2>
        <RolesLandingList />
      </Box2>
      <Box3>
        <ProjectAboutLanding />
      </Box3>
    </ProjectContainer>
    <ProjectTileContianer>
      <ProjectTitleLandingS title={props.name} />
      <LinkLine2 />
    </ProjectTileContianer>
    <ViewCaseStudyContianer>
      <BackdropContainer>
        <BackdropText>{props.projectNumber}</BackdropText>
      </BackdropContainer>
      <LinkContianer>
        <Grid>
          <LinkLine />
          <Img src={Arrow} />
          <ViewCaseStudyLink to="/cashkaching">
            VIEW CASE STUDY
          </ViewCaseStudyLink>
        </Grid>
      </LinkContianer>
    </ViewCaseStudyContianer>
  </SectionWrapper>
);

export default LandingProjectFive;
