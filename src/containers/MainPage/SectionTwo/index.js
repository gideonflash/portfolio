import React from "react";
import styled, { css } from "styled-components";
import LinkedIn from "./images/LinkedIn";
import GitHub from "./images/GitHub";

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
  margin-top: 15px;
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

const ContactMe = styled.p`
  font-family: SanFranciscoText-Bold;
  font-size: 12px;
  color: #433d3d;
  margin-top: 36px;
  letter-spacing: 1.4px;
`;
const Email = styled.a`
  font-family: Futura-Bold;
  font-size: 14px;
  color: #443d3d;
  font-weight: normal;
`;
const PhoneNumber = styled.p`
  font-family: Futura-Bold;
  font-size: 14px;
  color: #443d3d;
  font-weight: normal;
`;

const LinkedInLink = styled.a``;

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
          markets by making their product more easy to use and understandable.
        </ProfileText>
        <ProfileText>
          So it can never be a surprise seeing me with a buddle of post-it notes
          and sharpies iterating over ideas or using Sketch and Principle to
          tweak and create UI elements to implement in my front-end code base or
          better yet in atom employing my javascript skills to bring the designs
          to life. All in all, I am UI engineer who thrives on creating
          interfaces that provide value meaning; performance, usability and ease
          of use(pardon the buzz word bingo there" I really mean it though") are
          top priorities in ensuring products and services deliver on their
          intended value proposition. If you feel I might be a good fit for your
          company lets chat or grab a coffee.
        </ProfileText>
        <div>
          <ContactMe>Contact me:</ContactMe>
          <LinkedInLink href="mailto:gideonkadzura@gmail.com">
            <Email>gideonkadzura@gmail.com</Email>
          </LinkedInLink>

          <PhoneNumber>07480 134 176</PhoneNumber>
        </div>
        <div>
          <ContactMe>Skills:</ContactMe>
          <SkillsList>
            <SkillsListItem dark>HTML, CSS, JAVSSCRIPT</SkillsListItem>
            <Slash>
              <SkillsListItem red>//</SkillsListItem>
            </Slash>
            <SkillsListItem>NODE.JS & EXPRESS</SkillsListItem>
            <Slash>
              <SkillsListItem red>//</SkillsListItem>
            </Slash>
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

            <SkillsListItem dark>REACT.JS, APPOLLO & GRAPHQL</SkillsListItem>
          </SkillsList>
        </div>
        <SocialContianer>
          <SocialUl>
            <SocialListItems>
              <LinkedInLink
                href="https://www.linkedin.com/in/gideonkadzura/ "
                target="_blank"
              >
                <LinkedIn />
              </LinkedInLink>
            </SocialListItems>
            <SocialListItems>
              <LinkedInLink
                href="https://github.com/gideonflash"
                target="_blank"
              >
                <GitHub />
              </LinkedInLink>
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
