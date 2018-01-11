import React, { Component } from "react";
import styled from "styled-components";

const TapeText = styled.p`
  /* WHAT I DO TAPE 1:: */
  font-family: GochiHand-Regular;
  font-size: 20px;
  color: #443d3d;
  letter-spacing: 0;
`;

const WhatIDoContainer = styled.div`
  border-bottom: 2px solid #443d3d;
`;
const WhatIDo = styled.p`
  /* PRODUCT DESIGN FRONT: */
  font-family: Futura-CondensedMedium;
  font-size: 18px;
  color: #443d3d;
  letter-spacing: 0;
`;

const Red = styled.p`
  color: #b4211e;
  display: inline-block;
`;

class WhatIDoSection extends Component {
  render() {
    return (
      <WhatIDoContainer>
        <TapeText>WHAT I DO TAPE 1:</TapeText>
        <WhatIDo>
          PRODUCT <Red>DESIGN</Red> FRONT-END <Red>DEVLOPMENT</Red> AND{" "}
          <Red>LONG WALKS</Red> IN THE PARK
        </WhatIDo>
      </WhatIDoContainer>
    );
  }
}

export default WhatIDoSection;
