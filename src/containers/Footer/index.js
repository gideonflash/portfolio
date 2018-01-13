import React, { Component } from "react";
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
`;

const BuiltWithLove = styled.a`
  /* made with by Gideon: */
  font-family: SanFranciscoText-Regular;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.84);
  letter-spacing: 1.08px;
`;

class Footer extends Component {
  render() {
    return (
      <Section>
        <FooterContianer>
          <BuiltWithLove>Built with love by Gideon</BuiltWithLove>
        </FooterContianer>
      </Section>
    );
  }
}

export default Footer;
