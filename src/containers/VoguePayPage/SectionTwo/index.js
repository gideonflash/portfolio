import React from "react";
import styled from "styled-components";
import ProjectDeliverables from "../../../components/ProjectPageComponents/ProjectDeliverables";
import DesignChallenge from "../../../components/ProjectPageComponents/DesignChallenge";

const Section = styled.div`
  width: 1024px;
  height: 100%;
  @media (max-width: 420px) {
    width: 300px;
  }

  @media only screen and (device-width: 768px) {
    width: 659px;
    margin-top: 80px;
  }
`;
const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 38% 1fr;
  @media only screen and (device-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 420px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
  }
`;
const DeliverablecContianer = styled.div`
  @media (max-width: 420px) {
    grid-row-start: 2;
    margin-top: 24px;
  }
  @media only screen and (device-width: 768px) {
    grid-row-start: 2;
  }
`;
const DesignChallenge2 = styled(DesignChallenge)``;

const SectionTwo = () => (
  <Section>
    <ContentContainer>
      <DeliverablecContianer>
        <ProjectDeliverables
          item1="Service deck design and copy"
          item2="Service interface design"
          item3="Service Front-end development"
        />
      </DeliverablecContianer>
      <DesignChallenge2
        headertextOne="Fuelling the true spirit"
        headertextTwo="of trade in Africa."
        paragraph1="VoguePay came about after the first-hand experience of the founding partners struggling through the tedious processes of receiving and making payments in and out of Africa. Almost every step requires a high investment and VoguePay exist to provide infrastructure to make this process easy. Ever since 2012, the VoguePay team has been dedicated to offering safe and convenient payment services to Nigerians and international businesses. "
        paragraph2="I was brought in to redesign and build the front-end interface for the new product experience and solve the usability problems they have been facing with in their current platform. I designed the new experience and have been leading the front-end implementation of the product. The project currently is in progress launch date mid-February."
      />
    </ContentContainer>
  </Section>
);

export default SectionTwo;
