import React from "react";
import styled from "styled-components";
import NextProject from "../../../components/ProjectPageComponents/NextProject";

const SectionOne = styled.div`
  width: 1024px;
  height: 100%;
  margin-bottom: 80px;
  margin-top: 80px;
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

const SectionFive = () => (
  <SectionOne>
    <div>
      <NextProject name="AKQA" project="akqa" />
    </div>
  </SectionOne>
);

export default SectionFive;
