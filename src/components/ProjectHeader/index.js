import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
`;

const NameContainer = styled.div`
  display: grid;
`;

const Name = styled.div.attrs({
  // we can define static props

  // or we can define dynamic ones
  backgroundcolor: props => props.bkcolour || "#433d3d"
})`
  font-family: Futura-Bold;
  font-size: 92px;

  letter-spacing: 0;
  line-height: 87px;
  @media (max-width: 420px) {
    /* ANALYTICS INTELLIGEN: */

    font-size: 30px;
    line-height: 39px;
  }
  @media only screen and (device-width: 768px) {
    /* ANALYTICS INTELLIGEN: */

    font-size: 60px;
    line-height: 61px;
  }
  /* here we use the dynamically computed props */
  color: ${props => props.backgroundcolor};
`;

const Details = styled.p`
  /* BORN IN AFRICA: */
  font-family: Futura-CondensedMedium;
  font-size: 18px;
  color: #433d3d;
  letter-spacing: 0;
  display: inline-block;
  margin-right: 20px;
  @media (max-width: 420px) {
    font-size: 14px;
    margin: 0px;
    margin-bottom: 11px;
    margin-right: 12px;
  }
  @media only screen and (device-width: 768px) {
    font-size: 12px;
  }
`;

const Namewrapper = styled.div`
  margin-top: 180px;
`;
const TechStackContainer = styled.div`
  margin-top: 100px;
`;
const TechSubHeader = styled.h2`
  /* Tech Stack & Roles:: */
  font-family: Futura-CondensedMedium;
  font-size: 22px;
  color: #433d3d;
  letter-spacing: 0;
  font-weight: normal;
  display: inline-block;
  margin-right: 34px;
  @media (max-width: 420px) {
    margin-right: 10px;
    margin-bottom: 0px;
  }
`;

const ProjectHeader = props => (
  <Container>
    <NameContainer>
      <Namewrapper>
        <Name bkcolour={props.colour}>
          {props.first} <br /> {props.second}
        </Name>
        <TechStackContainer>
          <TechSubHeader>Tools & TechStack:</TechSubHeader>
          <Details>{props.stack1}</Details>
          <Details>{props.slash1}</Details>
          <Details>{props.stack2}</Details>
          <Details>{props.slash2}</Details>
          <Details>{props.stack3}</Details>
          <Details>{props.slash3}</Details>
          <Details>{props.stack4}</Details>
          <Details>{props.slash4}</Details>
          <Details>{props.stack5}</Details>
          <Details>{props.slash5}</Details>
          <Details>{props.stack6}</Details>
          <Details>{props.slash6}</Details>
          <Details>{props.stack7}</Details>
          <Details>{props.slash7}</Details>
          <Details>{props.stack8}</Details>
        </TechStackContainer>
      </Namewrapper>
    </NameContainer>
  </Container>
);

export default ProjectHeader;
