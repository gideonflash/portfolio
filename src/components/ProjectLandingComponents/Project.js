import React from "react";
import styled from "styled-components";

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

const ProjectTypeLanding = () => (
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
);

export default ProjectTypeLanding;
