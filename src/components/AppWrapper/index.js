import React from "react";
import styled from "styled-components";

const Wrapper = styled.div.attrs({
  // we can define static props

  // or we can define dynamic ones
  backgroundcolor: props => props.bkcolour || "#60a8c8"
})`
  margin: 28px;
  margin-bottom: 0px;
  margin-top: 0px;
  /* here we use the dynamically computed props */
  background-color: ${props => props.backgroundcolor};
`;

const AppWrapper = () => <Wrapper bkcolour="">se</Wrapper>;

export default AppWrapper;
