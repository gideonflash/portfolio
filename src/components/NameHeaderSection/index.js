import React, { Component } from "react";
import styled from "styled-components";
import TapeImg from "./images/Circle.svg";

const Container = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  margin-top: 40px;
`;

const NameContainer = styled.div`
  display: grid;
`;
const Skill = styled.p`
  font-family: Futura-CondensedLight;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  display: inline-block;
  margin-bottom: 0;
`;
const Skill1 = styled.p`
  font-family: Futura-CondensedLight;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  display: inline-block;
  margin-left: 53px;
  margin-bottom: 0;
`;
const Skill2 = styled.p`
  font-family: Futura-CondensedLight;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  display: inline-block;
  margin-left: 53px;
  margin-bottom: 0;
`;
const Skill3 = styled.p`
  font-family: Futura-CondensedLight;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  display: inline-block;
  margin-left: 46px;
  margin-bottom: 0;
`;

const SkillDiv = styled.div`
  border-bottom: 1px dashed #443d3d;
  height: 50px;
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
const Namewrapper = styled.div`
  margin-top: 88px;
`;
const ImgContainer = styled.div`
  justify-self: end;
  align-self: center;
`;

class NameAndSkills extends Component {
  render() {
    return (
      <Container>
        <NameContainer>
          <SkillDiv>
            <Skill>Product Design</Skill>
            <Skill1>User experince</Skill1>
            <Skill2>Interface design</Skill2>
            <Skill3>Programming</Skill3>
          </SkillDiv>
          <Namewrapper>
            <Name>GIDEON</Name>
            <Details>A FARM BOY</Details>
            <Details>//</Details>
            <Details>LIVING ON EARTH IN ENGLAND LONDON</Details>
          </Namewrapper>
        </NameContainer>
        <ImgContainer>
          <Img src={TapeImg} />
        </ImgContainer>
      </Container>
    );
  }
}

export default NameAndSkills;
