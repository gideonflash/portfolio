import React from "react";
import styled from "styled-components";

import ProjectHeader from "../../../components/ProjectHeader";

const SectionOne = styled.div`
  width: 1024px;
  height: 768px;
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

const SectionTop = () => (
  <SectionOne>
    <ProjectHeader
      first="VOGUEPAY"
      second=""
      stack1="Sketch"
      slash1="//"
      stack2="Keynote"
      slash2="//"
      stack3="Invsion"
      slash3="//"
      stack4="Principle"
      slash4="//"
      stack5="Html, JavaScript & Css"
      slash5="//"
      stack6="Gulp"
      slash6="//"
      stack7="GitHub"
      slash7="//"
      stack8="Chartis.js"
    />
  </SectionOne>
);

export default SectionTop;
