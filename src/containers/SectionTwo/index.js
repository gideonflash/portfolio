import React from "react";
import styled, { css } from "styled-components";
import LinkedIn from "./images/LinkedIn";
import GitHub from "./images/GitHub";
import Medium from "./images/Medium";
import Behance from "./images/Behance";
import Dribble from "./images/Dribble";

const Section = styled.div`
  width: 1024px;
  height: 100%;
  margin-top: 100px;
`;

const SectionTwoContianer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 115px;
`;
const ValuePropContianer = styled.div`
  z-index: 2;
  grid-row-start: 1;
  grid-column-start: 1;
`;
const ProfileTextContainer = styled.div`
  z-index: 2;
  grid-row-start: 1;
  grid-column-start: 2;
`;
const BackdropText = styled.div`
  grid-column-end: span 3;
  grid-column-start: 1;
  grid-row-start: 1;
  z-index: 1;
  display: grid;
`;
const SectionTwoHeader = styled.h1`
  font-family: GochiHand-Regular;
  font-size: 20px;
  color: #443d3d;
  letter-spacing: 0;
  text-align: center;
  font-weight: normal;
`;
const ValuePropText = styled.h2`
  font-family: Futura-Bold;
  font-size: 36px;
  color: #443d3d;
  letter-spacing: 0;
  font-weight: normal;
`;

const ProfileText = styled.p`
  font-family: SanFranciscoText-Regular;
  font-size: 16px;
  color: #443d3d;
  letter-spacing: 0;
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-top: 50px;
`;

const SkillsListItem = styled.li`
  font-family: Futura-CondensedLight;
  font-size: 15px;
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

const Slash = styled.span`
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
`;
const ProfileBackDropText = styled.h3`
  /* Profile Copy: */
  opacity: 0.24;
  font-family: Futura-Bold;
  font-size: 159px;
  color: #4183a1;
  letter-spacing: 0;
  margin: 0;
  justify-self: center;
  align-self: center;
`;

const SocialContianer = styled.div``;
const SocialUl = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;
const SocialListItems = styled.li`
  display: inline-block;
  margin-right: 20px;
`;

const SectionTwo = () => (
  <Section>
    <SectionTwoHeader>a snapshot view</SectionTwoHeader>
    <SectionTwoContianer>
      <ValuePropContianer>
        <ValuePropText>
          I would like to say<br /> something cool <br /> so sound super smart
        </ValuePropText>
      </ValuePropContianer>
      <ProfileTextContainer>
        <ProfileText>
          Subject as I can. I have been driven by the need to understand,
          testing my learning and trying as hard as I can to disprove evidence
          that I think is true as a way of discovering. Adopting the mental
          models Subject as I can. I have been driven by the need to understand,
          testing my learning and trying as hard as I can to disprove evidence
          that I think is true as a way of discovering. Adopting the mental
          models
        </ProfileText>
        <ProfileText>
          Subject as I can. I have been driven by the need to understand,
          testing my learning and trying as hard as I can to disprove evidence
          that I think is true as a way of discovering. Adopting the mental
          models
        </ProfileText>
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
            <SkillsListItem dark>UI DEVELOPMENT</SkillsListItem>
            <Slash>
              <SkillsListItem red>//</SkillsListItem>
            </Slash>
            <SkillsListItem>PROGRAMMING</SkillsListItem>
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
            <Slash>
              <SkillsListItem red>//</SkillsListItem>
            </Slash>
            <SkillsListItem>NODE.JS & EXPRESS</SkillsListItem>
            <Slash>
              <SkillsListItem red>//</SkillsListItem>
            </Slash>
            <SkillsListItem dark>REACT.JS, APPOLLO & GRAPHQL</SkillsListItem>
          </SkillsList>
        </div>
        <SocialContianer>
          <SocialUl>
            <SocialListItems>
              <LinkedIn />
            </SocialListItems>
            <SocialListItems>
              <GitHub />
            </SocialListItems>
            <SocialListItems>
              <Medium iconBackground="#443D3D" />
            </SocialListItems>
            <SocialListItems>
              <Dribble />
            </SocialListItems>
            <SocialListItems>
              <Behance />
            </SocialListItems>
          </SocialUl>
        </SocialContianer>
      </ProfileTextContainer>
      <BackdropText>
        <ProfileBackDropText>Profile</ProfileBackDropText>
      </BackdropText>
    </SectionTwoContianer>
  </Section>
);

export default SectionTwo;
