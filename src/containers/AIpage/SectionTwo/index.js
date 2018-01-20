import React from "react";
import styled from "styled-components";

const Section = styled.div`
  width: 1024px;
  height: 100%;
  margin-top: 100px;
`;
const ContentContainer = styled.div`
  display: grid;
`;

const SectionTwo = () => (
  <Section>
    <ContentContainer>
      <div>1</div>
      <div>2</div>
    </ContentContainer>
  </Section>
);

export default SectionTwo;
