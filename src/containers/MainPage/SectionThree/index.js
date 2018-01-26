import React from "react";
import styled from "styled-components";
import LandingProjectOne from "../../../components/ProjectOne";
import LandingProjectTwo from "../../../components/ProjectTwo";
import LandingProjectThree from "../../../components/ProjectThree";
import LandingProjectFive from "../../../components/ProjectFive";

const Section = styled.div`
  width: 1024px;
  height: 100%;
  margin-top: 86px;
  @media (max-width: 420px) {
    width: 300px;

    margin-top: 80px;
  }
  @media only screen and (device-width: 768px) {
    width: 659px;
    margin-top: 80px;
  }
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
  @media (max-width: 420px) {
    display: none;
  }
  @media only screen and (device-width: 768px) {
    display: none;
  }
`;

const SectionThree = () => (
  <Section>
    <SubTle>the good stuff</SubTle>
    <Header>Projects</Header>
    <LandingProjectOne name="VOGUEPAY" projectNumber="Project1" />
    <LandingProjectTwo name="AKQA" projectNumber="Project2" />
    <LandingProjectThree name="AI" projectNumber="Project3" />
    <LandingProjectFive name="CASHKACHING" projectNumber="Project4" />
  </Section>
);

export default SectionThree;
