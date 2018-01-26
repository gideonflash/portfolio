import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Title = styled.h1`
  /* Scappie: */
  font-family: Futura-Bold;
  font-size: 60px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 87px;
  text-shadow: 0 2px 22px rgba(0, 0, 0, 0.26);
  font-weight: nonormal;
`;
const Text = styled.p`
  /* Subject as I can. I Copy: */
  font-family: SanFranciscoText-Regular;
  font-size: 14px;
  color: #443d3d;
  letter-spacing: 0;
  margin-top: 30px;
`;

const AkqaProjectDescription = props => (
  <Container>
    <div>
      <Title>{props.projectName}</Title>
      <Text>{props.description}</Text>
    </div>
  </Container>
);

export default AkqaProjectDescription;
