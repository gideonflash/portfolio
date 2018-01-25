import React from "react";
import styled from "styled-components";

const BkNumber = styled.p.attrs({
  // we can define static props

  // or we can define dynamic ones
  backgroundcolor: props => props.bkcolour || "#433d3d"
})`
  opacity: 0.2;
  font-family: Futura-Bold;
  font-size: 96px;

  letter-spacing: 0;
  grid-row-start: 1;
  grid-column-start: 1;
  z-index: 1;
  margin: 0px;
  /* here we use the dynamically computed props */
  color: ${props => props.backgroundcolor};
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
  @media (max-width: 420px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

const Step = props => (
  <Container>
    <NumberContainer>
      <BkNumber bkcolour={props.colour}>{props.bkNumber}</BkNumber>
      <NumberProccess>{props.number}</NumberProccess>
    </NumberContainer>
    <Text>{props.text}</Text>
  </Container>
);

export default Step;
