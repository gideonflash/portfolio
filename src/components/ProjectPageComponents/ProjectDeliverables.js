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
  @media (max-width: 420px) {
    height: 1px;
  }
  @media only screen and (device-width: 768px) {
    height: 1px;
  }
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

const ProjectDeliverables = props => (
  <div>
    <div>
      <ProjectType>Deliverables:</ProjectType>
      <ProjectLine />
    </div>
    <ProjectTypeListContianer>
      <List>
        <li>
          <ProjectTypeItem>{props.item1}</ProjectTypeItem>
        </li>
        <li>
          <ProjectTypeItem>{props.item2}</ProjectTypeItem>
        </li>
        <li>
          <ProjectTypeItem>{props.item3}</ProjectTypeItem>
        </li>
        <li>
          <ProjectTypeItem>{props.item4}</ProjectTypeItem>
        </li>
        <li>
          <ProjectTypeItem>{props.item5}</ProjectTypeItem>
        </li>
        <li>
          <ProjectTypeItem>{props.item6}</ProjectTypeItem>
        </li>
      </List>
    </ProjectTypeListContianer>
  </div>
);

export default ProjectDeliverables;
