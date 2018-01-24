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
  margin: 28px;
  @media (max-width: 420px) {
    width: 300px;
    margin: 0px;
    margin-top: 70px;
  }
  @media only screen and (device-width: 768px) {
    width: 659px;
  }
`;

const SectionTwoContianer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 115px;
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
    margin-top: 68px;
  }
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
  @media (max-width: 420px) {
    grid-row-start: 2;
    grid-column-start: 1;
  }
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
  @media (max-width: 420px) {
    margin-left: 5px;
    margin-right: 5px;
  }
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
  @media (max-width: 420px) {
    font-size: 79px;
    margin-top: 46px;
  }
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
          Crafting exceptional user interfaces<br /> that make life better
        </ValuePropText>
      </ValuePropContianer>
      <ProfileTextContainer>
        <ProfileText>
          My days are spent shaping and evolving product web/mobile experiences.
          No easy task but worthwhile. The discipline of choice in this
          endeavour has been UI engineering/ front-end development.
        </ProfileText>
        <ProfileText>
          This is how you can define my experience in the past years. I have
          managed to shape product direction for top brands in the world from
          the likes of Google and Taghuer to name a few and also help startups
          design and build user interfaces that have helped them break into new
          markets by making their product more easy to use and understand.
        </ProfileText>
        <ProfileText>
          So it can never be a surprise seeing me with a buddle of post-it notes
          and sharpie iterating over ideas or using Sketch and Principle to
          tweak and create UI elements to implement in my front-end code base or
          better yet in atom employing my javascript skills to bring the designs
          to life. All in all, I am UI engineer who thrives on creating
          interfaces that provide value; meaning performance, usability and ease
          of use(pardon the buzz word bingo there" I really mean it though") are
          top priorities in ensuring products and services deliver on their
          intended value proposition. If you feel I might be a good fit for your
          company lets chat or grab a coffee.
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
