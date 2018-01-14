import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Arrow from "./images/Arrow.svg";

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
`;
const BackdropContainer = styled.div`
  display: grid;
  z-index: 1;
  grid-row-start: 1;
  grid-column-start: 1;
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
`;
const ViewCaseStudyLink = styled(Link)`
  font-family: SanFranciscoText-Medium;
  font-size: 14px;
  color: #433d3d;
  letter-spacing: 1.63px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 6% 1fr;
  align-items: center;
`;
const ViewCaseStudyContianer = styled.div`
  display: grid;
`;
const Img = styled.img``;

const ProjectCaseStudyLinkLanding = props => (
  <ViewCaseStudyContianer>
    <BackdropContainer>
      <BackdropText>{props.projectNumber}</BackdropText>
    </BackdropContainer>
    <LinkContianer>
      <Grid>
        <LinkLine />
        <Img src={Arrow} />
        <ViewCaseStudyLink to="/cashkaching">VIEW CASE STUDY</ViewCaseStudyLink>
      </Grid>
    </LinkContianer>
  </ViewCaseStudyContianer>
);

export default ProjectCaseStudyLinkLanding;
