import React from "react";
import styled from "styled-components";

const BkNumber = styled.p`
  /* 1 copy: */
  opacity: 0.51;
  font-family: Futura-Bold;
  font-size: 96px;
  color: #f48859;
  letter-spacing: 0;
  grid-row-start: 1;
  grid-column-start: 1;
  z-index: 1;
  margin: 0px;
`;
const NumberProccess = styled.p`
  /* 1: */
  font-family: Futura-Bold;
  font-size: 36px;
  color: #443d3d;
  letter-spacing: 0;
  grid-row-start: 1;
  grid-column-start: 1;
  z-index: 2;
  margin: 0px;
  align-self: center;
`;
const Text = styled.p`
  /* Product design: */
  font-family: SanFranciscoText-Bold;
  font-size: 12px;
  color: #433d3d;
  letter-spacing: 1.4px;
`;

const NumberContainer = styled.div`
  display: grid;
  justify-items: center;
`;
const Container = styled.div`
  display: grid;
  justify-items: center;
`;

const Step = () => (
  <Container>
    <NumberContainer>
      <BkNumber>1</BkNumber>
      <NumberProccess>1</NumberProccess>
    </NumberContainer>
    <Text>Product Design</Text>
  </Container>
);

export default Step;
