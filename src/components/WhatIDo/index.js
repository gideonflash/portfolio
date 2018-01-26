import React from "react";
import styled from "styled-components";

const TapeText = styled.p`
  /* WHAT I DO TAPE 1:: */
  font-family: GochiHand-Regular;
  font-size: 16px;
  color: #443d3d;
  letter-spacing: 0;
  display: inline-block;
  margin-bottom: 0;
  margin-right: 10px;
  @media (max-width: 420px) {
    /* WHAT I DO TAPE 1:: */
    font-size: 11px;
  }
`;

const WhatIDoContainer = styled.div`
  border-bottom: 2px solid #443d3d;
`;
const WhatIDo = styled.p`
  /* PRODUCT DESIGN FRONT: */
  font-family: Futura-CondensedMedium;
  font-size: 13px;
  color: #443d3d;
  letter-spacing: 0;
  display: inline-block;
  margin-bottom: 0;
  @media (max-width: 420px) {
    /* WHAT I DO TAPE 1:: */
    font-size: 12px;
  }
`;

const Red = styled.p`
  color: #b4211e;
  display: inline-block;
`;

const WhatIDoSection = () => (
  <WhatIDoContainer>
    <TapeText>WHAT I DO TAPE 1:</TapeText>
    <WhatIDo>
      FRONT-END <Red>DEVLOPMENT </Red> AND
      <Red>LONG WALKS</Red> IN THE PARK
    </WhatIDo>
  </WhatIDoContainer>
);

export default WhatIDoSection;
