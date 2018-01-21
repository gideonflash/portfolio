import React from "react";
import styled from "styled-components";
import Steps from "./images/Steps.svg";
import Squiggle from "./images/Squiggle.svg";

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;
const NormalSteps = styled.div`
  display: grid;
  justify-items: center;
`;

const Text = styled.p`
  font-family: GochiHand-Regular;
  font-size: 20px;
  color: #443d3d;
  letter-spacing: 0;
`;
const ImgSteps = styled.img``;
const Img2Container = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  z-index: 1;
`;
const Text2 = styled.p`
  font-family: GochiHand-Regular;
  font-size: 20px;
  color: #443d3d;
  letter-spacing: 0;
  z-index: 2;
  grid-row-start: 1;
  grid-column-start: 1;
  align-self: center;
`;

const Illustration = () => (
  <Container>
    <NormalSteps>
      <Text>What i think happend</Text>
      <div>
        <ImgSteps src={Steps} />
      </div>
    </NormalSteps>
    <NormalSteps>
      <Img2Container>
        <ImgSteps src={Squiggle} />
      </Img2Container>
      <Text2>Actual reality</Text2>
    </NormalSteps>
  </Container>
);

export default Illustration;
