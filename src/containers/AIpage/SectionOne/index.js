import React from "react";
import styled from "styled-components";

import ProjectHeader from "../../../components/ProjectHeader";

const SectionOne = styled.div`
  width: 1024px;
  height: 768px;
  @media (max-width: 420px) {
    width: 300px;
  }

  @media only screen and (device-width: 768px) {
    width: 659px;
  }
`;

const SectionTop = () => (
  <SectionOne>
    <ProjectHeader />
  </SectionOne>
);

export default SectionTop;
