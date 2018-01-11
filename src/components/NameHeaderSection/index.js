import React, { Component } from "react";
import styled from "styled-components";
import TapeImg from "./images/Circle.svg";

const Container = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
`;

const NameContainer = styled.div`
  display: grid;
`;
const Skill = styled.p`
  font-family: Futura-CondensedLight;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
`;
const SkillDiv = styled.div`
  border-bottom: 1px dashed #443d3d;
`;
const Name = styled.div`
  /* GIDEON: */
  font-family: Futura-Bold;
  font-size: 92px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 87px;
  text-shadow: 0 2px 22px rgba(0, 0, 0, 0.26);
`;
const Details = styled.p`
  /* BORN IN AFRICA: */
  font-family: Futura-CondensedMedium;
  font-size: 19px;
  color: #443d3d;
  letter-spacing: 0;
  display: inline-block;
  margin-right: 20px;
`;
const Img = styled.img``;

class NameAndSkills extends Component {
  render() {
    return (
      <Container>
        <NameContainer>
          <SkillDiv>
            <Skill>Product Design</Skill>
          </SkillDiv>
          <div>
            <Name>GIDEON</Name>
            <Details>A FARM BOY</Details>
            <Details>//</Details>
            <Details>LIVING ON EARTH IN ENGLAND LONDON</Details>
          </div>
        </NameContainer>
        <div>
          <Img src={TapeImg} />
        </div>
      </Container>
    );
  }
}

export default NameAndSkills;
