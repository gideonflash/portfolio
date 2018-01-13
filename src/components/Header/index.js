import React from "react";
import styled from "styled-components";

const Nav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const ListNavigation = styled.li`
  float: right;
`;

const BrandNavigation = styled.a`
  float: left;
  /* Gideon: */
  font-family: GochiHand-Regular;
  font-size: 21px;
  color: #ffffff;
  letter-spacing: 0;
  margin-top: 22px;
  margin-left: 101px;
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
`;

const Experiance = styled.p`
  margin-right: 141px;
`;
const Profile = styled.p`
  margin-right: 48px;
`;

const LandingPageNavigation = () => (
  <div>
    <Nav>
      <BrandNavigation>Gideon</BrandNavigation>
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
  </div>
);

export default LandingPageNavigation;
