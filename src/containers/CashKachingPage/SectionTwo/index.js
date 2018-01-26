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
        headertextOne="In search"
        headertextTwo="of new opportunities."
        paragraph1="CashKaching allows users to play in free daily, weekly and monthly lotto draws and gives them the chance to win money, discover deals and participate in various tasks for rewards. It's an alternative way to deliver entertainment, intrigue and put some extra money in users pockets."
        paragraph2="This is spin-off project from the VoguePay group. I was brought in just as the initial concept was being developed. Having conversations with the CEO it was clear he wanted to elevate the concept from its initial state. I help redefine the concept by working on the interface design and currently working on the UI development."
      />
    </ContentContainer>
  </Section>
);

export default SectionTwo;
