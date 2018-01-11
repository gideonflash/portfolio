import React, { Component } from "react";
import styled from "styled-components";

const LandingMainText = styled.div``;
const MainText = styled.h1`
  /* PRODUCT DESIGNER AND: */
  font-family: Futura-CondensedMedium;
  font-size: 64px;
  letter-spacing: 0;
  line-height: 72px;
  color: #443d3d;
  font-weight: normal;
`;
const Red = styled.h1`
  color: #b4211e;
  display: inline-block;
  font-family: Futura-CondensedMedium;
  font-size: 64px;
  letter-spacing: 0;
  line-height: 72px;
  font-weight: normal;
`;
const White = styled.h1`
  color: #ffffff;
  display: inline-block;
  font-family: Futura-CondensedMedium;
  font-size: 64px;
  letter-spacing: 0;
  line-height: 72px;
  font-weight: normal;
`;

class Title extends Component {
  render() {
    return (
      <LandingMainText>
        <MainText>
          PRODUCT<Red> DESIGNER </Red>
          <White>AND</White>FRONT-END DEVLOPER
        </MainText>
      </LandingMainText>
    );
  }
}

export default Title;
