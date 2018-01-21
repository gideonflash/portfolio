import React from "react";
import styled from "styled-components";
import AiImg from "./images/Dashboard.png";

const Container = styled.div`
  /* Rectangle 21: */
  background: #f58d61;
  border-radius: 4px;
  height: 524px;
  width: 824px;
  margin-top: 100px;

  justify-self: center;
  @media (max-width: 420px) {
    height: 223px;
    width: 292px;
    margin-top: 80px;
  }

  @media only screen and (device-width: 768px) {
    height: 338px;
    width: 531px;
    margin-top: 40px;
  }
`;
const ImgWeb = styled.img`
  @media (max-width: 420px) {
    height: 181px;
    width: 239px;
  }

  @media only screen and (device-width: 768px) {
    height: 278px;
    width: 368px;
  }
`;
const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  margin-top: 100px;
  @media (max-width: 420px) {
    margin-top: 40px;
  }
`;
const Self = styled.div`
  display: grid;
  justify-items: center;
  margin-top: 42px;
  @media (max-width: 420px) {
    margin-top: 26px;
  }

  @media only screen and (device-width: 768px) {
    height: 278px;
    width: 368px;
    margin-left: 86px;
  }
`;
const Text = styled.p`
  /* Interface design: */
  font-family: SanFranciscoText-Bold;
  font-size: 10px;
  color: #433d3d;
  letter-spacing: 1.17px;
  justify-self: end;
`;

const ProjectImg = () => (
  <Wrapper>
    <Text>UI development</Text>
    <Container>
      <Self>
        <ImgWeb src={AiImg} />
      </Self>
    </Container>
  </Wrapper>
);

export default ProjectImg;