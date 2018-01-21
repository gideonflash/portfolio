import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
`;

const NameContainer = styled.div`
  display: grid;
`;

const Name = styled.div`
  font-family: Futura-Bold;
  font-size: 92px;
  color: #433d3d;
  letter-spacing: 0;
  line-height: 87px;
  @media (max-width: 420px) {
    /* ANALYTICS INTELLIGEN: */

    font-size: 30px;
    line-height: 39px;
  }
  @media only screen and (device-width: 768px) {
    /* ANALYTICS INTELLIGEN: */

    font-size: 60px;
    line-height: 61px;
  }
`;

const Namewrapper = styled.div`
  margin-top: 180px;
`;

const AboutPage = () => (
  <Container>
    <NameContainer>
      <Namewrapper>
        <Name>
          ABOUT <br /> GIDEON
        </Name>
      </Namewrapper>
    </NameContainer>
  </Container>
);

export default AboutPage;
