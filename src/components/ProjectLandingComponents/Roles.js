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

const RolesLandingList = () => (
  <div>
    <div>
      <RoleType>Tools & TechStack:</RoleType>
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
);

export default RolesLandingList;
