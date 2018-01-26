import React from "react";
import styled, { css } from "styled-components";

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
  @media (max-width: 420px) {
    width: 185px;
    height: 1px;
  }
  @media only screen and (device-width: 768px) {
    height: 1px;
  }
`;

const SkillsListItem = styled.li`
  font-family: Futura-CondensedLight;
  font-size: 14px;
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

const RolesLandingList = props => (
  <div>
    <div>
      <RoleType>Tools & TechStack:</RoleType>
      <RoleLine />
      <div>
        <SkillsList>
          <SkillsListItem dark>{props.tech1}</SkillsListItem>
          <Slash>
            <SkillsListItem red>{props.slash1}</SkillsListItem>
          </Slash>
          <SkillsListItem>{props.tech2}</SkillsListItem>
          <Slash>
            <SkillsListItem red>{props.slash2}</SkillsListItem>
          </Slash>

          <SkillsListItem>{props.tech3}</SkillsListItem>

          <Slash>
            <SkillsListItem red>{props.slash3}</SkillsListItem>
          </Slash>
          <br />
          <SkillsListItem>{props.tech4}</SkillsListItem>
          <Slash>
            <SkillsListItem red>{props.slash4}</SkillsListItem>
          </Slash>
          <SkillsListItem dark>{props.tech5}</SkillsListItem>

          <Slash>
            <SkillsListItem red>{props.slash5}</SkillsListItem>
          </Slash>

          <SkillsListItem>{props.tech6}</SkillsListItem>
          <Slash>
            <SkillsListItem red>{props.slash6}</SkillsListItem>
          </Slash>
          <SkillsListItem>{props.tech7}</SkillsListItem>
          <Slash>
            <SkillsListItem red>{props.slash7}</SkillsListItem>
          </Slash>
        </SkillsList>
      </div>
    </div>
  </div>
);

export default RolesLandingList;
