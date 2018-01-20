import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: grid;
`;

const FooterContianer = styled.div`
  width: 1024px;
  height: 100%;

  justify-self: center;
  margin-top: 28px;
  margin-bottom: 28px;
  @media (max-width: 420px) {
    width: 300px;
    margin-bottom: 0px;
  }
  @media (min-width: 768px) {
    width: 660px;
    margin-bottom: 0px;
  }
`;

const BuiltWithLove = styled.a`
  /* made with by Gideon: */
  font-family: SanFranciscoText-Regular;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.84);
  letter-spacing: 1.08px;
`;

const Footer = () => (
  <Section>
    <FooterContianer>
      <BuiltWithLove>Built with love by Gideon</BuiltWithLove>
    </FooterContianer>
  </Section>
);

export default Footer;
