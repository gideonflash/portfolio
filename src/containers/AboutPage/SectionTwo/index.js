import React from "react";
import styled from "styled-components";

const Section = styled.div`
  width: 1024px;
  height: 100%;
  margin-top: 100px;
  @media (max-width: 420px) {
    width: 300px;
  }

  @media only screen and (device-width: 768px) {
    width: 659px;
    margin-top: 80px;
  }
`;
const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 37.5% 50%;
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;
const ProjectLine = styled.span`
  display: inline-block;
  background-color: #ffffff;
  width: 80%;
  height: 2px;
  margin-left: 10px;
  margin-bottom: 1px;
  @media (max-width: 420px) {
    height: 1px;
    display: none;
  }
  @media only screen and (device-width: 768px) {
    height: 1px;
  }
`;
const ValuePropText = styled.h2`
  font-family: Futura-Bold;
  font-size: 36px;
  color: #443d3d;
  letter-spacing: 0;
  font-weight: normal;
  margin-top: 0px;
  @media (max-width: 420px) {
    font-size: 21px;
  }
  @media only screen and (device-width: 768px) {
    font-size: 30px;
  }
`;
const ProfileText = styled.p`
  font-family: SanFranciscoText-Regular;
  font-size: 16px;
  color: #443d3d;
  letter-spacing: 0;
  @media (max-width: 420px) {
    font-size: 13px;
  }
  @media only screen and (device-width: 768px) {
    font-size: 16px;
  }
`;

const SectionTwo = () => (
  <Section>
    <AboutContainer>
      <div>
        <ProjectLine />
      </div>
      <div>
        <ValuePropText>
          I would like to say<br /> something cool <br /> so sound super smart
        </ValuePropText>
        <ProfileText>
          I am a farm boy at heart, the only thing I can never forget doing is
          rearing chickens and selling cows, the main aim at the farm was to
          solve a problem and ensure you were resourceful enough to use the
          tools that were at your disposal. This might seem out of context but
          up until I started working at AKQA, I hadn’t realized that not much
          had changed only the tools. The past year I have dedicated my time as
          an Associate Product Designer, creating and shaping digital products
          for clients. Before AQKA I equipped myself with learning how to code,
          which has added systems thinking to my work.
          <br />
          <br />
          My dad said it clearly growing up “what you bring to the kitchen table
          is not your accomplishments, it’s the problems that you have solved
          during the day, these shape your thinking for the next problem”. With
          an increasing reliance on digital products, the landscape has changed
          from how I grew up. That is why programming has become a tool or
          choice.
        </ProfileText>
      </div>
    </AboutContainer>
  </Section>
);

export default SectionTwo;
