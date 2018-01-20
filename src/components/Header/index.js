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
  @media (min-width: 768px) {
    margin-left: 30px;
    margin-top: 18px;
  }
`;
const Tablinks = styled.a`
  display: block;

  text-align: center;
  padding: 14px 16px;
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

const Experiance = styled.p`
  margin-right: 141px;
`;
const Profile = styled.p`
  margin-right: 48px;
`;

const LandingPageNavigation = () => (
  <NavContainer>
    <Nav>
      <BrandNavigation to="/">Gideon</BrandNavigation>
      <ListNavigation>
        <Tablinks>
          <Experiance>EXPERIANCE</Experiance>
        </Tablinks>
      </ListNavigation>
      <ListNavigation>
        <Tablinks>
          <Profile>PROFILE</Profile>
        </Tablinks>
      </ListNavigation>
    </Nav>
  </NavContainer>
);

export default LandingPageNavigation;
