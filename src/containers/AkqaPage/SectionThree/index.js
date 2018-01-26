import React from "react";
import styled from "styled-components";
import AkqaProjectDescription from "../../../components/ProjectPageComponents/AkqaProjectDescription";
import ProjImg from "../../../components/ProjectPageComponents/images/Scappi.png";
import SeekImg from "../../../components/ProjectPageComponents/images/seek.png";
import ConductorImg from "../../../components/ProjectPageComponents/images/conductor.png";
import BackpackImg from "../../../components/ProjectPageComponents/images/backpack.png";
import IrisImg from "../../../components/ProjectPageComponents/images/airbnb.png";
import Scappie from "./pdf/scappie.pdf";
import Conductor from "./pdf/conductor.pdf";
import Seek from "./pdf/googleseek.pdf";
import Backpack from "./pdf/backpack.pdf";

const Section = styled.div`
  width: 1024px;
  height: 100%;
  @media (max-width: 420px) {
    width: 300px;
    height: 100%;
    margin-bottom: 80px;
  }

  @media only screen and (device-width: 768px) {
    width: 659px;
    height: 100%;
  }
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 37.5% 1fr;
  margin-bottom: 180px;
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;
const ProjectTextContainer = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  z-index: 2;
`;
const ProjectImgContainer = styled.div`
  grid-row-start: 1;
  grid-column-start: 2;
  z-index: 2;
  justify-self: end;
  align-self: center;
  @media (max-width: 420px) {
    grid-row-start: 2;
    grid-column-start: 1;
    z-index: 1;
    justify-self: center;
  }
`;
const BkContainer = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: span 3;
  z-index: 1;
`;
const BkText = styled.p`
  /* Projects: */
  opacity: 0.24;
  font-family: Futura-Bold;
  font-size: 117px;
  color: #d8d9cf;
  letter-spacing: 0;
  @media (max-width: 420px) {
    font-size: 67px;
  }
`;
const Text = styled.p`
  /* Interface design: */
  font-family: SanFranciscoText-Bold;
  font-size: 10px;
  color: #433d3d;
  letter-spacing: 1.17px;
  justify-self: end;
  margin-top: 200px;
  margin-bottom: 180px;
  @media (max-width: 420px) {
    margin-top: 40px;
    margin-bottom: 30px;
  }

  @media only screen and (device-width: 768px) {
    margin-top: 180px;
    margin-bottom: 100px;
  }
`;

const ContainerImg = styled.div`
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

const SectionThree = () => (
  <Section>
    <Text>Project i worked on:</Text>
    <Container>
      <ProjectTextContainer>
        <AkqaProjectDescription
          projectName="Scappie"
          description="Scappi a simple recipe application, a context rich system powered by data to provide relevant information for the user; therefore creating that simplicity and control  in finding recipies"
        />
      </ProjectTextContainer>
      <ProjectImgContainer>
        <ContainerImg>
          <ImgContainer>
            <Img src={ProjImg} />
          </ImgContainer>
          <div>
            <Pdf href={Scappie} download="JamieOliver Project - Scappie">
              PDF
            </Pdf>
          </div>
        </ContainerImg>
      </ProjectImgContainer>
      <BkContainer>
        <BkText>Project1</BkText>
      </BkContainer>
    </Container>
    <Container>
      <ProjectTextContainer>
        <AkqaProjectDescription
          projectName="Google seek"
          description="Google seek is a unique way for large-scale crowd-sourced investigation
                        in disaster stricken areas. It integrates multiple sources of live streaming video data, bringing this into an interactive 360 live stream video player providing actionable analysis of any targeted environment."
        />
      </ProjectTextContainer>
      <ProjectImgContainer>
        <ContainerImg>
          <ImgContainer>
            <Img src={SeekImg} />
          </ImgContainer>
          <div>
            <Pdf href={Seek} download="Google Project - Google Seek">
              PDF
            </Pdf>
          </div>
        </ContainerImg>
      </ProjectImgContainer>
      <BkContainer>
        <BkText>Project2</BkText>
      </BkContainer>
    </Container>
    <Container>
      <ProjectTextContainer>
        <AkqaProjectDescription
          projectName="Conductor"
          description="Redefine the woman's smart watch experience. To capture the expanding female smart watch market. Conductor is a machine-learning assisted notification filtering focusing on glance-level interaction and learning what’s important for users."
        />
      </ProjectTextContainer>
      <ProjectImgContainer>
        <ContainerImg>
          <ImgContainer>
            <Img src={ConductorImg} />
          </ImgContainer>
          <div>
            <Pdf href={Conductor} download="Womens Watch Project - Conductor">
              PDF
            </Pdf>
          </div>
        </ContainerImg>
      </ProjectImgContainer>
      <BkContainer>
        <BkText>Project3</BkText>
      </BkContainer>
    </Container>
    <Container>
      <ProjectTextContainer>
        <AkqaProjectDescription
          projectName="Backpack"
          description="Backpack is an affective computing powered application that assitants children during homework. Helping children with the tools and resources they need to work at an optimal state."
        />
      </ProjectTextContainer>
      <ProjectImgContainer>
        <ContainerImg>
          <ImgContainer>
            <Img src={BackpackImg} />
          </ImgContainer>
          <div>
            <Pdf href={Backpack} download="Venture design Project - Backpack">
              PDF
            </Pdf>
          </div>
        </ContainerImg>
      </ProjectImgContainer>
      <BkContainer>
        <BkText>Project4</BkText>
      </BkContainer>
    </Container>
    <Container>
      <ProjectTextContainer>
        <AkqaProjectDescription
          projectName="Iris"
          description="Iris is a conversational interface that helps every host respond to guest inquiries in a fast, personal and accurate way when they need it the most."
        />
      </ProjectTextContainer>
      <ProjectImgContainer>
        <ContainerImg>
          <ImgContainer>
            <Img src={IrisImg} />
          </ImgContainer>
          <div />
        </ContainerImg>
      </ProjectImgContainer>
      <BkContainer>
        <BkText>Project4</BkText>
      </BkContainer>
    </Container>
  </Section>
);

export default SectionThree;
