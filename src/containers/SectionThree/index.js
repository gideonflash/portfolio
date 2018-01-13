import React, { Component } from "react";
import styled from "styled-components";

const Section = styled.div`
  width: 1024px;
  height: 100%;
`;
const SectionWrapper = styled.div`
  display: grid;
`;
const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 37% 38%;
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

const AboutCompanyType = styled.h1`
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
              </div>
            </div>
            <div>
              <div>
                <AboutCompanyType>About Company:</AboutCompanyType>
                <AboutCompanyLine />
              </div>
            </div>
          </ProjectContainer>
          <TileContainer>Title</TileContainer>
          <ViewCaseStudyContianer>
            <div>BackdropText</div>
            <div>link</div>
          </ViewCaseStudyContianer>
        </SectionWrapper>
      </Section>
    );
  }
}

export default SectionThree;
