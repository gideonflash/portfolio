import React from "react";
import styled from "styled-components";
import LandingProjectOne from "../../components/ProjectOne";
import LandingProjectTwo from "../../components/ProjectTwo";
import LandingProjectThree from "../../components/ProjectThree";
import LandingProjectFour from "../../components/ProjectFour";

const Section = styled.div`
  width: 1024px;
  height: 100%;
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

const SectionThree = () => (
  <Section>
    <SubTle>the good stuff</SubTle>
    <Header>Projects</Header>
    <LandingProjectOne />
    <LandingProjectTwo />
    <LandingProjectThree />
    <LandingProjectFour />
  </Section>
);

export default SectionThree;
