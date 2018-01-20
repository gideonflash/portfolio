import React from "react";
import styled from "styled-components";

const Section = styled.div`
  width: 1024px;
  height: 100%;
  margin-top: 86px;
  display: none;
`;
const ContentContainer = styled.div`
  display: grid;
`;

const SectionThree = () => (
  <Section>
    <ContentContainer>
      <div>1</div>
      <div>2</div>
    </ContentContainer>
  </Section>
);

export default SectionThree;
