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
  margin-left: 10px;
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
  grid-template-columns: 1fr 17%;
  align-items: center;
  @media (max-width: 420px) {
    grid-template-columns: 1fr 23%;
  }
`;

const ProccessHeader = () => (
  <div>
    <Headercontianer>
      <ProjectLine />
      <ProjectType>Proccess:</ProjectType>
    </Headercontianer>
  </div>
);

export default ProccessHeader;
