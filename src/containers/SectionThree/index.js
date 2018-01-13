import React, { Component } from "react";
import styled, { css } from "styled-components";

import Arrow from "./images/Arrow.svg";

const Section = styled.div`
  width: 1024px;
  height: 100%;
`;
const SectionWrapper = styled.div`
  display: grid;
`;
const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 37.5% 38%;
`;
const TileContainer = styled.div``;
const ViewCaseStudyContianer = styled.div`
  display: grid;
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
  width: 89px;
  min-width: 30px;
  height: 2px;
  margin-left: 10px;
  margin-bottom: 1px;
`;

const RoleType = styled.h1`
  /* Project:: */
  font-family: SanFranciscoText-Bold;
  font-size: 10px;
  color: #433d3d;
  letter-spacing: 1.17px;
  font-weight: normal;
  display: inline-block;
`;
const RoleLine = styled.span`
  display: inline-block;
  background-color: #ffffff;
  width: 159px;
  min-width: 60px;
  height: 2px;
  margin-left: 10px;
  margin-bottom: 1px;
`;

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
`;

const ProjectTypeListContianer = styled.div``;
const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;
const ProjectTypeItem = styled.p`
  /* WEB DESIGN: */
  font-family: SanFranciscoText-Bold;
  font-size: 12px;
  color: #433d3d;
  letter-spacing: 1.4px;
`;
const SkillsListItem = styled.li`
  font-family: Futura-CondensedLight;
  font-size: 12px;
  color: #edeee8;
  letter-spacing: 0;
  display: inline-block;
  margin-bottom: 10px;
  ${props =>
    props.dark &&
    css`
      color: #443d3d;
    `} ${props =>
      props.red &&
      css`
        color: #d21b3f;
      `};
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const Slash = styled.span`
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
`;
const AboutCompany = styled.p`
  font-family: SanFranciscoText-Regular;
  font-size: 12px;
  color: #443d3d;
  letter-spacing: 0;
`;
const ProjectTile = styled.h1`
  /* VOGUEPAY: */
  font-family: Futura-Bold;
  font-size: 92px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 87px;
  text-shadow: 0 2px 22px rgba(0, 0, 0, 0.26);
`;
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
const ViewCaseStudyLink = styled.a`
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

const Img = styled.img``;
class SectionThree extends Component {
  render() {
    return (
      <Section>
        <SectionWrapper>
          <ProjectContainer>
            <div>
              <div>
                <ProjectType>Project:</ProjectType>
                <ProjectLine />
              </div>
              <ProjectTypeListContianer>
                <List>
                  <li>
                    <ProjectTypeItem>PRODUCT DESIGN</ProjectTypeItem>
                  </li>
                  <li>
                    <ProjectTypeItem>WEB DESIGN</ProjectTypeItem>
                  </li>
                  <li>
                    <ProjectTypeItem>UI DEVELOPMENT</ProjectTypeItem>
                  </li>
                </List>
              </ProjectTypeListContianer>
            </div>
            <div>
              <div>
                <RoleType>Role & TechStack:</RoleType>
                <RoleLine />
                <div>
                  <SkillsList>
                    <SkillsListItem dark>PRODUCT DESIGN</SkillsListItem>
                    <Slash>
                      <SkillsListItem red>//</SkillsListItem>
                    </Slash>
                    <SkillsListItem>WEB AND MOBILE UI DESIGN</SkillsListItem>
                    <Slash>
                      <SkillsListItem red>//</SkillsListItem>
                    </Slash>

                    <br />
                    <SkillsListItem>SKETCH</SkillsListItem>
                    <Slash>
                      <SkillsListItem red>//</SkillsListItem>
                    </Slash>
                    <SkillsListItem>PRINCIPLE & FLINTO</SkillsListItem>
                    <Slash>
                      <SkillsListItem red>//</SkillsListItem>
                    </Slash>
                    <SkillsListItem dark>HTML, CSS, JAVSSCRIPT</SkillsListItem>
                    <br />

                    <SkillsListItem>NODE.JS & EXPRESS</SkillsListItem>
                  </SkillsList>
                </div>
              </div>
            </div>
            <div>
              <div>
                <AboutCompanyType>About Company:</AboutCompanyType>
                <AboutCompanyLine />
              </div>
              <div>
                <AboutCompany>
                  Subject as I can. I have been driven by the need to
                  understand, testing my learning and trying as hard as I can to
                  disprove evidence that I think is true as a way of
                  discovering. Adopting the mental models
                </AboutCompany>
              </div>
            </div>
          </ProjectContainer>
          <TileContainer>
            <ProjectTile>VOGUEPAY</ProjectTile>
          </TileContainer>
          <ViewCaseStudyContianer>
            <BackdropContainer>
              <BackdropText>Projects</BackdropText>
            </BackdropContainer>
            <LinkContianer>
              <Grid>
                <LinkLine />
                <Img src={Arrow} />
                <ViewCaseStudyLink>VIEW CASE STUDY</ViewCaseStudyLink>
              </Grid>
            </LinkContianer>
          </ViewCaseStudyContianer>
        </SectionWrapper>
      </Section>
    );
  }
}

export default SectionThree;
