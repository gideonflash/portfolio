import React from "react";
import styled from "styled-components";

const ProjectType = styled.h1`
  /* Project:: */
  font-family: SanFranciscoText-Bold;
  font-size: 10px;
  color: #433d3d;
  letter-spacing: 1.17px;
  font-weight: normal;
  display: inline-block;
`;
const ProjectLine = styled.span`
  display: inline-block;
  background-color: #ffffff;
  min-width: 30px;
  height: 2px;
  margin-left: 10px;
  margin-bottom: 1px;
  @media (max-width: 420px) {
    height: 1px;
  }
  @media only screen and (device-width: 768px) {
    height: 1px;
  }
`;

const Headercontianer = styled.div`
  display: grid;
  grid-template-columns: 17% 1fr;
  align-items: center;
`;

const ProccessHeader = () => (
  <div>
    <Headercontianer>
      <ProjectType>Proccess:</ProjectType>
      <ProjectLine />
    </Headercontianer>
  </div>
);

export default ProccessHeader;
