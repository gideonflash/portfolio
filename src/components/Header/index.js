import React, { Component } from "react";
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
`;
const Tablinks = styled.a`
  display: block;

  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  /* PROFILE: */
  font-family: FuturaBT-Medium;
  font-size: 12px;
  color: #3f2f23;
  letter-spacing: 1.4px;
  &:hover {
    background-color: red;
  }
`;

class LandingPageNavigation extends Component {
  render() {
    return (
      <div>
        <Nav>
          <BrandNavigation>Gideon</BrandNavigation>
          <ListNavigation>
            <Tablinks>Profile</Tablinks>
          </ListNavigation>
          <ListNavigation>
            <Tablinks>Projects</Tablinks>
          </ListNavigation>
          <ListNavigation>
            <Tablinks>Experiance</Tablinks>
          </ListNavigation>
        </Nav>
      </div>
    );
  }
}

export default LandingPageNavigation;
