import React from "react";
import styled from "styled-components";
import ProjImg from "./images/Scappi.png";

const Container = styled.div`
  /* Rectangle 24: */
  display: grid;
  background: #e7e9e1;
  height: 346px;
  width: 359px;
  justify-items: center;
  @media (max-width: 420px) {
    width: 212px;
    height: 220px;
  }

  @media only screen and (device-width: 768px) {
    width: 212px;
    height: 220px;
  }
`;

const Img = styled.img`
  @media (max-width: 420px) {
    width: 184.06px;
    height: 103.42px;
  }

  @media only screen and (device-width: 768px) {
    width: 184.06px;
    height: 103.42px;
  }
`;
const Pdf = styled.a`
  /* PDF: */
  font-family: SanFranciscoText-Medium;
  font-size: 12px;
  color: #433d3d;
  letter-spacing: 1.4px;
`;
const ImgContainer = styled.div`
  align-self: center;
`;

const AkqaProjectImg = () => (
  <div>
    <Container>
      <ImgContainer>
        <Img src={ProjImg} />
      </ImgContainer>
      <div>
        <Pdf>PDF</Pdf>
      </div>
    </Container>
  </div>
);

export default AkqaProjectImg;
