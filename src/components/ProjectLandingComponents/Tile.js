import React from "react";
import styled from "styled-components";

const TileContainer = styled.div``;
const ProjectTile = styled.h1`
  /* VOGUEPAY: */
  font-family: Futura-Bold;
  font-size: 92px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 87px;
  text-shadow: 0 2px 22px rgba(0, 0, 0, 0.26);
  @media (max-width: 420px) {
    font-size: 24px;
  }
  @media (max-width: 768px) {
    font-size: 57px;
  }
`;

const ProjectTitleLanding = props => (
  <TileContainer>
    <ProjectTile>{props.title}</ProjectTile>
  </TileContainer>
);

export default ProjectTitleLanding;
