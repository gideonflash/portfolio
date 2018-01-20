import React from "react";
import styled from "styled-components";
import LandingProjectOne from "../../../components/ProjectOne";
import LandingProjectTwo from "../../../components/ProjectTwo";
import LandingProjectThree from "../../../components/ProjectThree";
import LandingProjectFour from "../../../components/ProjectFour";
import LandingProjectFive from "../../../components/ProjectFive";
import LandingProjectSix from "../../../components/ProjectSix";

const Section = styled.div`
  width: 1024px;
  height: 100%;
  margin-top: 86px;
  @media (max-width: 420px) {
    width: 300px;

    margin-top: 80px;
  }
  @media (max-width: 768px) {
    width: 659px;
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
  @media (max-width: 689px) {
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
    <LandingProjectFour name="ASHLEENLESTER" projectNumber="Project4" />
    <LandingProjectFive name="CASHKACHING" projectNumber="Project5" />
    <LandingProjectSix name="GENERAL ASSEMBLY" projectNumber="Project6" />
  </Section>
);

export default SectionThree;
