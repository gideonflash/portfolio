import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: relative;
  z-index: 3;
`;

const NavContainer = styled.div`
  margin-left: 28px;
  margin-right: 28px;
`;

const ListNavigation = styled.li`
  float: right;
`;

const BrandNavigation = styled(NavLink)`
  float: left;
  /* Gideon: */
  font-family: GochiHand-Regular;
  font-size: 21px;
  color: #3f2f23;
  letter-spacing: 0;
  margin-top: 22px;
  margin-left: 101px;
  text-decoration: none;
  @media (max-width: 420px) {
    margin-left: 0px;
  }
  @media only screen and (device-width: 768px) {
    margin-left: 30px;
    margin-top: 18px;
  }
`;
const Tablinks = styled(NavLink)`
  display: block;

  text-align: center;
  padding: 14px 29.5px;
  text-decoration: none;
  /* PROFILE: */
  font-family: FuturaBT-Medium;
  font-size: 10px;
  color: #3f2f23;
  letter-spacing: 1.4px;
  &:hover {
    background-color: #b4211e;
    color: #ffffff;
  }
  @media (max-width: 420px) {
    display: none;
  }
`;

const TablinksAkqa = Tablinks.extend`
  padding: 14px 47.5px;
`;
const TablinksVp = Tablinks.extend`
  padding: 14px 31.5px;
`;
const TablinksAi = Tablinks.extend`
  padding: 14px 58.5px;
`;
const TablinksCk = Tablinks.extend`
  padding: 14px 19.5px;
`;

const Profile = styled.p`
  margin-right: 0px;
`;

const LandingPageNavigation = () => (
  <NavContainer>
    <Nav>
      <BrandNavigation to="/">Gideon</BrandNavigation>

      <ListNavigation>
        <Tablinks to="/about">
          <Profile>ABOUT</Profile>
        </Tablinks>
      </ListNavigation>
      <ListNavigation>
        <TablinksAkqa to="/akqa">
          <Profile>AKQA</Profile>
        </TablinksAkqa>
      </ListNavigation>
      <ListNavigation>
        <TablinksVp to="/voguepay">
          <Profile>VOGUEPAY</Profile>
        </TablinksVp>
      </ListNavigation>
      <ListNavigation>
        <TablinksAi to="/ai">
          <Profile>AI</Profile>
        </TablinksAi>
      </ListNavigation>
      <ListNavigation>
        <TablinksCk to="/cashkaching">
          <Profile>CASHKACHING</Profile>
        </TablinksCk>
      </ListNavigation>
    </Nav>
  </NavContainer>
);

export default LandingPageNavigation;
